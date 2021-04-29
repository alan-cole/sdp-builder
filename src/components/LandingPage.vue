<template>
  <div>
    <!-- Controls -->
    <div class="controls">
      <div class="field">
        <select v-model="controls.theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <div>
          <label for="field_show_links">Show Links</label>
          <input id="field_show_links" type="checkbox" v-model="controls.showKeyLinks">
        </div>
        <div>
          <label for="field_show_breadcrumbs">Show Breadcrumbs</label>
          <input id="field_show_breadcrumbs" type="checkbox" v-model="controls.showCrumbs">
        </div>
      </div>
      <div class="field">
        <div>
          <label class="full-label" for="field_title">Title</label>
          <input id="field_title" type="text" v-model="controls.title">
        </div>
        <div>
          <label class="full-label" for="field_intro_text">Intro Text</label>
          <input id="field_intro_text" type="text" v-model="controls.introText">
        </div>
      </div>
      <div class="field">
        <div>
          <label class="full-label" for="field_desktop_image">Desktop</label>
          <input id="field_desktop_image" type="file" ref="fileDesktop" @change="updateBanner" />
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
        :sidebar="true"
        :backgroundColor="pageLayoutBackgroundColor"
        :heroBackgroundImage="heroBackgroundImage"
        :backgroundGraphic="topGraphic"
      >
        <template slot="breadcrumbs">
          <rpl-breadcrumbs v-if="controls.showCrumbs" :crumbs="breadcrumbs" />
        </template>

        <template slot="aboveContent">
          <rpl-hero-banner v-bind="heroBannerData" class="rpl-site-constrain--on-all" />
          <rpl-acknowledgement v-if="showAcknowledgement" :text="acknowledgement" theme="standalone" />
        </template>
        <template slot="aboveContentTwo">
          <!-- Header Components -->
          <!-- TODO -->
        </template>

        <!-- Body Components -->
        <!-- TODO -->
        <rpl-updated-date v-bind="updatedDate"></rpl-updated-date>

        <template slot="sidebar">
          <!-- TODO -->
          <div class="app-sidebar" v-if="sidebarComponents">
            <template v-for="(cmp, index) in sidebarComponents">
              <component :is="cmp.component" v-bind="cmp.data" :key="`${index}-${cmp.order}`" class="rpl-component-gutter"></component>
            </template>
          </div>
        </template>

        <template slot="belowContent">
          <rpl-campaign-secondary class="rpl-site-constrain--on-all" v-if="campaignSecondary" v-bind="campaignSecondary" />
          <tide-content-rating class="rpl-site-constrain--on-all" />
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
// default.vue
import { RplAlertBase } from '@dpc-sdp/ripple-alert'
import { RplPageLayout, RplBaseLayout } from '@dpc-sdp/ripple-layout'
import RplSiteHeader from '@dpc-sdp/ripple-site-header'
import RplSiteFooter from '@dpc-sdp/ripple-site-footer'
// Tide.vue
import { RplHeroBanner, RplIntroBanner } from '@dpc-sdp/ripple-hero-banner'
import { RplAcknowledgement } from '@dpc-sdp/ripple-site-footer'
import RplUpdatedDate from '@dpc-sdp/ripple-updated-date'
import RplBreadcrumbs from '@dpc-sdp/ripple-breadcrumbs'
import RplCampaignSecondary from '@dpc-sdp/ripple-campaign-secondary'
import TideContentRating from './TideContentRating'
// Custom
import topGraphicSrc from '../assets/img/header-pattern-shape.png'
import bottomGraphicSrc from '../assets/img/header-pattern-bottom.png'
import sample from '../assets/img/sample.png'

export default {
  name: 'SdpBuilder',
  components: {
    RplAlertBase,
    RplBaseLayout,
    RplPageLayout,
    RplBreadcrumbs,
    RplHeroBanner,
    RplSiteHeader,
    RplSiteFooter,
    RplAcknowledgement,
    RplUpdatedDate,
    RplCampaignSecondary,
    TideContentRating
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      header: {
        links: [
          { text: 'Home', url: '#' },
          { text: 'About us', url: '#' },
          { text: 'Contact us', url: '#' }
        ],
        breakpoint: 992,
        sticky: false,
        hideOnScroll: false,
        showSearch: false,
        showLogout: false
      },
      footer: {
        nav: [{"text":"Your Services","url":"#","children":[{"text":"Grants awards and assistance","url":"#"},{"text":"Law and safety","url":"#"},{"text":"Business and Industry","url":"#"},{"text":"Jobs and the Workplace","url":"#"},{"text":"Transport and Traffic","url":"#"},{"text":"Education","url":"#"},{"text":"Housing and Property","url":"#"},{"text":"Health","url":"#"},{"text":"Community","url":"#"},{"text":"Art, Culture and Sport","url":"#"},{"text":"Environment and Water","url":"#"}]},{"text":"About VIC Government","url":"#","children":[{"text":"Grants awards and assistance","url":"#"},{"text":"Law and safety","url":"#"},{"text":"Business and Industry","url":"#"},{"text":"Jobs and the Workplace","url":"#"},{"text":"Transport and Traffic","url":"#"},{"text":"Education","url":"#"},{"text":"Housing and Property","url":"#"},{"text":"Health","url":"#"},{"text":"Community","url":"#"},{"text":"Art, Culture and Sport","url":"#"},{"text":"Environment and Water","url":"#"}]},{"text":"News","url":"#"},{"text":"Events","url":"#"},{"text":"Connect with us","url":"#","children":[{"text":"Education","url":"#"},{"text":"Housing and Property","url":"#"},{"text":"Health","url":"#"}]}],
        links: [{"text":"Privacy","url":"#"},{"text":"Disclaimer","url":"#"},{"text":"Terms of use","url":"#"},{"text":"Sitemap","url":"#"},{"text":"Accessibility Statement","url":"#"},{"text":"Help","url":"#"}],
        copyright: '© Copyright State Government of Victoria',
        acknowledgement: 'The Victorian Government acknowledges Aboriginal and Torres Strait Islander people as the Traditional Custodians of the land and acknowledges and pays respect to their Elders, past and present.',
        caption: 'Image credit: This caption is used to describe the image in the hero banner above.',
        logos: [{"src":"https://via.placeholder.com/112x52","alt":"Max native size","url":"#"},{"src":"https://via.placeholder.com/32x32","alt":"Smaller than max size","url":"#"},{"src":"https://via.placeholder.com/80x200","alt":"Portrait","url":"#"},{"src":"https://via.placeholder.com/200x80","alt":"Landscape","url":"#"}]
      },
      breadcrumbs: [
        { text: 'Home', url: '#' },
        { text: 'Page', url: '#' }
      ],
      pageLayoutBackgroundColor: 'grey',
      showAcknowledgement: true,
      acknowledgement: 'Hello world!',
      sidebarComponents: null,
      updatedDate: { date: '2020-01-01T08:00:00' },
      campaignSecondary: {
        title: 'Campaign Secondary Title',
        summary: 'And campaign summary',
        link: { text: 'Hello', url: '#' },
        video: null,
        image: { src: sample }
      },
      controls: {
        theme: 'light',
        fileDesktop: '',
        showKeyLinks: false,
        showCrumbs: true,
        title: 'Landing Page',
        introText: 'Aliqua reprehenderit laborum ad consequat proident aliquip est consectetur aute ut dolor esse proident et enim ad.'
      }
    }
  },
  methods: {
    updateBanner () {
      if (this.$refs['fileDesktop'].files && this.$refs['fileDesktop'].files.length > 0) {
        var fileReaderDesktop = new FileReader()
        fileReaderDesktop.onload = () => {this.controls.fileDesktop = fileReaderDesktop.result }
        fileReaderDesktop.readAsDataURL(this.$refs['fileDesktop'].files[0])
      }
    }
  },
  computed: {
    heroBannerData () {
      return {
        title: this.controls.title,
        introText: this.controls.introText,
        linkHeading: 'Want to know more about...',
        links: [
          { text: 'First journey based link', url: '#' },
          { text: 'Secondary journey based link', url: '#' },
          { text: 'Third link goes here', url: '#' },
          { text: 'Fourth journey based link', url: '#' }
        ],
        moreLink: { text: 'See more', url: '#' },
        theme: this.controls.theme,
        showLinks: this.controls.showKeyLinks,
        backgroundGraphic: this.bottomGraphic
      }
    },
    heroBackgroundImage () {
      return (this.controls.fileDesktop) ? { src: this.controls.fileDesktop } : null
    },
    topGraphic () {
      return (process.env.NODE_ENV === 'development') ? topGraphicSrc : `img/header-pattern-shape.png`
    },
    bottomGraphic () {
      return (this.heroBackgroundImage == null) ? ((process.env.NODE_ENV === 'development') ? bottomGraphicSrc : `img/header-pattern-bottom.png`) : ''
    }
  }
}
</script>

<style lang="scss">
@import '~@dpc-sdp/ripple-global/scss/settings';
@import '~@dpc-sdp/ripple-global/scss/tools';

.controls {
  z-index: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: grey;
  padding: 10px;

  @include rpl-breakpoint('m') {
    display: flex;
  }

  .full-label {
    display: block;
  }

  .field {
    width: 100%;
    @include rpl-breakpoint('m') {
      width: 33.33%;
    }

    input {
      max-width: 200px;
    }
  }
}
</style>