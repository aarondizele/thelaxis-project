export default {
  methods: {
    onToggleEventLike (id) {
      if (this.userLikedEvent === true) {
        this.$store.dispatch('dislikeEvent', id)
      } else {
        this.$store.dispatch('likeEvent', id)
      }
    },
    onToggleEventInterested (id) {
      if (this.userInterestedOnEvent === true) {
        this.$store.dispatch('userNotInterested', id)
      } else {
        this.$store.dispatch('userInterested', id)
      }
    }
  }
}
