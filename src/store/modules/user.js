import firebase from 'firebase'

const state = {
    user: null
}

const getters = {
    user: state => state.user
}

const mutations = {
    SET_USER (state, payload) {
        return state.user = payload
    }
}

const actions = {
  updateUserProfile ({commit, getters}, payload) {
    commit('SET_LOADING', true)
    const userId = getters.user.id
    let avatar;
    firebase.firestore().doc(`users/${userId}`)
      .set({
        username: payload.username,
        email: payload.email,
        roles: ['subscriber']
      }, {merge: true})
      .then(_ => {
        const filename = payload.image.name;
        const ext = filename.slice(filename.lastIndexOf('.'));
        return firebase.storage().ref(`users/${userId}.${ext}`).put(payload.image);
      })
      .then(fileData => {
        avatar = fileData.metadata.downloadURLs[0];
        return firebase.firestore().collection('posts').doc(key).update({avatar: avatar});
      })
      .then( _=> {
        commit('SET_LOADING', false);
      })
      .catch(err => {
        commit('SET_LOADIND', false);
        console.error(err);
      })
  },
  fetchUserProfile ({commit, getters}) {
      commit('SET_LOADING', true)
      firebase.firestore().doc(`/users/${getters.user.id}`)
          .onSnapshot((doc) => {
              let data = doc.data()
              const userProfile = {
                  id: doc.id,
                  username: data.username,
                  email: data.email,
                  roles: data.roles,
                  avatar: data.avatar
              }
              commit('SET_USER', userProfile)
              commit('SET_LOADING', false)
          }, (error) => {
              commit('SET_ERROR', error)
              commit('SET_LOADING', false)
              console.log(error)
          })
  },
  autoSignIn ({commit}, payload) {
      commit('SET_USER', {
          id: payload.uid
      })
  },
  signupWithEmail({ commit }, payload) {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
          .then(user => {
              const user$ = {
                  id: user.uid,
                  email: payload.email
              }
              commit('SET_USER', user$)
              commit('SET_LOADING', false)
          })
          .catch(error => {
              let errorCode = ''
              switch (error.code) {
                  case 'auth/weak-password':
                      errorCode = 'Le mot de passe doit avoir au-moins 6 charactères.'
                      break;
                  case 'auth/email-already-in-use':
                      errorCode = 'L\'adresse email existe déjà sur un autre compte.'
                      break;
                  case 'auth/invalid-email':
                      errorCode = 'L\'adresse email n\'est pas valide.'
                      break;
                  case 'auth/network-request-failed':
                      errorCode = 'Vérifiez votre connexion internet.'
                  default:
                      errorCode = error.code
              }
              commit('SET_ERROR', errorCode)
              commit('SET_LOADING', false)
          })
  },
  loginWithEmail ({commit}, payload) {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
          .then(user => {
              commit('SET_LOADING', false)
              const _user = {
                  id: user.uid
              }
              commit('SET_USER', _user)
          })
          .catch(error => {
              let errorCode = ''
              switch (error.code) {
                  case 'auth/user-not-found':
                      errorCode = "Il n'y a pas d'utilisateur correspondant à cette adresse email."
                      break;
                  case 'auth/wrong-password':
                      errorCode = "Le mot de passe est invalide pour cette addresse email"
                      break;
                  case 'auth/invalid-email':
                      errorCode = "L'adresse email n'est pas valide."
                      break;
                  case 'auth/network-request-failed':
                      errorCode = 'Vérifiez votre connexion internet.'
                  default:
                      errorCode = error.code
              }
              commit('SET_LOADING', false)
              commit('SET_ERROR', errorCode)
          })
  },
  loginWithGoogle: ({ commit }) => {
      let provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
          .then(user => {
              const user$ = {
                  id: user.uid,
                  email: user.email,
                  avatar: user.photoURL
              }
              commit('SET_USER', user$)
              commit('SET_LOADING', false)
          })
  },
  loginWithFacebook: ({ commit }) => {
      let provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().signInWithPopup(provider)
          .then(user => {
              const user$ = {
                  id: user.uid,
                  email: user.email,
                  avatar: user.photoURL
              }
              commit('SET_USER', user$)
              commit('SET_LOADING', false)
          })
  },
  logout({ commit }) {
      firebase.auth().signOut()
      commit('SET_USER', null)
  }
}

export default {
    state,
    getters,
    mutations,
    actions
}
