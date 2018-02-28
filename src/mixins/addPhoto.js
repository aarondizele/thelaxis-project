export default {
  methods: {
    remove () {
      return this.imageURL.splice(1)
    },
    onFilePicked (e) {
      const files = e.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return this.error = 'Photo ou vidéo invalide. Veuillez réessayez avec une autre photo.'
      }
      const fileReader = new FileReader()
        fileReader.readAsDataURL(files[0])
        fileReader.addEventListener('load', () => {
          this.imageURL = fileReader.result
        })
        this.image = files[0]
     },
  }
}
