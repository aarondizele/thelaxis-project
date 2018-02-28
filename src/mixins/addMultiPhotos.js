export default {
  methods: {
    remove (i) {
      return this.imageURLs.splice(i, 1)
    },
    onFilePicked (e) {
      const files = e.target.files
      let filename = files[0].name
      let imageExists = this.images.find(image => image.name === filename)

      if (imageExists) return;

      if (filename.lastIndexOf('.') <= 0) {
        return this.error = 'Photo ou vidéo invalide. Veuillez réessayez avec une autre photo.'
      }

      const fileReader = new FileReader()
        fileReader.readAsDataURL(files[0])
        fileReader.addEventListener('load', () => {
          this.imageURLs.push(fileReader.result)
        })
        this.images.push(files[0])
     }
  }
}
