<template>
  <div class="controls">
    <button class="controls__toggle" @click="visibilityChange">{{ show ? 'Hide' : 'Show'}} Toolbar</button>
    <div v-if="show">
      <div class="controls__tabs">
        <button class="controls__tab" :class="{ 'controls__tab--active' : activePanel === 'page-header'}" @click="activePanel = 'page-header'">Page Header</button>
        <button class="controls__tab" :class="{ 'controls__tab--active' : activePanel === 'body-content'}" @click="activePanel = 'body-content'">Body Content</button>
        <button class="controls__tab" :class="{ 'controls__tab--active' : activePanel === 'header-content'}" @click="activePanel = 'header-content'">Header Content</button>
        <button class="controls__tab" :class="{ 'controls__tab--active' : activePanel === 'campaigns'}" @click="activePanel = 'campaigns'">Campaigns</button>
        <button class="controls__tab" :class="{ 'controls__tab--active' : activePanel === 'sidebar'}" @click="activePanel = 'sidebar'">Sidebar</button>
        <button class="controls__tab" :class="{ 'controls__tab--active' : activePanel === 'site'}" @click="activePanel = 'site'">Site</button>
        <button class="controls__tab" :class="{ 'controls__tab--active' : activePanel === 'global'}" @click="activePanel = 'global'">Global</button>
        <button class="controls__tab" :class="{ 'controls__tab--active' : activePanel === 'save'}" @click="activePanel = 'save'">Save</button>
      </div>
      <div class="controls__panel" v-if="activePanel === 'page-header'">
        <div class="field">
          <label>
            <span>Page title</span>
            <input type="text" v-model="controls.pageHeader.title" />
          </label>
          <label>
            <span>Introduction text</span>
            <textarea v-model="controls.pageHeader.introText" />
          </label>
          <label>
            <span>Key journeys (Show Links)</span>
            <input type="checkbox" v-model="controls.pageHeader.showKeyLinks">
          </label>
        </div>
        <div class="field">
          <label>
            <span>Show Breadcrumbs</span>
            <input type="checkbox" v-model="controls.pageHeader.showCrumbs">
          </label>
          <label>
            <span>Hero Image</span>
            <input type="file" ref="heroBannerImg" @change="addImage(controls.pageHeader, 'fileDesktop', 'heroBannerImg')" />
            <button @click="removeImage(controls.pageHeader, 'fileDesktop', 'heroBannerImg')">Remove Image</button>
          </label>
          <label>
            <span>Hero image theme</span>
            <select v-model="controls.pageHeader.theme">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
          <label>
            <span>Show Hero image caption</span>
            <input type="checkbox" v-model="controls.pageHeader.showHeroImageCaption">
          </label>
          <label>
            <span>Hero Logo</span>
            <input type="file" ref="heroLogoImg" @change="addImage(controls.pageHeader, 'logo', 'heroLogoImg')" />
            <button @click="removeImage(controls.pageHeader, 'logo', 'heroLogoImg')">Remove Image</button>
          </label>
          <label>
            <span>Top Graphical Image</span>
            <input type="file" ref="topGraphicalImg" @change="addImage(controls.pageHeader, 'topGraphic', 'topGraphicalImg')" />
            <button @click="removeImage(controls.pageHeader, 'topGraphic', 'topGraphicalImg')">Remove Image</button>
          </label>
          <label>
            <span>Bottom Graphical Image</span>
            <input type="file" ref="bottomGraphicalImg" @change="addImage(controls.pageHeader, 'bottomGraphic', 'bottomGraphicalImg')" />
            <button @click="removeImage(controls.pageHeader, 'bottomGraphic', 'bottomGraphicalImg')">Remove Image</button>
          </label>
        </div>
      </div>
      <div class="controls__panel" v-if="activePanel === 'body-content'">
        <div class="field">
          <label>
            <span>Show Table of Content?</span>
            <input type="checkbox" v-model="controls.bodyContent.showTableOfContents">
          </label>
          <label>
            <span>Show topic term and tags?</span>
            <input type="checkbox" v-model="controls.bodyContent.showTopicTermsAndTags">
          </label>
          <label>
            <span>Show content rating?</span>
            <input type="checkbox" v-model="controls.bodyContent.showContentRating">
          </label>
          <label>
            <span>Background colour</span>
            <select v-model="controls.bodyContent.backgroundColor">
              <option value="white">White</option>
              <option value="grey">Grey</option>
            </select>
          </label>
        </div>
        <div class="field">
          <label>
            <span>Add Body Component</span>
            <select v-model="bodyComponentToAdd">
              <option value="basic_text">basic_text</option>
              <option value="accordion">accordion</option>
              <option disabled value="card_keydates">card_keydates</option>
              <option disabled value="call_to_action">call_to_action</option>
              <option disabled value="embedded_webform">embedded_webform</option>
              <option disabled value="featured_news">featured_news</option>
              <option disabled value="news_listing">news_listing</option>
              <option disabled value="media_gallery">media_gallery</option>
              <option disabled value="card_carousel">card_carousel</option>
              <option disabled value="latest_events">latest_events</option>
              <option disabled value="data_driven_component">data_driven_component</option>
              <option disabled value="daily_update">daily_update</option>
              <option disabled value="complex_image">complex_image</option>
              <option disabled value="compact_card_collection">compact_card_collection</option>
              <option disabled value="timelines">timelines</option>
              <option disabled value="user_authentication_block">user_authentication_block</option>
              <option value="data_table">data_table</option>
              <option disabled value="form_embed_openforms">form_embed_openforms</option>
              <option value="navigation_card">navigation_card</option>
              <option value="promotion_card">promotion_card</option>
            </select>
          </label>
          <button @click="addBodyComponent">Add Component</button>
          <fieldset v-for="(bodyComponent, bci) in controls.bodyContent.components" :key="`fieldset-${bci}`">
            <legend>{{ bodyComponent.type }}</legend>
            <div v-for="(bodyComponentField, bcfi) in bodyComponent.fields" :key="`fieldset-${bci}-field-${bcfi}`">
              <label>
                <span>{{ bodyComponentField.displayName }}</span>
                <input v-if="bodyComponentField.type === 'input.text'" type="text" v-model="bodyComponentField.data" />
                <input v-if="bodyComponentField.type === 'input.checkbox'" type="checkbox" v-model="bodyComponentField.data" />
                <textarea v-if="bodyComponentField.type === 'textarea'" v-model="bodyComponentField.data"></textarea>
                <select v-if="bodyComponentField.type === 'select'" type="checkbox" v-model="bodyComponentField.data">
                  <option v-for="(options, fieldoptionindex) in bodyComponentField.options" :value="options" :key="`fieldset-${bci}-field-${bcfi}-option-${fieldoptionindex}`">{{ options }}</option>
                </select>
                <div v-if="bodyComponentField.type === 'list'">
                  <div v-for="(listFieldData, lfd) in bodyComponentField.data" :key="`fieldset-${bci}-listfielddata-${lfd}`">
                    <div v-for="(listField, lfi) in bodyComponentField.fields" :key="`fieldset-${bci}-listfielddata-${lfd}-listfield-${lfi}`">
                      <span>{{ listField.displayName }}</span>
                      <input v-if="listField.type === 'input.text'" type="text" v-model="listFieldData[listField.name]" />
                      <textarea v-if="listField.type === 'textarea'" v-model="listFieldData[listField.name]"></textarea>
                    </div>
                  </div>
                  <button @click="bodyComponentField.data.push({})">Add Item</button>
                  <button @click="bodyComponentField.data.pop()">Remove Last Item</button>
                </div>
              </label>
            </div>
            <button @click="deleteBodyComponent(bci)">Delete Component</button>
          </fieldset>
        </div>
      </div>
      <div class="controls__panel" v-if="activePanel === 'header-content'">
        <div class="field">
          <label>
            <span>Show Acknowledgement of Country?</span>
            <input type="checkbox" v-model="controls.headerContent.showAcknowledgement">
          </label>
          <label>
            <span>Show Intro Banner Component</span>
            <input type="checkbox" v-model="controls.headerContent.showIntroBanner">
          </label>
        </div>
      </div>
      <div class="controls__panel" v-if="activePanel === 'campaigns'">
        <div class="field">
          <fieldset>
            <legend>Campaign Primary</legend>
            <label>
              <span>Show Campaign Primary Block</span>
              <input type="checkbox" v-model="controls.campaigns.primary.show" />
            </label>
            <label>
              <span>Title</span>
              <input type="text" v-model="controls.campaigns.primary.title" />
            </label>
            <label>
              <span>Body</span>
              <input type="text" v-model="controls.campaigns.primary.summary" />
            </label>
            <label>
              <span>CTA</span>
              <link-field :link="controls.campaigns.primary.link"/>
            </label>
            <label>
              <span>Featured Image</span>
              <input type="file" ref="campaignPrimaryImg" @change="addImage(controls.campaigns.primary, 'image', 'campaignPrimaryImg')" />
              <button @click="removeImage(controls.campaigns.primary, 'image', 'campaignPrimaryImg')">Remove Image</button>
            </label>
          </fieldset>
        </div>
        <div class="field">
          <fieldset>
            <legend>Campaign Secondary</legend>
            <label>
              <span>Show Campaign Secondary Block</span>
              <input type="checkbox" v-model="controls.campaigns.secondary.show" />
            </label>
            <label>
              <span>Title</span>
              <input type="text" v-model="controls.campaigns.secondary.title" />
            </label>
            <label>
              <span>Body</span>
              <input type="text" v-model="controls.campaigns.secondary.summary" />
            </label>
            <label>
              <span>CTA</span>
              <link-field :link="controls.campaigns.secondary.link"/>
            </label>
            <label>
              <span>Featured Image</span>
              <input type="file" ref="campaignSecondaryImg" @change="addImage(controls.campaigns.secondary, 'image', 'campaignSecondaryImg')" />
              <button @click="removeImage(controls.campaigns.secondary, 'image', 'campaignSecondaryImg')">Remove Image</button>
            </label>
          </fieldset>
        </div>
      </div>
      <div class="controls__panel" v-if="activePanel === 'sidebar'">
        <div class="field">
          <label>
            <span>Show Site-section Navigation?</span>
            <input type="checkbox" v-model="controls.sidebar.showSiteSectionNavigation">
          </label>
          <label>
            <span>Show Related Content?</span>
            <input type="checkbox" v-model="controls.sidebar.showRelatedContent">
          </label>
          <label>
            <span>Show what's next?</span>
            <input type="checkbox" v-model="controls.sidebar.showWhatsNext">
          </label>
          <label>
            <span>Show contact details</span>
            <input type="checkbox" v-model="controls.sidebar.showContactDetails">
          </label>
          <label>
            <span>Show Social Sharing?</span>
            <input type="checkbox" v-model="controls.sidebar.showSocialSharing">
          </label>
        </div>
      </div>
      <div class="controls__panel" v-if="activePanel === 'global'">
        <div class="field">
          <fieldset>
            <legend>Colour Palette</legend>
            <template v-for="(colour, colourIndex) in paletteNames">
              <label v-if="colour !== 'other'" :key="`palette-names-${colour}`">
                <span>{{ colour }}</span>
                <input type="text" v-model="controls.global.palette[colour]" @change="updatePalette">
              </label>
              <label v-if="colour === 'other'" :key="`palette-names-${colour}`">
                <span>Composite colours</span>
                <textarea v-model="controls.global.palette.other" @change="updatePalette"></textarea>
              </label>
            </template>
          </fieldset>
        </div>
      </div>
      <div class="controls__panel" v-if="activePanel === 'site'">
        <div class="field">
          <label>Main Menu</label>
          <menu-control :menu="controls.site.mainMenu" />
        </div>
        <div class="field">
          <label>Footer Menu</label>
          <menu-control :menu="controls.site.footerMenu" />
        </div>
        <div class="field">
          <label>
            <span>Footer Menu</span>
            <textarea v-model="controls.site.footerText"></textarea>
          </label>
          <label>
            <span>Acknowledgement to Country</span>
            <textarea v-model="controls.site.acknowledgementToCountry"></textarea>
          </label>
          <label>
            <span>Show Exit Site?</span>
            <input type="checkbox" v-model="controls.site.showExitSite">
          </label>
        </div>
      </div>
      <div class="controls__panel" v-if="activePanel === 'save'">
        <div class="field">
          <input type="button" value="Export JSON" @click="exportControls" />
          <input type="button" value="Import JSON" @click="importControls" />
          <label>
            <label>Configuration</label>
            <textarea v-model="configuration" />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import MenuControl from './MenuControl'
import LinkField from './LinkField'

export default {
  name: 'Controls',
  components: {
    MenuControl,
    LinkField
  },
  props: {
    controls: Object
  },
  data () {
    return {
      show: true,
      activePanel: 'page-header',
      configuration: '',
      bodyComponentToAdd: 'basic_text',
      fieldSchemas: {
        'basic_text': [
          { displayName: 'HTML', name: 'html', type: 'textarea', data: '' }
        ],
        'accordion': [
          { displayName: 'Title', name: 'title', type: 'input.text', data: 'Accordion' },
          { displayName: 'Style', name: 'type', type: 'select', options: [ 'standard', 'numbered' ], data: 'standard' },
          { displayName: 'Accordion items', name: 'accordions', type: 'list', fields: [
            { displayName: 'Item title', name: 'title', type: 'input.text' },
            { displayName: 'Item content', name: 'content', type: 'textarea' }
          ], data: [] }
        ],
        'promotion_card': [
          { displayName: 'Internal Link', type: 'select', options: ['', 'Demo A', 'Demo B', 'Demo C'], data: '' },
          { displayName: 'Show supplemental info (for internal Link)', type: 'input.checkbox', data: true },
          { displayName: 'External Link', type: 'input.text', data: '#' },
          { displayName: 'Title (for external Link)', type: 'input.text', data: 'Promo title' },
          { displayName: 'Summary (for external Link)', type: 'input.text', data: 'Promo summary' },
          { displayName: 'Card Display Style', type: 'select', options: ['noImage', 'thumbnail', 'profile'], data: 'thumbnail' }
        ],
        'navigation_card': [
          { displayName: 'Internal Link', type: 'select', options: ['', 'Demo A'], data: '' },
          { displayName: 'Show supplemental info (for internal Link)', type: 'input.checkbox', data: true },
          { displayName: 'External Link', type: 'input.text', data: '#' },
          { displayName: 'Title (for external Link)', type: 'input.text', data: 'Navigation title' },
          { displayName: 'Summary (for external Link)', type: 'input.text', data: 'Navigation summary' },
          { displayName: 'Card Display Style', type: 'select', options: ['noImage', 'thumbnail', 'profile'], data: 'noImage' }
        ],
        'data_table': [
          { displayName: 'Table orientation on mobile (enable to use Row, disable for Column)', name: 'isRowOriented', type: 'input.checkbox', data: true },
          { displayName: 'Use first column as table header', type: 'input.checkbox', name: 'isFirstRowHeader', data: false },
          { displayName: 'Use first row as table header', type: 'input.checkbox', name: 'isFirstColHeader', data: false },
          { displayName: 'Data table content (as simple CSV)', type: 'textarea', name: 'items', data: '#,Town,Count\n1,Melbourne,233' }
        ]
      }
    }
  },
  methods: {
    visibilityChange () {
      this.show = !this.show
      this.$emit('changeVisibility', this.show)
    },
    exportControls () {
      this.configuration = JSON.stringify(this.controls, null, 2)
    },
    importControls () {
      try {
        const config = JSON.parse(this.configuration)
        Object.keys(config).forEach(key => {
          this.controls[key] = config[key]
        })
        this.configuration = ''
        this.updatePalette()
      } catch (e) {
        alert(`unable to import: ${e}`)
      }
    },
    updatePalette () {
      this.paletteNames.forEach(colour => {
        if (colour !== 'other') {
          document.documentElement.style.setProperty(`--${colour}`, this.controls.global.palette[colour])
        }
      })
      const extra = this.controls.global.palette.other
      const lines = extra.split('\n')
      lines.forEach(line => {
        const x = line.split(': ')
        const key = x[0]
        const value = x[1].replace(';', '')
        document.documentElement.style.setProperty(key, value)
      })
    },
    addImage (obj, key, ref) {
      if (this.$refs[ref].files && this.$refs[ref].files.length > 0) {
        var fileReaderDesktop = new FileReader()
        fileReaderDesktop.onload = () => { Vue.set(obj, key, fileReaderDesktop.result) }
        fileReaderDesktop.readAsDataURL(this.$refs[ref].files[0])
      }
    },
    removeImage (obj, key, ref) {
      Vue.set(obj, key, '')
      this.$refs[ref].value = null
    },
    addBodyComponent () {
      this.controls.bodyContent.components.push({
        type: this.bodyComponentToAdd,
        fields: JSON.parse(JSON.stringify(this.fieldSchemas[this.bodyComponentToAdd]))
      })
    },
    deleteBodyComponent (removeIndex) {
      this.controls.bodyContent.components.splice(removeIndex, 1)
    }
  },
  computed: {
    paletteNames () {
      return Object.keys(this.controls.global.palette)
    }
  }
}
</script>

<style lang="scss">
@import '~@dpc-sdp/ripple-global/scss/settings';
@import '~@dpc-sdp/ripple-global/scss/tools';

.controls {
  overflow: scroll;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0, 0.9);
  color: white;
  height: 400px;
  box-sizing: border-box;
  z-index: 10000;

  .page--controls-hidden & {
    height: auto;
    text-align: right;
    background-color: transparent;
    overflow: auto;
  }

  &__tabs {
    @include rpl-breakpoint('m') {
      display: flex;
    }
  }

  &__tab {
    border: 0;
    background-color: white;

    &--active {
      background-color: lime;
    }
  }

  &__panel {
    padding: 10px;

    @include rpl-breakpoint('m') {
      display: flex;
    }
  }

  label {
    margin-bottom: 4px;
    display: block;

    span {
      display: block;
    }
  }

  .field {
    width: 100%;
    padding: 0 4px;

    @include rpl-breakpoint('m') {
      width: 33.33%;
    }

    input {
      max-width: 200px;
    }

    textarea {
      width: 100%;
      height: 100px;
      box-sizing: border-box;
      white-space: pre;
    }
  }

  &__toggle {
    position: absolute;
    top: 0;
    right: 0;

    .page--controls-hidden & {
      position: relative;
    }
  }
}
</style>
