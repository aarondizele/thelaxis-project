import firebase from 'firebase'

const state = {
  allPosts: []
}

const getters = {
    allPosts: state => state.allPosts,
    getPost (state) {
      return (postId) => {
        return state.allPosts.find(post => post.id === postId)
      }
    }
}

const mutations = {
  'GET_ALL_POSTS': (state, payload) => {
    return state.allPosts = payload
  }
}

const actions = {
  getAllPosts: ({commit}) => {
    commit('SET_LOADIND', true)
    firebase.firestore().collection('posts')
      .orderBy('createdAt', 'desc')
      .limit(25)
      .onSnapshot((docSnapshot) => {
        if (docSnapshot && docSnapshot.exists) {
          let allPosts = [];
          docSnapshot.forEach(doc => {
            const data = doc.data();
            // Differenciation with category
            allPosts.push({
              id: doc.id,
              createdAt: data.createdAt,
              place: data.place,
              imageURL: data.imageURL,
              description: data.description,
              likes: data.likes,
              comments: data.comments,
              likeCounts: data.likeCounts,
              commentCounts: data.commentCounts,
              category: data.category,
              imageURLs: data.imageURLs,
              interested: data.interested,
              title: data.title
            });
          })
          // Get the last visible document
          let lastVisible = docSnapshot.docs[docSnapshot.docs.length-1]
          // get the next 25 album posts
          let next = firebase.firestore().collection('posts')
                  .orderBy('createdAt', 'desc')
                  .startAfter(lastVisible)
                  .limit(25);

          commit('SET_LOADIND', false);
          commit('GET_ALL_POSTS', allPosts);
        }
      }, (err) => {
          commit('SET_LOADIND', false);
          console.error(err);
      })
  },
  filterByAlbum: ({commit}) => {
    commit('SET_LOADIND', true)
    firebase.firestore().collection('posts')
      .where('category', '==', 'album')
      .orderBy('createdAt', 'desc')
      .limit(25)
      .onSnapshot((docSnapshot) => {
        if (docSnapshot && docSnapshot.exists) {
          let allPosts = [];
          docSnapshot.forEach(doc => {
            const data = doc.data();
            // Differenciation with category
            allPosts.push({
              id: doc.id,
              createdAt: data.createdAt,
              place: data.place,
              imageURL: data.imageURL,
              description: data.description,
              likes: data.likes,
              comments: data.comments,
              likeCounts: data.likeCounts,
              commentCounts: data.commentCounts,
              category: data.category
            });
          })
          // Get the last visible document
          let lastVisible = docSnapshot.docs[docSnapshot.docs.length-1]
          // get the next 25 album posts
          let next = firebase.firestore().collection('posts')
                  .orderBy('createdAt', 'desc')
                  .startAfter(lastVisible)
                  .limit(25);

          commit('SET_LOADIND', false);
          commit('GET_ALL_POSTS', allPosts);
        }
      }, (err) => {
          commit('SET_LOADIND', false);
          console.error(err);
      })
  },
  filterByEvent: ({commit}) => {
    commit('SET_LOADIND', true)
    firebase.firestore().collection('posts')
      .where('category', '==', 'events')
      .orderBy('createdAt', 'desc')
      .limit(25)
      .onSnapshot((docSnapshot) => {
        if (docSnapshot && docSnapshot.exists) {
          let allPosts = [];
          docSnapshot.forEach(doc => {
            const data = doc.data();
            // Differenciation with category
            allPosts.push({
              id: doc.id,
              date: data.date,
              createdAt: data.createdAt,
              place: data.place,
              imageURLs: data.imageURLs,
              description: data.description,
              likes: data.likes,
              comments: data.comments,
              likeCounts: data.likeCounts,
              commentCounts: data.commentCounts,
              interestedCounts: data.interestedCounts,
              category: data.category,
              interested: data.interested,
              title: data.title
            });
          })
          // Get the last visible document
          let lastVisible = docSnapshot.docs[docSnapshot.docs.length-1]
          // get the next 25 album posts
          let next = firebase.firestore().collection('posts')
                  .orderBy('createdAt', 'desc')
                  .startAfter(lastVisible)
                  .limit(25);

          commit('SET_LOADIND', false);
          commit('GET_ALL_POSTS', allPosts);
        }
      }, (err) => {
          commit('SET_LOADIND', false);
          console.error(err);
      })
  }
}

export default {
    state,
    getters,
    mutations,
    actions
}
