import sample from '../../assets/img/sample.png'
import sample699x411 from '../../assets/img/sample699x411.png'
const otherColours = `--rpl-button-danger-hover-background-color: #c42c35;
--rpl-pikaday-header-text-color: #475971;
--rpl-breadcrumbs-link-color: #125ec6;
--rpl-campaign-secondary-summary-text-color: #132a4a;
--quotation-author-color: #53647a;
--rpl-document-link-meta-color: #53647a;
--rpl-campaign-primary-summary-text-color: #132a4a;
--rpl-site-header-logout-btn-background-color-mobile: #012557;
--rpl-document-link-meta-separator-color: #dadee2;
--callout-wrapper-background-color: #e6f4fd;
--rpl-section-menu-active-left-bar: url('data:image/svg+xml,%3Csvg%20width%3D%224%22%20height%3D%221%22%20viewBox%3D%220%200%204%201%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%224%22%20height%3D%221%22%20fill%3D%22%230095ec%22%2F%3E%3C%2Fsvg%3E')`

export default {
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
      primary_gradient: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)',
      primary_gradient_90: 'linear-gradient(180deg, var(--primary) 0%, var(--secondary) 100%)',
      primary_gradient_0: 'linear-gradient(0deg, var(--primary) 0%, var(--secondary) 100%)',
      decorative_gradient: 'linear-gradient(-90deg, var(--primary) 0%, #825dff 12%, #ef4a81 23%, #e57200 37%, #ffc166 51%, #f9e062 81%)',
      decorative_gradient_0: 'linear-gradient(0deg, var(--primary) 0%, #825dff 12%, #ef4a81 23%, #e57200 37%, #ffc166 51%, #f9e062 81%)',
      decorative_gradient_90: 'linear-gradient(-180deg, var(--primary) 0%, #825dff 12%, #ef4a81 23%, #e57200 37%, #ffc166 51%, #f9e062 81%)',
      decorative_gradient_180: 'linear-gradient(90deg, var(--primary) 0%, #825dff 12%, #ef4a81 23%, #e57200 37%, #ffc166 51%, #f9e062 81%)',
      other: otherColours
    },
  },
  site: {
    mainMenu: [{"text":"Your Services","url":"#","children":[{"text":"Grants awards and assistance","url":"#"},{"text":"Law and safety","url":"#"},{"text":"Business and Industry","url":"#"},{"text":"Jobs and the Workplace","url":"#"},{"text":"Transport and Traffic","url":"#"},{"text":"Education","url":"#"},{"text":"Housing and Property","url":"#"},{"text":"Health","url":"#"},{"text":"Community","url":"#"},{"text":"Art, Culture and Sport","url":"#"},{"text":"Environment and Water","url":"#"}]},{"text":"About VIC Government","url":"#","children":[{"text":"Grants awards and assistance","url":"#"},{"text":"Law and safety","url":"#"},{"text":"Business and Industry","url":"#"},{"text":"Jobs and the Workplace","url":"#"},{"text":"Transport and Traffic","url":"#"},{"text":"Education","url":"#"},{"text":"Housing and Property","url":"#"},{"text":"Health","url":"#"},{"text":"Community","url":"#"},{"text":"Art, Culture and Sport","url":"#"},{"text":"Environment and Water","url":"#"}]},{"text":"News","url":"#"},{"text":"Events","url":"#"},{"text":"Connect with us","url":"#","children":[{"text":"Education","url":"#"},{"text":"Housing and Property","url":"#"},{"text":"Health","url":"#"}]}],
    footerMenu: [{"text":"Privacy","url":"#"},{"text":"Disclaimer","url":"#"},{"text":"Terms of use","url":"#"},{"text":"Sitemap","url":"#"},{"text":"Accessibility Statement","url":"#"},{"text":"Help","url":"#"}],
    footerText: '© Copyright State Government of Victoria',
    acknowledgementToCountry: 'The Victorian Government acknowledges Aboriginal and Torres Strait Islander people as the Traditional Custodians of the land and acknowledges and pays respect to their Elders, past and present.',
    showExitSite: false
  }
}
