<template>
  <div class="link-field">
    <label>Text</label>
    <input type="text" v-model="link.text">
    <label>Url</label>
    <input type="text" v-model="link.url">
    <button v-if="showRemove" @click="removeClick">Del</button>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'LinkField',
  props: {
    link: Object,
    showRemove: Boolean
  },
  methods: {
    removeClick () {
      this.$emit('onRemove')
    }
  }
}
</script>

<style lang="scss">
.link-field {
  display: flex;
  align-items: center;
}
</style>