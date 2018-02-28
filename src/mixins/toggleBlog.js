export default {
  methods: {
    onToggleAlbumLike (id) {
      if (this.userLikedBlogPost === true) {
        this.$store.dispatch('dislikeBlogPost', id)
      } else {
        this.$store.dispatch('likeBlogPost', id)
      }
    }
  }
}
