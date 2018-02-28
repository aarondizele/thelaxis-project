import firebase from 'firebase'

const state = {
  blog: [],
  userLikedBlogPost: null,
}

const getters = {
    blog: state => state.blog,
    getBlogPost (state) {
      return (postId) => {
        return state.blog.find(post => post.id === postId)
      }
    },
    userLikedBlogPost: state => state.userLikedBlogPost,
}

const mutations = {
  'GET_BLOG': (state, payload) => {
    return state.blog = payload
  },
  'USER_LIKED_BLOG_POST': (state, payload) => {
    return state.userLikedBlogPost = payload
  },
}

const actions = {
  getblog: ({commit}) => {
    commit('SET_LOADIND', true)
    firebase.firestore().collection('blog')
      .orderBy('createdAt', 'desc')
      .limit(25)
      .onSnapshot((docSnapshot) => {
        if (docSnapshot && docSnapshot.exists) {
          let blog = [];
          docSnapshot.forEach(doc => {
            const data = doc.data();
            blog.push({
              id: doc.id,
              backgroundImageURL: data.backgroundImageURL,
              content: data.content,
              likes: data.likes,
              comments: data.comments,
              likeCounts: data.likeCounts,
              commentCounts: data.commentCounts,
              viewCounts: data.viewCounts,
              title: data.title,
              subtitle: data.subtitle,
              tags: data.tags,
              createdAt: data.createdAt
            });
          })
          // Get the last visible document
          let lastVisible = docSnapshot.docs[docSnapshot.docs.length-1]
          // get the next 25 blog posts
          let next = firebase.firestore().collection('blog')
                  .orderBy('createdAt', 'desc')
                  .startAfter(lastVisible)
                  .limit(25);

          commit('SET_LOADIND', false);
          commit('GET_BLOG', blog);
        }
      }, (err) => {
          commit('SET_LOADIND', false);
          console.error(err);
      })
  },
  createBlogPost ({commit}, payload) {
    commit('SET_LOADIND', true)
    let backgroundImageURL;
    let key;
    firebase.firestore().collection('blog')
      .add({
        createdAt: Date.now(),
        likes: [],
        comments: [],
        likeCounts: 0,
        commentCounts: 0,
        viewCounts: 0,
        title: payload.title,
        subtitle: payload.subtitle,
        tags: payload.tags,
        content: payload.content
      })
      .then(doc => {
        key: doc.id;
        return key
      })
      .then(key => {
        const filename = payload.image.name;
        const ext = filename.slice(filename.lastIndexOf('.'));
        return firebase.storage().ref(`blog/${key}.${ext}`).put(payload.image);
      })
      .then(fileData => {
        backgroundImageURL = fileData.metadata.downloadURLs[0];
        return firebase.firestore().doc(`blog/${key}`).update({backgroundImageURL: backgroundImageURL});
      })
      .then( _=> {
        commit('SET_LOADING', false);
      })
      .catch(err => {
        commit('SET_LOADIND', false);
        console.error(err);
      })
  },
  likeBlogPost ({commit, getters}, payload) { // payload = eventId
    let data = {};
    let userId = getters.user.id
    data[userId] = true
    firebase.firestore().doc(`blog/${payload}/likes`)
        // .update(data)
        .set(data, {merge: true})
        .then(() => {
          commit('USER_LIKED_BLOG_POST', true)
          console.warn(`Blog Post '${payload}' liked.`);
        })
        .catch(err => {
          console.error(err)
        })
  },
  dislikeBlogPost ({commit, getters}, payload) {
    firebase.firestore().doc(`blog/${payload}/likes/${getters.user.id}`)
      .delete()
      .then(() => {
        commit('USER_LIKED_BLOG_POST', null)
        console.warn(`Blog Post '${payload}' disliked.`);
      })
      .catch(err => {
          console.error(err)
      })
  },
  knowIfuserLikedBlogPost ({commit, getters}, payload) { // payload = postId
    firebase.firestore().doc(`blog/${payload}/likes/${getters.user.id}`)
      .onSnapshot((doc) => {
        if (doc && doc.exists) {
          commit('USER_LIKED_BLOG_POST', true)
        } else {
          commit('USER_LIKED_BLOG_POST', null)
        }
      })
  },
  commentBlogPost ({commit, getters}, payload) {
    firebase.firestore().doc(`blog/${payload.postId}/comments`)
      .add({
          userId: getters.user.id,
          userAvatar: getters.user.avatar,
          username: getters.user.username,
          createdAt: Date.now(),
          comment: payload.comment
      })
      .then(() => {
          commit('SET_LOADIND', false)
      })
      .catch(err => {
          console.log(err)
          commit('SET_LOADIND', false)
      })
  },
  updateBlogPostView ({commit}, payload) {
    firebase.firestore().doc(`blog/${payload.articleId}/viewCounts`).update(payload.counter)
      .then((doc) => {
        console.log(doc.data());
      })
      .catch(err => console.error(err))
  }
}

export default {
    state,
    getters,
    mutations,
    actions
}
