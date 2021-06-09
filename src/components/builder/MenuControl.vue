<template>
  <div>
    <button @click="addLink(menu)">Add Link</button>
    <div v-for="(menuItem, menuIdx) in menu">
      <fieldset>
        <legend>Link</legend>
        <link-field :link="menuItem" :show-remove="true" @onRemove="removeLink(menu, menuIdx)" />
        <button v-if="menuItem.children" @click="removeAllChildren(menuItem)">Remove All Children</button>
        <button v-if="!menuItem.children" @click="addChildren(menuItem)">Add Children</button>
        <fieldset v-if="menuItem.children">
          <legend>Children</legend>
          <menu-control :menu="menuItem.children" />
        </fieldset>
      </fieldset>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import LinkField from './LinkField'

export default {
  name: 'MenuControl',
  components: {
    LinkField
  },
  props: {
    menu: Array
  },
  methods: {
    addChildren (menuItem) {
      Vue.set(menuItem, 'children', [{ text: '', url: '#' }])
    },
    addLink (menu) {
      menu.push({ text: '', url: '#' })
    },
    removeLink (menu, index) {
      menu.splice(index, 1)
    },
    removeAllChildren (menuItem) {
      Vue.set(menuItem, 'children', null)
    }
  }
}
</script>