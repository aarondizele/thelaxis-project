import firebase from 'firebase'

const state = {
  album: [],
  userLikedAlbumPost: null
}

const getters = {
    album: state => state.album,
    getAlbumPost (state) {
      return (albumPostId) => {
        return state.album.find(post => post.id === albumPostId)
      }
    },
    userLikedAlbumPost: state => state.userLikedAlbumPost
}

const mutations = {
  'GET_ALBUM': (state, payload) => {
    return state.album = payload
  },
  'USER_LIKED_ALBUM_POST': (state, payload) => {
    return state.userLikedAlbumPost = payload
  }
}

const actions = {
  getAlbum: ({commit}) => {
    commit('SET_LOADIND', true)
    firebase.firestore().collection('posts')
      .where('category', '==', 'album')
      .orderBy('createdAt', 'desc')
      .limit(25)
      .onSnapshot((docSnapshot) => {
        if (docSnapshot && docSnapshot.exists) {
          let album = [];
          docSnapshot.forEach(doc => {
            const data = doc.data();
            album.push({
              id: doc.id,
              createdAt: data.createdAt,
              place: data.place,
              imageURL: data.imageURL,
              description: data.description,
              likes: data.likes,
              comments: data.comments,
              likeCounts: data.likeCounts,
              commentCounts: data.commentCounts,
              viewCounts: data.viewCounts,
              category: data.category
            });
          })
          // Get the last visible document
          let lastVisible = docSnapshot.docs[docSnapshot.docs.length - 1]
          // get the next 25 album posts
          let next = firebase.firestore().collection('posts')
                  .where('category', '==', 'album')
                  .orderBy('createdAt', 'desc')
                  .startAfter(lastVisible)
                  .limit(25);

          commit('SET_LOADIND', false);
          commit('GET_ALBUM', album);
        }
      }, (err) => {
          commit('SET_LOADIND', false);
          console.error(err);
      })
  },
  postOnAlbum ({commit}, payload) {
    commit('SET_LOADIND', true)
    let imageURL;
    let key;
    firebase.firestore().collection('posts')
      .add({
        createdAt: Date.now(),
        place: payload.place,
        description: payload.description,
        likes: [],
        comments: [],
        likeCounts: 0,
        commentCounts: 0,
        viewCounts: 0,
        category: 'album'
      })
      .then(doc => {
        key: doc.id;
        return key
      })
      .then(key => {
        const filename = payload.image.name;
        const ext = filename.slice(filename.lastIndexOf('.'));
        return firebase.storage().ref(`album/${key}.${ext}`).put(payload.image);
      })
      // EXPERIMENTAL !!!
      // .then(fileData => {
      //   imageURL = fileData.metadata.downloadURLs[0];
      //   return firebase.firestore().collection('posts').doc(key).update({imageURL: imageURL});
      // })
      .then( _=> {
        commit('SET_LOADING', false);
      })
      .catch(err => {
        commit('SET_LOADIND', false);
        console.error(err);
      })
  },
  likeAlbumPost ({commit, getters}, payload) { // payload = postId
    let data = {};
    let userId = getters.user.id
    data[userId] = true
    firebase.firestore().doc(`posts/${payload}/likes`)
        // .update(data)
        .set(data, {merge: true})
        .then(() => {
          commit('USER_LIKED_ALBUM_POST', true)
          console.warn(`Album Post ${payload} added.`);
        })
        .catch(err => {
          console.error(err)
        })
  },
  dislikeAlbumPost ({commit, getters}, payload) {
    firebase.firestore().doc(`posts/${payload}/likes/${getters.user.id}`)
      .delete()
      .then(() => {
        commit('USER_LIKED_ALBUM_POST', null)
        console.warn(`Album Post ${payload} deleted.`);
      })
      .catch(err => {
          console.error(err)
      })
  },
  knowIfuserLikedAlbumPost ({commit, getters}, payload) { // payload = postId | crucial
    firebase.firestore().doc(`posts/${payload}/likes/${getters.user.id}`)
      .onSnapshot((doc) => {
        if (doc && doc.exists) {
          commit('USER_LIKED_ALBUM_POST', true)
        } else {
          commit('USER_LIKED_ALBUM_POST', null)
        }
      })
  },
  commentAlbumPost ({commit, getters}, payload) {
    firebase.firestore().doc(`posts/${payload.postId}/comments`)
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
  updateView ({commit}, payload) {
    firebase.firestore().doc(`posts/${payload.postId}/viewCounts`).update(payload.counter)
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
