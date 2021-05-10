<template>
  <div>
    <button @click="addLink(menu)">Add Link</button>
    <div v-for="(menuItem, menuIdx) in menu">
      <fieldset>
        <legend>Link</legend>
        <table>
          <tbody>
            <tr>
              <td>
                <span>Text</span>
                <input type="text" v-model="menuItem.text">
              </td>
              <td>
                <span>url</span>
                <input type="text" v-model="menuItem.url">
              </td>
            </tr>
          </tbody>
        </table>
        <button @click="removeLink(menu, menuIdx)">Remove Link</button>
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

export default {
  name: 'MenuControl',
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