<template>
  <div>
    <input type="file" ref="imageInput" @change="fileInputChange" />
    <button @click="removeImageClick">Remove Image</button>
  </div>
</template>

<script>
export default {
  name: 'ImageField',
  props: {
    image: Object
  },
  methods: {
    fileInputChange () {
      if (this.$refs['imageInput'].files && this.$refs['imageInput'].files.length > 0) {
        var fileReaderDesktop = new FileReader()
        fileReaderDesktop.onload = () => {
          this.image.src = fileReaderDesktop.result
        }
        fileReaderDesktop.readAsDataURL(this.$refs['imageInput'].files[0])
      }
    },
    removeImageClick () {
      this.image.src = ''
      this.$refs['imageInput'].value = null
    }
  }
}
</script>
