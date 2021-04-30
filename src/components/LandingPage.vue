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
          <label class="full-label" for="field_desktop_image">Hero Banner Image</label>
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
        :sidebar="sidebar"
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
          <rpl-col v-if="showTopicTermsAndTags" cols="full">
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
    RplShareThis
  },
  data () {
    const mainMenu = [
        { text: 'Home', url: '#' },
        { text: 'About us', url: '#' },
        { text: 'Contact us', url: '#' }
      ]
    return {
      publicPath: process.env.BASE_URL,
      header: {
        links: mainMenu,
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
      sidebar: true,
      pageLayoutBackgroundColor: 'grey',
      showAcknowledgement: true,
      acknowledgement: 'Hello world!',
      headerComponents: [
        {
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
        }
      ],
      bodyComponents: [
        {
          name: 'rpl-markup',
          component: 'rpl-markup',
          data: {
            html: '<h2>Test</h2><p>Hello world!</p>',
            childColsBp: null
          },
          childCols: null,
          class: [],
          cols: null,
          // ssr: true,
          id: '1'
        }
      ],
      sidebarComponents: [
        {
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
        },
        {
          name: 'rpl-whats-next',
          component: 'rpl-whats-next',
          order: 103,
          data: {
            title: 'What\'s next?',
            links: [
              { text: 'Whats next 1', url: '#' }
            ]
          }
        },
        {
          name: 'rpl-site-section-navigation',
          component: 'rpl-site-section-navigation',
          order: 100,
          data: {
            menu: mainMenu,
            title: 'My title',
            activeLink: '/active'
          }
        },
        {
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
        },
        {
          name: 'rpl-share-this',
          component: 'rpl-share-this',
          order: 105,
          data: {
            title: 'Share this page',
            url: `https://duckduckgo.com`
          }
        }
      ],
      showTableOfContents: true,
      showTopicTermsAndTags: true,
      topic: { name: 'Topic', path: { alias: '#' } },
      tags: [{ name: 'Tag A', path: { alias: '#' } }, { name: 'Tag B', path: { alias: '#' } }],
      displayHeadings: 'showH2AndH3',
      updatedDate: { date: '2020-01-01T08:00:00' },
      campaignPrimary: {
        title: 'Campaign Primary Title',
        summary: 'And campaign summary',
        link: { text: 'Hello', url: '#' },
        video: null,
        image: { src: sample699x411 }
      },
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
    },
    anchorLinks () {
      if (this.showTableOfContents && this.bodyComponents) {
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
    pageType () {
      if (this.page.type) {
        return this.$tide.getPageTypeTemplate(this.page.type)
      } else {
        return false
      }
    },
    orderedSidebarComponents () {
      return this.sidebarComponents.filter(a => a).sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))
    }
  },
}
</script>

<style lang="scss">
@import '~@dpc-sdp/ripple-global/scss/settings';
@import '~@dpc-sdp/ripple-global/scss/tools';

body {
  padding-bottom: 200px;
}

.controls {
  z-index: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0, 0.9);
  color: white;
  padding: 10px;
  height: 200px;
  box-sizing: border-box;
  z-index: 10000;

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