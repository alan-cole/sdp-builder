<template>
  <div class="page" :class="{ 'page--controls-hidden': !controls.show }">
    <!-- Controls -->
    <div class="controls">
      <button class="controls__toggle" @click="controls.show = !controls.show">{{ controls.show ? 'Hide' : 'Show'}} Toolbar</button>
      <div v-if="controls.show">
        <div class="controls__tabs">
          <button class="controls__tab" :class="{ 'controls__tab--active' : controls.activePanel === 'page-header'}" @click="controls.activePanel = 'page-header'">Page Header</button>
          <button class="controls__tab" :class="{ 'controls__tab--active' : controls.activePanel === 'body-content'}" @click="controls.activePanel = 'body-content'">Body Content</button>
          <button class="controls__tab" :class="{ 'controls__tab--active' : controls.activePanel === 'header-content'}" @click="controls.activePanel = 'header-content'">Header Content</button>
          <button class="controls__tab" :class="{ 'controls__tab--active' : controls.activePanel === 'campaigns'}" @click="controls.activePanel = 'campaigns'">Campaigns</button>
          <button class="controls__tab" :class="{ 'controls__tab--active' : controls.activePanel === 'sidebar'}" @click="controls.activePanel = 'sidebar'">Sidebar</button>
          <button class="controls__tab" :class="{ 'controls__tab--active' : controls.activePanel === 'global'}" @click="controls.activePanel = 'global'">Global</button>
        </div>
        <div class="controls__panel" v-if="controls.activePanel === 'page-header'">
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
        <div class="controls__panel" v-if="controls.activePanel === 'body-content'">
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
              <select v-model="controls.bodyContent.addBodyComponent">
                <option value="basic_text">basic_text</option>
                <option disabled value="accordion">accordion</option>
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
                <option disabled value="data_table">data_table</option>
                <option disabled value="form_embed_openforms">form_embed_openforms</option>
                <option disabled value="navigation_card">navigation_card</option>
                <option value="promotion_card">promotion_card</option>
              </select>
            </label>
            <button @click="addBodyComponent">Add Component</button>
            <fieldset v-for="(bodyComponent, bci) in controls.bodyContent.components" :key="`fieldset-${bci}`">
              <legend>{{ bodyComponent.type }}</legend>
              <div v-for="(bodyComponentField, bcfi) in bodyComponent.fields" :key="`fieldset-${bci}-field-${bcfi}`">
                <label>
                  <span>{{ bodyComponentField.name }}</span>
                  <input v-if="bodyComponentField.type === 'input.text'" type="text" v-model="bodyComponentField.data" />
                  <input v-if="bodyComponentField.type === 'input.checkbox'" type="checkbox" v-model="bodyComponentField.data" />
                  <textarea v-if="bodyComponentField.type === 'textarea'" type="text" v-model="bodyComponentField.data"></textarea>
                  <select v-if="bodyComponentField.type === 'select'" type="checkbox" v-model="bodyComponentField.data">
                    <option v-for="(options, fieldoptionindex) in bodyComponentField.options" :value="options" :key="`fieldset-${bci}-field-${bcfi}-option-${fieldoptionindex}`">{{ options }}</option>
                  </select>
                </label>
              </div>
              <button @click="deleteBodyComponent(bci)">Delete Component</button>
            </fieldset>
          </div>
        </div>
        <div class="controls__panel" v-if="controls.activePanel === 'header-content'">
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
        <div class="controls__panel" v-if="controls.activePanel === 'campaigns'">
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
                <span>CTA Text</span>
                <input type="text" v-model="controls.campaigns.primary.link.text" />
              </label>
              <label>
                <span>CTA URL</span>
                <input type="text" v-model="controls.campaigns.primary.link.url" />
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
                <span>CTA Text</span>
                <input type="text" v-model="controls.campaigns.secondary.link.text" />
              </label>
              <label>
                <span>CTA URL</span>
                <input type="text" v-model="controls.campaigns.secondary.link.url" />
              </label>
              <label>
                <span>Featured Image</span>
                <input type="file" ref="campaignSecondaryImg" @change="addImage(controls.campaigns.secondary, 'image', 'campaignSecondaryImg')" />
                <button @click="removeImage(controls.campaigns.secondary, 'image', 'campaignSecondaryImg')">Remove Image</button>
              </label>
            </fieldset>
          </div>
        </div>
        <div class="controls__panel" v-if="controls.activePanel === 'sidebar'">
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
        <div class="controls__panel" v-if="controls.activePanel === 'global'">
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
      </div>
    </div>
    <!-- Ripple Base Layout (default.vue) -->
    <rpl-base-layout>
      <template slot="header">
        <rpl-alert-base class="app-preview">Draft only and not yet published</rpl-alert-base>
        <!-- Tide Alerts -->
        <rpl-site-header v-bind="header" />
      </template>
      <!-- BODY CONTENT (Tide.vue) -->
      <rpl-page-layout
        :sidebar="hasSidebar"
        :backgroundColor="controls.bodyContent.backgroundColor"
        :heroBackgroundImage="heroBackgroundImage"
        :backgroundGraphic="topGraphic"
      >
        <template slot="breadcrumbs">
          <rpl-breadcrumbs v-if="controls.pageHeader.showCrumbs" :crumbs="breadcrumbs" />
        </template>

        <template slot="aboveContent">
          <rpl-hero-banner v-bind="heroBannerData" class="rpl-site-constrain--on-all" />
          <rpl-acknowledgement v-if="controls.headerContent.showAcknowledgement" :text="acknowledgement" theme="standalone" />
        </template>
        <template slot="aboveContentTwo">
          <!-- Header Components -->
          <template v-if="headerComponents">
            <template v-for="headerComponent in headerComponents">
              <component
                :is="headerComponent.component"
                v-bind="headerComponent.data"
                :class="headerComponent.class"
                :key="headerComponent.id"
                v-on="headerComponent.name === 'rpl-search-form' ? { search: ($event) => { return searchFunc($event, headerComponent.data)} } : {}"
                v-if="headerComponent && headerComponent.component"
              ></component>
            </template>
          </template>
          <rpl-campaign-primary v-if="campaignPrimary" v-bind="campaignPrimary" />
        </template>

        <!-- Landing Page (landing-page/pages/index.vue) -->
        <rpl-row row-gutter class="app-content tide-content tide-content--landing-page">
          <template v-if="anchorLinks && anchorLinks.length > 0">
            <rpl-col cols="full">
              <rpl-anchor-links title="On this page:" :links="anchorLinks" />
            </rpl-col>
          </template>
          <template v-for="dComponent in bodyComponents" v-if="bodyComponents">
            <rpl-col cols="full" :colsBp="dComponent.cols" :key="dComponent.id">
              <component :is="dComponent.component" v-bind="dComponent.data" :class="dComponent.class"></component>
            </rpl-col>
          </template>
          <rpl-col v-if="controls.bodyContent.showTopicTermsAndTags" cols="full">
            <app-topic-tags :topic="topic" :tags="tags" />
          </rpl-col>
        </rpl-row>
        <!-- / Landing Page (landing-page/pages/index.vue) -->
        <rpl-updated-date v-bind="updatedDate"></rpl-updated-date>

        <template slot="sidebar">
          <div class="app-sidebar" v-if="orderedSidebarComponents">
            <template v-for="(cmp, index) in orderedSidebarComponents">
              <component :is="cmp.component" v-bind="cmp.data" :key="`${index}-${cmp.order}`" class="rpl-component-gutter"></component>
            </template>
          </div>
        </template>

        <template slot="belowContent">
          <rpl-campaign-secondary class="rpl-site-constrain--on-all" v-if="campaignSecondary" v-bind="campaignSecondary" />
          <tide-content-rating v-if="controls.bodyContent.showContentRating" class="rpl-site-constrain--on-all" />
        </template>

      </rpl-page-layout>
      <!-- / BODY CONTENT -->
      <template slot="footer">
        <rpl-site-footer v-bind="footer" />
      </template>
    </rpl-base-layout>
  </div>
</template>

<script>
import Vue from 'vue'
// default.vue
import { RplAlertBase } from '@dpc-sdp/ripple-alert'
import { RplPageLayout, RplBaseLayout } from '@dpc-sdp/ripple-layout'
import RplSiteHeader from '@dpc-sdp/ripple-site-header'
import RplSiteFooter from '@dpc-sdp/ripple-site-footer'
// Tide.vue
import { RplRow, RplCol } from '@dpc-sdp/ripple-grid'
import { RplHeroBanner, RplIntroBanner } from '@dpc-sdp/ripple-hero-banner'
import { RplAcknowledgement } from '@dpc-sdp/ripple-site-footer'
import RplUpdatedDate from '@dpc-sdp/ripple-updated-date'
import RplBreadcrumbs from '@dpc-sdp/ripple-breadcrumbs'
import RplCampaignPrimary from '@dpc-sdp/ripple-campaign-primary'
import RplCampaignSecondary from '@dpc-sdp/ripple-campaign-secondary'
import TideContentRating from './TideContentRating'
import AppTopicTags from './AppTopicTags'
import { anchorUtils } from '../libs/anchorlinks.js'
import RplAnchorLinks from '@dpc-sdp/ripple-anchor-links'
import {
  RplCardPromo
} from '@dpc-sdp/ripple-card'
// Custom
import topGraphicSrc from '../assets/img/header-pattern-shape.png'
import bottomGraphicSrc from '../assets/img/header-pattern-bottom.png'
import sample from '../assets/img/sample.png'
import sample699x411 from '../assets/img/sample699x411.png'
// Body Content
import { RplMarkup } from '@dpc-sdp/ripple-markup'

// Sidebar
import RplRelatedLinks from '@dpc-sdp/ripple-related-links'
import RplWhatsNext from '@dpc-sdp/ripple-whats-next'
import RplSiteSectionNavigation from '@dpc-sdp/ripple-site-section-navigation'
import RplContact from '@dpc-sdp/ripple-contact'
import RplShareThis from '@dpc-sdp/ripple-share-this'

export default {
  name: 'SdpBuilder',
  components: {
    RplRow,
    RplCol,
    RplAlertBase,
    RplBaseLayout,
    RplPageLayout,
    RplBreadcrumbs,
    RplHeroBanner,
    RplIntroBanner,
    RplSiteHeader,
    RplSiteFooter,
    RplAcknowledgement,
    RplUpdatedDate,
    RplCampaignPrimary,
    RplCampaignSecondary,
    TideContentRating,
    AppTopicTags,
    RplAnchorLinks,
    RplMarkup,
    RplRelatedLinks,
    RplWhatsNext,
    RplSiteSectionNavigation,
    RplContact,
    RplShareThis,
    RplCardPromo
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      cardColsSetting: {
        wide: { m: 6, l: 4, xxxl: 3 },
        narrow: { m: 6, xxxl: 4 }
      },
      breadcrumbs: [
        { text: 'Home', url: '#' },
        { text: 'Page', url: '#' }
      ],
      acknowledgement: 'Hello world!',
      topic: { name: 'Topic', path: { alias: '#' } },
      tags: [{ name: 'Tag A', path: { alias: '#' } }, { name: 'Tag B', path: { alias: '#' } }],
      displayHeadings: 'showH2AndH3',
      updatedDate: { date: '2020-01-01T08:00:00' },
      mainMenu: [{"text":"Your Services","url":"#","children":[{"text":"Grants awards and assistance","url":"#"},{"text":"Law and safety","url":"#"},{"text":"Business and Industry","url":"#"},{"text":"Jobs and the Workplace","url":"#"},{"text":"Transport and Traffic","url":"#"},{"text":"Education","url":"#"},{"text":"Housing and Property","url":"#"},{"text":"Health","url":"#"},{"text":"Community","url":"#"},{"text":"Art, Culture and Sport","url":"#"},{"text":"Environment and Water","url":"#"}]},{"text":"About VIC Government","url":"#","children":[{"text":"Grants awards and assistance","url":"#"},{"text":"Law and safety","url":"#"},{"text":"Business and Industry","url":"#"},{"text":"Jobs and the Workplace","url":"#"},{"text":"Transport and Traffic","url":"#"},{"text":"Education","url":"#"},{"text":"Housing and Property","url":"#"},{"text":"Health","url":"#"},{"text":"Community","url":"#"},{"text":"Art, Culture and Sport","url":"#"},{"text":"Environment and Water","url":"#"}]},{"text":"News","url":"#"},{"text":"Events","url":"#"},{"text":"Connect with us","url":"#","children":[{"text":"Education","url":"#"},{"text":"Housing and Property","url":"#"},{"text":"Health","url":"#"}]}],
      controls: {
        show: true,
        activePanel: 'page-header',
        pageHeader: {
          theme: 'light',
          fileDesktop: '',
          showKeyLinks: false,
          showCrumbs: true,
          title: 'Landing Page',
          introText: 'Aliqua reprehenderit laborum ad consequat proident aliquip est consectetur aute ut dolor esse proident et enim ad.',
          showHeroImageCaption: false,
          topGraphic: null,
          bottomGraphic: null,
          logo: null
        },
        bodyContent: {
          showTableOfContents: true,
          showTopicTermsAndTags: true,
          showContentRating: true,
          backgroundColor: 'white',
          addBodyComponent: 'basic_text',
          fieldSchemas: {
            'basic_text': [
              { name: 'html', type: 'textarea', data: '' }
            ],
            'promotion_card': [
              { name: 'Link', type: 'select', options: ['Demo A', 'Demo B', 'Demo C'], data: 'Demo A' },
              { name: 'Card Display Style', type: 'select', options: ['noImage', 'thumbnail', 'profile'], data: 'thumbnail' },
              { name: 'Show supplemental info', type: 'input.checkbox', data: true }
            ],
          },
          components: [{
            type: 'basic_text',
            fields: [{ name: 'html', type: 'textarea', data: '<h2>Body Content Heading</h2>\n<p>Pariatur dolore elit sunt esse.</p>\n<ul>\n  <li>Aute nulla commodo magna.</li>\n  <li>Deserunt commodo occaecat eu.</li>\n</ul>\n<div class="callout-wrapper"><p>Lorem ipsum dolor sit amet.</p></div>' }]
          }]
        },
        headerContent: {
          showAcknowledgement: false,
          showIntroBanner: false
        },
        campaigns: {
          primary: {
            show: true,
            title: 'Campaign Primary Title',
            summary: 'And campaign summary',
            link: { text: 'Read more', url: '#' },
            video: null,
            image: sample699x411
          },
          secondary: {
            show: true,
            title: 'Campaign Secondary Title',
            summary: 'And campaign summary',
            link: { text: 'See more', url: '#' },
            video: null,
            image: sample
          }
        },
        sidebar: {
          show: true,
          showSiteSectionNavigation: false,
          showRelatedContent: false,
          showWhatsNext: false,
          showContactDetails: false,
          showSocialSharing: true
        },
        global: {
          palette: {
            primary: '#0052c2',
            dark_primary: '#023b89',
            secondary: '#0095ec',
            extra_dark_neutral: '#011a3c',
            dark_neutral: '#465870',
            dark_neutral_1: '#546a7c',
            mid_neutral_1: '#d7dbe0',
            mid_neutral_2: '#e8ebee',
            light_neutral: '#f6f6f9',
            danger: '#af272f',
            warning: '#ca4c21',
            success: '#027a83',
            white: '#fff',
            black: '#000',
            primary_gradient: 'linear-gradient(90deg, #0052c2 0%, #0095ec 100%)',
            primary_gradient_90: 'linear-gradient(180deg, #0052c2 0%, #0095ec 100%)',
            primary_gradient_0: 'linear-gradient(0deg, #0052c2 0%, #0095ec 100%)',
            decorative_gradient: 'linear-gradient(-90deg, #0052c2 0%, #825dff 12%, #ef4a81 23%, #e57200 37%, #ffc166 51%, #f9e062 81%)',
            decorative_gradient_0: 'linear-gradient(0deg, #0052c2 0%, #825dff 12%, #ef4a81 23%, #e57200 37%, #ffc166 51%, #f9e062 81%)',
            decorative_gradient_90: 'linear-gradient(-180deg, #0052c2 0%, #825dff 12%, #ef4a81 23%, #e57200 37%, #ffc166 51%, #f9e062 81%)',
            decorative_gradient_180: 'linear-gradient(90deg, #0052c2 0%, #825dff 12%, #ef4a81 23%, #e57200 37%, #ffc166 51%, #f9e062 81%)',
            other: `--rpl-button-danger-hover-background-color: #c42c35;
--rpl-pikaday-header-text-color: #475971;
--rpl-breadcrumbs-link-color: #125ec6;
--rpl-campaign-secondary-summary-text-color: #132a4a;
--quotation-author-color: #53647a;
--rpl-document-link-meta-color: #53647a;
--rpl-campaign-primary-summary-text-color: #132a4a;
--rpl-site-header-logout-btn-background-color-mobile: #012557;
--rpl-document-link-meta-separator-color: #dadee2;
--callout-wrapper-background-color: #e6f4fd;
--rpl-section-menu-active-left-bar: url('data:image/svg+xml,%3Csvg%20width%3D%224%22%20height%3D%221%22%20viewBox%3D%220%200%204%201%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%224%22%20height%3D%221%22%20fill%3D%22%230095ec%22%2F%3E%3C%2Fsvg%3E')` }
        }
      }
    }
  },
  methods: {
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
        type: this.controls.bodyContent.addBodyComponent,
        fields: JSON.parse(JSON.stringify(this.controls.bodyContent.fieldSchemas[this.controls.bodyContent.addBodyComponent]))
      })
    },
    deleteBodyComponent (removeIndex) {
      this.controls.bodyContent.components.splice(removeIndex, 1)
    },
    getCols (cols) {
      if (cols) {
        if (this.hasSidebar && cols.narrow) {
          return cols.narrow
        }
        if (cols.wide) {
          return cols.wide
        }
        return cols
      }
      return null
    },
    getCampaignDataFromControl (campaignControl) {
      if (campaignControl.show) {
        const rtn = {}
        if (campaignControl.title) {
          rtn.title = campaignControl.title
        }
        if (campaignControl.summary) {
          rtn.summary = campaignControl.summary
        }
        if (campaignControl.link && (campaignControl.link.text || campaignControl.link.url)) {
          rtn.link = {}
          if (campaignControl.link.text) {
            rtn.link.text = campaignControl.link.text
          }
          if (campaignControl.link.url) {
            rtn.link.url = campaignControl.link.url
          }
        }
        if (campaignControl.image) {
          rtn.image = { src: campaignControl.image }
        }
        return rtn
      } else {
        return false
      }
    }
  },
  computed: {
    paletteNames () {
      return Object.keys(this.controls.global.palette)
    },
    heroBannerData () {
      return {
        title: this.controls.pageHeader.title,
        introText: this.controls.pageHeader.introText,
        linkHeading: 'Want to know more about...',
        links: [
          { text: 'First journey based link', url: '#' },
          { text: 'Secondary journey based link', url: '#' },
          { text: 'Third link goes here', url: '#' },
          { text: 'Fourth journey based link', url: '#' }
        ],
        moreLink: { text: 'See more', url: '#' },
        theme: this.controls.pageHeader.theme,
        showLinks: this.controls.pageHeader.showKeyLinks,
        backgroundGraphic: this.bottomGraphic,
        logo: this.controls.pageHeader.logo
      }
    },
    heroBackgroundImage () {
      return (this.controls.pageHeader.fileDesktop) ? { src: this.controls.pageHeader.fileDesktop } : null
    },
    topGraphic () {
      return this.controls.pageHeader.topGraphic ? this.controls.pageHeader.topGraphic : topGraphicSrc
    },
    bottomGraphic () {
      if (this.heroBackgroundImage == null && !this.campaignPrimary) {
        return this.controls.pageHeader.bottomGraphic ? this.controls.pageHeader.bottomGraphic : bottomGraphicSrc
      } else {
        return ''
      }
    },
    anchorLinks () {
      if (this.controls.bodyContent.showTableOfContents && this.bodyComponents) {
        const anchors = []
        this.bodyComponents.forEach(component => {
          if (component && component.name && component.data) {
            switch (component.name) {
              case 'rpl-markup':
                if (component.data.html) {
                  let showSubHeading = false
                  if (this.displayHeadings && this.displayHeadings === 'showH2AndH3') {
                    showSubHeading = true
                  }
                  anchors.push(...anchorUtils.getAnchorLinks(component.data.html, showSubHeading))
                }
                break
              case 'rpl-accordion':
                if (component.data.title) {
                  anchors.push({ text: component.data.title, url: `#${getAnchorLinkName(component.data.title)}` })
                }
                break
            }
          }
        })
        return anchors
      }
      return []
    },
    orderedSidebarComponents () {
      return this.sidebarComponents.filter(a => a).sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))
    },
    hasSidebar () {
      return (this.sidebarComponents.length > 0)
    },
    campaignPrimary () {
      return this.getCampaignDataFromControl(this.controls.campaigns.primary)
    },
    campaignSecondary () {
      return this.getCampaignDataFromControl(this.controls.campaigns.secondary)
    },
    bodyComponents () {
      return this.controls.bodyContent.components.map((comp, idx) => {
        let rtn = {}
        if (comp.type === 'basic_text') {
          const data = {}
          comp.fields.forEach(field => {
            data[field.name] = field.data
          })
          rtn = {
            name: 'rpl-markup',
            component: 'rpl-markup',
            data: {
              ...data,
              childColsBp: null
            },
            childCols: null,
            class: [],
            cols: null,
            // ssr: true,
            id: `bodycomp-${idx}`
          }
        } else if (comp.type === 'promotion_card') {
          const data = {}
          if (comp.fields[0].data === 'Demo A') {
            data.title = 'Demo A'
            data.link = { text: '', url: '#content-a'}
            data.summary = 'Lorem ipsum in esse nostrud magna pariatur sunt in qui reprehenderit et eu exercitation officia qui sunt esse esse ad deserunt.'
            data.image = { src: sample }
          }
          if (comp.fields[0].data === 'Demo B') {
            data.title = 'Demo B Content example'
            data.link = { text: '', url: '#content-b'}
            data.summary = 'Lorem ipsum quis dolor velit et proident velit elit mollit occaecat aute aliquip magna quis exercitation excepteur sunt amet voluptate dolore sint.'
            data.image = { src: sample }
            data.dateStart = '2022-01-01T08:00:00'
            data.dateEnd = '2022-11-13T08:00:00'
            data.contentType = 'event'
          }
          if (comp.fields[0].data === 'Demo C') {
            data.title = 'Demo C extra large content example'
            data.link = { text: '', url: '#content-c'}
            data.summary = 'Dolore deserunt tempor do magna irure nisi ut laborum consequat incididunt duis duis proident ea sit adipisicing do est officia labore ullamco et cupidatat aute nisi eu esse magna irure veniam adipisicing do dolore ex aute sint laboris dolore tempor dolor enim sit esse anim ut ex sit nostrud in id enim enim occaecat nostrud in labore quis consequat eiusmod occaecat exercitation anim ut excepteur excepteur dolor quis sunt ut ut cupidatat ex non velit ea cupidatat dolore eiusmod in ut magna cupidatat pariatur officia consectetur aute reprehenderit pariatur ex culpa nisi esse fugiat ullamco ex nisi est elit in voluptate do sed amet qui anim dolore ea deserunt qui qui in qui consequat incididunt quis aute aliqua quis do proident eiusmod non dolor nostrud aliquip excepteur fugiat exercitation culpa nulla ea reprehenderit tempor minim officia ea est nulla sint sunt ea adipisicing aliquip cillum non non anim nulla duis eiusmod proident voluptate sint.'
            data.image = { src: sample }
            data.topic = 'Demo C Topic'
          }
          data.displayStyle = comp.fields[1].data
          data.showMeta = comp.fields[2].data
          rtn = {
            name: 'rpl-card-promo',
            component: 'rpl-card-promo',
            data: {
              ...data
            },
            childCols: null,
            class: [],
            cols: this.getCols(this.cardColsSetting),
            // ssr: true,
            id: `bodycomp-${idx}`
          }
        }
        return rtn
      })
    },
    sidebarComponents () {
      const rtn = []
      if (this.controls.sidebar.showSiteSectionNavigation) {
        rtn.push({
          name: 'rpl-site-section-navigation',
          component: 'rpl-site-section-navigation',
          order: 100,
          data: {
            menu: this.mainMenu,
            title: 'My title',
            activeLink: '/active'
          }
        })
      }
      if (this.controls.sidebar.showRelatedContent) {
        rtn.push({
          name: 'rpl-related-links',
          component: 'rpl-related-links',
          order: 101,
          data: {
            title: 'Related links',
            links: [
              { text: 'Related Link 1', url: '#' },
              { text: 'DuckDuckGo', url: 'https://duckduckgo.com' }
            ]
          }
        })
      }
      if (this.controls.sidebar.showWhatsNext) {
        rtn.push({
          name: 'rpl-whats-next',
          component: 'rpl-whats-next',
          order: 103,
          data: {
            title: 'What\'s next?',
            links: [
              { text: 'Whats next 1', url: '#' }
            ]
          }
        })
      }
      if (this.controls.sidebar.showContactDetails) {
        rtn.push({
          name: 'rpl-contact',
          component: 'rpl-contact',
          order: 104,
          data: {
            title: 'Contact us',
            name: 'Name',
            department: 'Department',
            postal: 'Postal',
            address: 'Address',
            phone: [
              {
                title: 'Home',
                number: '123456789'
              }
            ],
            email: 'email@example.com',
            social: [
              {
                title: 'Social',
                icon: 'facebook',
                url: 'https://www.duckduckgo.com'
              }
            ]
          }
        })
      }
      if (this.controls.sidebar.showSocialSharing) {
        rtn.push({
          name: 'rpl-share-this',
          component: 'rpl-share-this',
          order: 105,
          data: {
            title: 'Share this page',
            url: `https://duckduckgo.com`
          }
        })
      }
      return rtn
    },
    headerComponents () {
      const rtn = []
      if (this.controls.headerContent.showIntroBanner) {
        rtn.push({
          name: 'rpl-intro-banner',
          component: 'rpl-intro-banner',
          data: {
            title: 'My Title',
            introText: 'Intro banner text',
            linkHeading: 'Link heading',
            links: [{ text: 'Home', url: '#' }],
            showLinks: true,
            linksType: 'link',
            icon: 'alert_information'
          },
          class: ['rpl-site-constrain--on-all'],
          id: 'header-1',
        })
      }
      return rtn
    },
    header () {
      return {
        links: this.mainMenu,
        breakpoint: 992,
        sticky: false,
        hideOnScroll: false,
        showSearch: true,
        showLogout: false
      }
    },
    footer () {
      return {
        nav: this.mainMenu,
        links: [{"text":"Privacy","url":"#"},{"text":"Disclaimer","url":"#"},{"text":"Terms of use","url":"#"},{"text":"Sitemap","url":"#"},{"text":"Accessibility Statement","url":"#"},{"text":"Help","url":"#"}],
        copyright: '© Copyright State Government of Victoria',
        acknowledgement: 'The Victorian Government acknowledges Aboriginal and Torres Strait Islander people as the Traditional Custodians of the land and acknowledges and pays respect to their Elders, past and present.',
        caption: this.controls.pageHeader.showHeroImageCaption ? 'Image credit: This caption is used to describe the image in the hero banner above.' : null,
        logos: [{"src":"https://via.placeholder.com/112x52","alt":"Max native size","url":"#"},{"src":"https://via.placeholder.com/32x32","alt":"Smaller than max size","url":"#"},{"src":"https://via.placeholder.com/80x200","alt":"Portrait","url":"#"},{"src":"https://via.placeholder.com/200x80","alt":"Landscape","url":"#"}]
      }
    }
  },
}
</script>

<style lang="scss">
@import '~@dpc-sdp/ripple-global/scss/settings';
@import '~@dpc-sdp/ripple-global/scss/tools';

.page {
  padding-bottom: 400px;

  &--controls-hidden {
    padding-bottom: 0;
  }
}

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