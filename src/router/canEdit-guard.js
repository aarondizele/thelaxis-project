import store from '../store'

export default (to, from, next) => {
  if (store.dispatch('canDelete')) {
    next()
  } else {
    next(false)
  }
}
