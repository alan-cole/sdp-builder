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
        <div>
          <label class="full-label" for="field_mobile_image">Mobile</label>
          <input id="field_mobile_image" type="file" ref="fileMobile" @change="updateBanner" />
        </div>
      </div>
    </div>
    <!-- Ripple Base Layout -->
    <rpl-base-layout>
      <template slot="header">
        <rpl-site-header v-bind="header" />
      </template>
      <rpl-page-layout :backgroundGraphic="topGraphic" :heroBackgroundImage="heroBackgroundImage" >
        <template slot="breadcrumbs">
          <rpl-breadcrumbs v-if="controls.showCrumbs" :crumbs="breadcrumbs" />
        </template>
        <template slot="aboveContent">
          <rpl-hero-banner v-bind="heroBannerData" class="rpl-site-constrain--on-all" />
        </template>
        <template slot="aboveContentTwo">
          Hey
        </template>
      </rpl-page-layout>
    </rpl-base-layout>
  </div>
</template>

<script>
import { RplPageLayout, RplBaseLayout } from '@dpc-sdp/ripple-layout'
import RplSiteHeader from '@dpc-sdp/ripple-site-header'
import RplBreadcrumbs from '@dpc-sdp/ripple-breadcrumbs'
import { RplHeroBanner } from '@dpc-sdp/ripple-hero-banner'
import topGraphicSrc from '../assets/img/header-pattern-shape.png'
import bottomGraphicSrc from '../assets/img/header-pattern-bottom.png'

export default {
  name: 'SdpBuilder',
  components: {
    RplBaseLayout,
    RplPageLayout,
    RplBreadcrumbs,
    RplHeroBanner,
    RplSiteHeader
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
      breadcrumbs: [
        { text: 'Home', url: '#' },
        { text: 'Page', url: '#' }
      ],
      controls: {
        theme: 'light',
        fileDesktop: '',
        fileMobile: '',
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

      if (this.$refs['fileMobile'].files && this.$refs['fileMobile'].files.length > 0) {
        var fileReaderMobile = new FileReader()
        fileReaderMobile.onload = () => { this.controls.fileMobile = fileReaderMobile.result }
        fileReaderMobile.readAsDataURL(this.$refs['fileMobile'].files[0])
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