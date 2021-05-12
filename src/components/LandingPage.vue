<template>
  <div class="page" :class="{ 'page--controls-hidden': !isControlVisible }">
    <!-- Controls -->
    <controls :controls="controls" @changeVisibility="controlVisibility" />
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
        :quickExit="controls.site.showExitSite"
        :key="`page-layout-${controls.site.showExitSite}`"
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
import Controls from './builder/Controls'
import controlDefault from './builder/controls.js'

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
import TideContentRating from './tide/TideContentRating'
import AppTopicTags from './tide/AppTopicTags'
import { anchorUtils } from '../libs/anchorlinks.js'
import RplAnchorLinks from '@dpc-sdp/ripple-anchor-links'
import {
  RplCardPromo,
  RplCardNav,
} from '@dpc-sdp/ripple-card'
// Custom
import topGraphicSrc from '../assets/img/header-pattern-shape.png'
import bottomGraphicSrc from '../assets/img/header-pattern-bottom.png'
import sample from '../assets/img/sample.png'
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
    Controls,
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
    RplCardPromo,
    RplCardNav
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      isControlVisible: true,
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
      controls: controlDefault
    }
  },
  methods: {
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
    },
    controlVisibility (isVisible) {
      this.isControlVisible = isVisible
    }
  },
  computed: {
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
          const fieldIntLink = comp.fields[0].data
          const fieldSup = comp.fields[1].data
          const fieldExtLink = comp.fields[2].data
          const fieldTitle = comp.fields[3].data
          const fieldSummary = comp.fields[4].data
          const fieldDisplayStyle = comp.fields[5].data
          if (fieldIntLink === 'Demo A') {
            data.title = 'Demo A'
            data.image = { src: sample }
            data.summary = 'Lorem ipsum in esse nostrud magna pariatur sunt in qui reprehenderit et eu exercitation officia qui sunt esse esse ad deserunt.'
            data.link = { text: '', url: '#content-a'}
            data.topic = 'Demo A Topic'
            data.contentType = 'event'
            data.dateStart = '2022-01-01T08:00:00'
            data.dateEnd = '2022-11-13T08:00:00'
            data.authors = ['Author A', 'Author B']
            data.inductionYear = '2001'
            data.isGrantOnGoing = 'Yes'
            data.fvRecommendationStatus = 'Recommended'
            data.showMeta = fieldSup
          }
          if (fieldIntLink === 'Demo B') {
            data.title = 'Demo B Content example'
            data.image = { src: sample }
            data.summary = 'Lorem ipsum quis dolor velit et proident velit elit mollit occaecat aute aliquip magna quis exercitation excepteur sunt amet voluptate dolore sint.'
            data.link = { text: '', url: '#content-b'}
            data.dateStart = '2022-01-01T08:00:00'
            data.dateEnd = '2022-11-13T08:00:00'
            data.contentType = 'event'
            data.showMeta = fieldSup
          }
          if (fieldIntLink === 'Demo C') {
            data.title = 'Demo C extra large content example'
            data.image = { src: sample }
            data.summary = 'Dolore deserunt tempor do magna irure nisi ut laborum consequat incididunt duis duis proident ea sit adipisicing do est officia labore ullamco et cupidatat aute nisi eu esse magna irure veniam adipisicing do dolore ex aute sint laboris dolore tempor dolor enim sit esse anim ut ex sit nostrud in id enim enim occaecat nostrud in labore quis consequat eiusmod occaecat exercitation anim ut excepteur excepteur dolor quis sunt ut ut cupidatat ex non velit ea cupidatat dolore eiusmod in ut magna cupidatat pariatur officia consectetur aute reprehenderit pariatur ex culpa nisi esse fugiat ullamco ex nisi est elit in voluptate do sed amet qui anim dolore ea deserunt qui qui in qui consequat incididunt quis aute aliqua quis do proident eiusmod non dolor nostrud aliquip excepteur fugiat exercitation culpa nulla ea reprehenderit tempor minim officia ea est nulla sint sunt ea adipisicing aliquip cillum non non anim nulla duis eiusmod proident voluptate sint.'
            data.link = { text: '', url: '#content-c'}
            data.topic = 'Demo C Topic'
            data.showMeta = fieldSup
          }
          if (fieldIntLink === '') {
            data.title = fieldTitle
            data.summary = fieldSummary
            data.link = { text: '', url: fieldExtLink }
          }
          data.displayStyle = fieldDisplayStyle
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
        } else if (comp.type === 'navigation_card') {
          const data = {}
          const fieldIntLink = comp.fields[0].data
          const fieldSup = comp.fields[1].data
          const fieldExtLink = comp.fields[2].data
          const fieldTitle = comp.fields[3].data
          const fieldSummary = comp.fields[4].data
          const fieldDisplayStyle = comp.fields[5].data
          if (fieldIntLink === 'Demo A') {
            data.title = 'Demo A'
            data.image = { src: sample }
            data.summary = 'Lorem ipsum in esse nostrud magna pariatur sunt in qui reprehenderit et eu exercitation officia qui sunt esse esse ad deserunt.'
            data.link = { text: '', url: '#content-a' }
            data.topic = 'Demo A Topic'
            data.contentType = 'event'
            data.dateStart = '2022-01-01T08:00:00'
            data.dateEnd = '2022-11-13T08:00:00'
            data.authors = ['Author A', 'Author B']
            data.inductionYear = '2001'
            data.isGrantOnGoing = 'Yes'
            data.fvRecommendationStatus = 'Recommended'
            data.showMeta = fieldSup
          } else if (fieldIntLink === '') {
            data.title = fieldTitle
            data.summary = fieldSummary
            data.link = { text: '', url: fieldExtLink }
          }
          data.displayStyle = fieldDisplayStyle
          rtn = {
            name: 'rpl-card-nav',
            component: 'rpl-card-nav',
            data: {
              ...data
            },
            childCols: null,
            class: [],
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
            menu: this.controls.site.mainMenu,
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
        links: this.controls.site.mainMenu,
        breakpoint: 992,
        sticky: false,
        hideOnScroll: false,
        showSearch: true,
        showLogout: false
      }
    },
    footer () {
      return {
        nav: this.controls.site.mainMenu,
        links: this.controls.site.footerMenu,
        copyright: this.controls.site.footerText,
        acknowledgement: this.controls.site.acknowledgementToCountry,
        caption: this.controls.pageHeader.showHeroImageCaption ? 'Image credit: This caption is used to describe the image in the hero banner above.' : null,
        logos: [{"src":"https://via.placeholder.com/112x52","alt":"Max native size","url":"#"},{"src":"https://via.placeholder.com/32x32","alt":"Smaller than max size","url":"#"},{"src":"https://via.placeholder.com/80x200","alt":"Portrait","url":"#"},{"src":"https://via.placeholder.com/200x80","alt":"Landscape","url":"#"}]
      }
    }
  },
}
</script>

<style lang="scss">
.page {
  padding-bottom: 400px;

  &--controls-hidden {
    padding-bottom: 0;
  }
}
</style>