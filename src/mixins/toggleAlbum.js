export default {
  methods: {
    onToggleAlbumLike (id) {
      if (this.userLikedAlbumPost === true) {
        this.$store.dispatch('dislikeAlbumPost', id)
      } else {
        this.$store.dispatch('likeAlbumPost', id)
      }
    }
  }
}
