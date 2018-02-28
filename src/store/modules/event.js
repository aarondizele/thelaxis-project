import firebase from 'firebase'

const state = {
  events: [],
  userLikedEvent: null,
  userInterestedOnEvent: null
}

const getters = {
    events: state => state.events,
    getOneEvent: (state) => {
      return (eventId) => {
        return state.events.find(event => event.id === eventId)
      }
    },
    userLikedEvent: state => state.userLikedEvent,
    userInterestedOnEvent: state => state.userInterestedOnEvent,
}

const mutations = {
  'GET_EVENTS': (state, payload) => {
    return state.events = payload
  },
  'USER_LIKED_EVENT': (state, payload) => {
    return state.userLikedEvent = payload
  },
  'USER_INTERESTED': (state, payload) => {
    return state.userInterestedOnEvent = payload
  }
}

const actions = {
  getEvents: ({commit}) => {
    commit('SET_LOADIND', true)
    firebase.firestore().collection('posts')
      .where('category', '==', 'events')
      .orderBy('createdAt', 'desc')
      .limit(25)
      .onSnapshot((docSnapshot) => {
        if (docSnapshot && docSnapshot.exists) {
          let events = [];
          docSnapshot.forEach(doc => {
            const data = doc.data();
            events.push({
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
          // get the next 25 events posts
          let next = firebase.firestore().collection('posts')
                  .where('category', '==', 'events')
                  .orderBy('createdAt', 'desc')
                  .startAfter(lastVisible)
                  .limit(25);

          commit('SET_LOADIND', false);
          commit('GET_EVENTS', events);
        }
      }, (err) => {
          commit('SET_LOADIND', false);
          console.error(err);
      })
  },
  createEvent ({commit}, payload) {
    commit('SET_LOADIND', true)
    let imageURLs = [];
    let key;
    firebase.firestore().collection('posts')
      .add({
        date: payload.date,
        place: payload.place,
        description: payload.description,
        likes: [],
        comments: [],
        likeCounts: 0,
        commentCounts: 0,
        interestedCounts: 0,
        category: 'events',
        interested: [],
        title: payload.title,
        createdAt: Date.now()
      })
      .then(doc => {
        key: doc.id;
        return key
      })
      .then(key => {
        // let downloadedURls;
        let imagesIndex = _.range(payload.images.length)
        _.each(imagesIndex, (idx) => {
          var randImage = payload.images[idx]
          var storageRef = firebase.storage().ref('events')
          var uploadTask = storageRef.child(`${key}/${randImage.name}`).put(randImage)
          uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
              // UPLOAD TASK STATE
            },
            (error) => {
              console.error(err);
            },
            () => {
              var downloadURL = uploadTask.snapshot.downloadURL
              // downloadedURls = firebase.database().ref(`/posts/${key}/imageURLs`).push(downloadURL)
              return firebase.firestpre().doc(`/posts/${key}/imageURLs`).set(downloadURL)
            })
        })
      })
      .then( _=> {
        commit('SET_LOADING', false);
      })
      .catch(err => {
        commit('SET_LOADIND', false);
        console.error(err);
      })
  },
  likeEvent ({commit, getters}, payload) { // payload = eventId
    let data = {};
    let userId = getters.user.id
    data[userId] = true
    firebase.firestore().doc(`posts/${payload}/likes`)
        // .update(data)
        .set(data, {merge: true})
        .then(() => {
          commit('USER_LIKED_EVENT', true)
          console.warn(`Event ${payload} liked.`);
        })
        .catch(err => {
          console.error(err)
        })
  },
  dislikeEvent ({commit, getters}, payload) {
    firebase.firestore().doc(`posts/${payload}/likes/${getters.user.id}`)
      .delete()
      .then(() => {
        commit('USER_LIKED_EVENT', null)
        console.warn(`Event ${payload} disliked.`);
      })
      .catch(err => {
          console.error(err)
      })
  },
  userInterested ({commit, getters}, payload) { // payload = eventId
    let data = {};
    let userId = getters.user.id
    data[userId] = true
    firebase.firestore().doc(`posts/${payload}/interested`)
        // .update(data)
        .set(data, {merge: true})
        .then(() => {
          commit('USER_INTERESTED', true)
          console.warn(`User's interested on '${payload}' event.`);
        })
        .catch(err => {
          console.error(err)
        })
  },
  userNotInterested ({commit, getters}, interested) { // payload = eventId
    firebase.firestore().doc(`posts/${payload}/interested/${getters.user.id}`)
      .delete()
      .then(() => {
        commit('USER_INTERESTED', null)
        console.warn(`User isn't interested on '${payload}' event.`);
      })
      .catch(err => {
          console.error(err)
      })
  },
  knowIfuserLikedEvent ({commit, getters}, payload) { // payload = eventId
    firebase.firestore().doc(`posts/${payload}/likes/${getters.user.id}`)
      .onSnapshot((doc) => {
        if (doc && doc.exists) {
          commit('USER_LIKED_EVENT', true)
        } else {
          commit('USER_LIKED_EVENT', null)
        }
      })
  },
  knowIfuserIsInterestedOnEvent ({commit, getters}, payload) { // payload = eventId
    firebase.firestore().doc(`posts/${payload}/interested/${getters.user.id}`)
      .onSnapshot((doc) => {
        if (doc && doc.exists) {
          commit('USER_INTERESTED', true)
        } else {
          commit('USER_INTERESTED', null)
        }
      })
  },
  commentEvent ({commit, getters}, payload) {
    firebase.firestore().doc(`posts/${payload.eventId}/comments`)
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
  }
}

export default {
    state,
    getters,
    mutations,
    actions
}
