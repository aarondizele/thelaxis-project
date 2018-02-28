import firebase from 'firebase'

const state = {
    loading: false,
    error: null
}

const getters = {
    loading: state => state.loading,
    error: state => state.error
}

const mutations = {
    SET_LOADING (state, payload) {
        return state.loading = payload
    },
    SET_ERROR (state, payload) {
        return state.error = payload
    },
    CLEAR_ERROR (state, payload) {
        return state.error = null
    }
}

const actions = {
    setError ({commit}, payload) {
        commit('SET_ERROR', payload)
    },
    checkAuthorization ({commit, getters}, allowedRoles) {
      const user = getters.user
      if (!user) return false
      for (const role of allowedRoles) {
        if (user.roles[role]) {
          return true
        }
      }
      return false
    },
    canRead ({commit}) {
      const allowed = ['admin', 'editor', 'subscriber']
      return this.checkAuthorization(allowed)
    },
    canEdit ({commit}) {
      const allowed = ['admin', 'editor']
      return this.checkAuthorization(allowed)
    },
    canDelete ({commit}) {
      const allowed = ['admin']
      return this.checkAuthorization(allowed)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}
