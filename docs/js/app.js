(function(e){function t(t){for(var a,r,l=t[0],i=t[1],c=t[2],d=0,u=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);p&&p(t);while(u.length)u.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s={app:0},o=[];function l(e){return i.p+"js/"+({"rpl-card-event":"rpl-card-event","rpl-card-promotion":"rpl-card-promotion"}[e]||e)+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"rpl-card-event":1,"rpl-card-promotion":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({"rpl-card-event":"rpl-card-event","rpl-card-promotion":"rpl-card-promotion"}[e]||e)+".css",s=i.p+a,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var c=o[l],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===s))return t()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){c=u[l],d=c.getAttribute("data-href");if(d===a||d===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],p.parentNode.removeChild(p),n(o)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){r[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=o);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=l(e);var u=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}s[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},1989:function(e,t,n){e.exports=n.p+"img/header-pattern-bottom.png"},2:function(e,t){},3:function(e,t){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6b","./en-gb.js":"39a6b","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("landing-page")],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"controls"},[n("div",{staticClass:"field"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.controls.theme,expression:"controls.theme"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.controls,"theme",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"light"}},[e._v("Light")]),n("option",{attrs:{value:"dark"}},[e._v("Dark")])]),n("div",[n("label",{attrs:{for:"field_show_links"}},[e._v("Show Links")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.controls.showKeyLinks,expression:"controls.showKeyLinks"}],attrs:{id:"field_show_links",type:"checkbox"},domProps:{checked:Array.isArray(e.controls.showKeyLinks)?e._i(e.controls.showKeyLinks,null)>-1:e.controls.showKeyLinks},on:{change:function(t){var n=e.controls.showKeyLinks,a=t.target,r=!!a.checked;if(Array.isArray(n)){var s=null,o=e._i(n,s);a.checked?o<0&&e.$set(e.controls,"showKeyLinks",n.concat([s])):o>-1&&e.$set(e.controls,"showKeyLinks",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.controls,"showKeyLinks",r)}}})]),n("div",[n("label",{attrs:{for:"field_show_breadcrumbs"}},[e._v("Show Breadcrumbs")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.controls.showCrumbs,expression:"controls.showCrumbs"}],attrs:{id:"field_show_breadcrumbs",type:"checkbox"},domProps:{checked:Array.isArray(e.controls.showCrumbs)?e._i(e.controls.showCrumbs,null)>-1:e.controls.showCrumbs},on:{change:function(t){var n=e.controls.showCrumbs,a=t.target,r=!!a.checked;if(Array.isArray(n)){var s=null,o=e._i(n,s);a.checked?o<0&&e.$set(e.controls,"showCrumbs",n.concat([s])):o>-1&&e.$set(e.controls,"showCrumbs",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.controls,"showCrumbs",r)}}})])]),n("div",{staticClass:"field"},[n("div",[n("label",{staticClass:"full-label",attrs:{for:"field_title"}},[e._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.controls.title,expression:"controls.title"}],attrs:{id:"field_title",type:"text"},domProps:{value:e.controls.title},on:{input:function(t){t.target.composing||e.$set(e.controls,"title",t.target.value)}}})]),n("div",[n("label",{staticClass:"full-label",attrs:{for:"field_intro_text"}},[e._v("Intro Text")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.controls.introText,expression:"controls.introText"}],attrs:{id:"field_intro_text",type:"text"},domProps:{value:e.controls.introText},on:{input:function(t){t.target.composing||e.$set(e.controls,"introText",t.target.value)}}})])]),n("div",{staticClass:"field"},[n("div",[n("label",{staticClass:"full-label",attrs:{for:"field_desktop_image"}},[e._v("Hero Banner Image")]),n("input",{ref:"fileDesktop",attrs:{id:"field_desktop_image",type:"file"},on:{change:e.updateBanner}})])])]),n("rpl-base-layout",[n("template",{slot:"header"},[n("rpl-alert-base",{staticClass:"app-preview"},[e._v("Draft only and not yet published")]),n("rpl-site-header",e._b({},"rpl-site-header",e.header,!1))],1),n("rpl-page-layout",{attrs:{sidebar:e.sidebar,backgroundColor:e.pageLayoutBackgroundColor,heroBackgroundImage:e.heroBackgroundImage,backgroundGraphic:e.topGraphic}},[n("template",{slot:"breadcrumbs"},[e.controls.showCrumbs?n("rpl-breadcrumbs",{attrs:{crumbs:e.breadcrumbs}}):e._e()],1),n("template",{slot:"aboveContent"},[n("rpl-hero-banner",e._b({staticClass:"rpl-site-constrain--on-all"},"rpl-hero-banner",e.heroBannerData,!1)),e.showAcknowledgement?n("rpl-acknowledgement",{attrs:{text:e.acknowledgement,theme:"standalone"}}):e._e()],1),n("template",{slot:"aboveContentTwo"},[e.headerComponents?[e._l(e.headerComponents,(function(t){return[t&&t.component?n(t.component,e._g(e._b({key:t.id,tag:"component",class:t.class},"component",t.data,!1),"rpl-search-form"===t.name?{search:function(n){return e.searchFunc(n,t.data)}}:{})):e._e()]}))]:e._e(),e.campaignPrimary?n("rpl-campaign-primary",e._b({},"rpl-campaign-primary",e.campaignPrimary,!1)):e._e()],2),n("rpl-row",{staticClass:"app-content tide-content tide-content--landing-page",attrs:{"row-gutter":""}},[e.anchorLinks&&e.anchorLinks.length>0?[n("rpl-col",{attrs:{cols:"full"}},[n("rpl-anchor-links",{attrs:{title:"On this page:",links:e.anchorLinks}})],1)]:e._e(),e._l(e.bodyComponents,(function(t){return e.bodyComponents?[n("rpl-col",{key:t.id,attrs:{cols:"full",colsBp:t.cols}},[n(t.component,e._b({tag:"component",class:t.class},"component",t.data,!1))],1)]:e._e()})),e.showTopicTermsAndTags?n("rpl-col",{attrs:{cols:"full"}},[n("app-topic-tags",{attrs:{topic:e.topic,tags:e.tags}})],1):e._e()],2),n("rpl-updated-date",e._b({},"rpl-updated-date",e.updatedDate,!1)),n("template",{slot:"sidebar"},[e.orderedSidebarComponents?n("div",{staticClass:"app-sidebar"},[e._l(e.orderedSidebarComponents,(function(t,a){return[n(t.component,e._b({key:a+"-"+t.order,tag:"component",staticClass:"rpl-component-gutter"},"component",t.data,!1))]}))],2):e._e()]),n("template",{slot:"belowContent"},[e.campaignSecondary?n("rpl-campaign-secondary",e._b({staticClass:"rpl-site-constrain--on-all"},"rpl-campaign-secondary",e.campaignSecondary,!1)):e._e(),n("tide-content-rating",{staticClass:"rpl-site-constrain--on-all"})],1)],2),n("template",{slot:"footer"},[n("rpl-site-footer",e._b({},"rpl-site-footer",e.footer,!1))],1)],2)],1)},l=[],i=n("2909"),c=(n("159b"),n("b0c0"),n("4de4"),n("bdec")),d=n("0796"),u=n("116b"),p=n("04d5"),m=n("983e"),f=n("9e32"),h=n("df52"),b=n("6b68"),g=n("9de8"),j=n("5fcf"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-content-rating tide-content-rating"},[n("rpl-form",{attrs:{name:"content-rating-form",formData:e.formData,submitHandler:e.submitForm,hideAfterSuccess:!0}})],1)},y=[],k=n("1da1"),x=(n("96cf"),n("6e67")),w={name:"TideContentRating",components:{RplForm:x["c"]},props:{siteSectionName:String},data:function(){return{messages:{success:"Thank you! Your response has been submitted.",error:"We are experiencing a server error. Please try again, otherwise contact us."},formData:{tideId:"tide_webform_content_rating",model:{url:"",site_section_name:"",was_this_page_helpful:null,comments:"",honeypot:""},schema:{groups:[{legend:"Was this page helpful?",fields:[{type:"input",inputType:"hidden",model:"url"},{type:"input",inputType:"hidden",model:"site_section_name"},{type:"radios",model:"was_this_page_helpful",values:["Yes","No"]}]},{fields:[{type:"input",inputType:"text",label:"Tell me your email",model:"honeypot",styleClasses:"tide-tell-me-your-email",autocomplete:"off"},{type:"textArea",label:"Please add your comments:",model:"comments",placeholder:"Start typing...",rows:4,required:!1,max:5e3,visible:function(e){return e&&null!==e.was_this_page_helpful}},{type:"submit",buttonText:"Submit",visible:function(e){return e&&null!==e.was_this_page_helpful},buttons:[{label:"Cancel",classes:["app-button--cancel"],onclick:function(e){e.reset=!0,e.was_this_page_helpful=null,e.comments=""}}]}]}]},formOptions:{validateAfterLoad:!0,validateAfterChanged:!0},formState:{}}}},methods:{submitForm:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:alert("Submitted!"),e.formData.formState={response:{status:"success",message:e.messages.success}};case 2:case"end":return t.stop()}}),t)})))()}}},_=w,C=(n("8f0f"),n("2877")),T=Object(C["a"])(_,v,y,!1,null,null,null),A=T.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.topicAndTags?n("ul",{staticClass:"app-topics-tags"},e._l(e.topicAndTags,(function(e,t){return n("li",{key:t,staticClass:"app-topics-tags__item"},[n("rpl-meta-tag",{attrs:{linkText:e.text,linkUrl:e.url}})],1)})),0):e._e()},L=[],R=(n("99af"),n("d81d"),n("8989")),H={components:{RplRow:m["c"],RplCol:m["a"],RplMetaTag:R["a"]},props:{topic:Object,tags:Array},computed:{topicAndTags:function(){var e=[];return this.topic&&e.push(this.topic),this.tags&&(e=e.concat(this.tags)),e=e.map((function(e){return{text:e.name,url:e.path&&e.path.alias?e.path.alias:""}})),e.length>0?e:null}}},P=H,O=(n("d1d5"),Object(C["a"])(P,S,L,!1,null,null,null)),E=O.exports,D=(n("fb6a"),n("ac1f"),n("5319"),n("0b4b")),z={getAnchorLinkHTML:function(e){var t=this,n=e,a=0,r="<h2".length;return this.getAnchorHeadings(e,!0).forEach((function(e){var s=t.textExists(e.text)?' id="'.concat(Object(D["c"])(e.text),'"'):"",o=e.indexStart+a+r;n=n.slice(0,o)+s+n.slice(o),a+=s.length})),n},getAnchorLinks:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.getAnchorHeadings(e,n).reduce((function(e,n){return t.textExists(n.text)&&e.push({text:n.text,url:"#"+Object(D["c"])(n.text),type:n.type}),e}),[])},getAnchorHeadings:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[],a=/<h2>[\w\W]*?<\/h2>/gim;t&&(a=/<(h2|h3)>[\w\W]*?<\/(h2|h3)>/gim);var r=a.exec(e);while(null!==r){var s=r[0].replace(/<.+?>/gi,"");this.textExists(s)&&n.push({indexStart:r.index,text:r[0].replace(/<.+?>/gi,""),type:r[0].substr(1,2)}),r=a.exec(e)}return n},textExists:function(e){return e.replace(/\s|&nbsp;/g,"").length>0}},B=n("6ba1"),N=(n("ff5c"),n("1989"),n("e607")),$=n.n(N),I=n("c468"),G=n.n(I),K=n("cc40"),M=n("da00"),W=n("1df1"),F=n("3403"),q=n("23f0"),U=n("4c39"),J={name:"SdpBuilder",components:{RplRow:m["c"],RplCol:m["a"],RplAlertBase:c["a"],RplBaseLayout:d["a"],RplPageLayout:d["b"],RplBreadcrumbs:b["a"],RplHeroBanner:f["a"],RplIntroBanner:f["b"],RplSiteHeader:u["b"],RplSiteFooter:p["b"],RplAcknowledgement:p["a"],RplUpdatedDate:h["a"],RplCampaignPrimary:g["a"],RplCampaignSecondary:j["a"],TideContentRating:A,AppTopicTags:E,RplAnchorLinks:B["a"],RplMarkup:K["a"],RplRelatedLinks:M["a"],RplWhatsNext:W["a"],RplSiteSectionNavigation:F["a"],RplContact:q["a"],RplShareThis:U["a"]},data:function(){var e=[{text:"Home",url:"#"},{text:"About us",url:"#"},{text:"Contact us",url:"#"}];return{publicPath:"/",header:{links:e,breakpoint:992,sticky:!1,hideOnScroll:!1,showSearch:!1,showLogout:!1},footer:{nav:[{text:"Your Services",url:"#",children:[{text:"Grants awards and assistance",url:"#"},{text:"Law and safety",url:"#"},{text:"Business and Industry",url:"#"},{text:"Jobs and the Workplace",url:"#"},{text:"Transport and Traffic",url:"#"},{text:"Education",url:"#"},{text:"Housing and Property",url:"#"},{text:"Health",url:"#"},{text:"Community",url:"#"},{text:"Art, Culture and Sport",url:"#"},{text:"Environment and Water",url:"#"}]},{text:"About VIC Government",url:"#",children:[{text:"Grants awards and assistance",url:"#"},{text:"Law and safety",url:"#"},{text:"Business and Industry",url:"#"},{text:"Jobs and the Workplace",url:"#"},{text:"Transport and Traffic",url:"#"},{text:"Education",url:"#"},{text:"Housing and Property",url:"#"},{text:"Health",url:"#"},{text:"Community",url:"#"},{text:"Art, Culture and Sport",url:"#"},{text:"Environment and Water",url:"#"}]},{text:"News",url:"#"},{text:"Events",url:"#"},{text:"Connect with us",url:"#",children:[{text:"Education",url:"#"},{text:"Housing and Property",url:"#"},{text:"Health",url:"#"}]}],links:[{text:"Privacy",url:"#"},{text:"Disclaimer",url:"#"},{text:"Terms of use",url:"#"},{text:"Sitemap",url:"#"},{text:"Accessibility Statement",url:"#"},{text:"Help",url:"#"}],copyright:"© Copyright State Government of Victoria",acknowledgement:"The Victorian Government acknowledges Aboriginal and Torres Strait Islander people as the Traditional Custodians of the land and acknowledges and pays respect to their Elders, past and present.",caption:"Image credit: This caption is used to describe the image in the hero banner above.",logos:[{src:"https://via.placeholder.com/112x52",alt:"Max native size",url:"#"},{src:"https://via.placeholder.com/32x32",alt:"Smaller than max size",url:"#"},{src:"https://via.placeholder.com/80x200",alt:"Portrait",url:"#"},{src:"https://via.placeholder.com/200x80",alt:"Landscape",url:"#"}]},breadcrumbs:[{text:"Home",url:"#"},{text:"Page",url:"#"}],sidebar:!0,pageLayoutBackgroundColor:"grey",showAcknowledgement:!0,acknowledgement:"Hello world!",headerComponents:[{name:"rpl-intro-banner",component:"rpl-intro-banner",data:{title:"My Title",introText:"Intro banner text",linkHeading:"Link heading",links:[{text:"Home",url:"#"}],showLinks:!0,linksType:"link",icon:"alert_information"},class:["rpl-site-constrain--on-all"],id:"header-1"}],bodyComponents:[{name:"rpl-markup",component:"rpl-markup",data:{html:"<h2>Test</h2><p>Hello world!</p>",childColsBp:null},childCols:null,class:[],cols:null,id:"1"}],sidebarComponents:[{name:"rpl-related-links",component:"rpl-related-links",order:101,data:{title:"Related links",links:[{text:"Related Link 1",url:"#"},{text:"DuckDuckGo",url:"https://duckduckgo.com"}]}},{name:"rpl-whats-next",component:"rpl-whats-next",order:103,data:{title:"What's next?",links:[{text:"Whats next 1",url:"#"}]}},{name:"rpl-site-section-navigation",component:"rpl-site-section-navigation",order:100,data:{menu:e,title:"My title",activeLink:"/active"}},{name:"rpl-contact",component:"rpl-contact",order:104,data:{title:"Contact us",name:"Name",department:"Department",postal:"Postal",address:"Address",phone:[{title:"Home",number:"123456789"}],email:"email@example.com",social:[{title:"Social",icon:"facebook",url:"https://www.duckduckgo.com"}]}},{name:"rpl-share-this",component:"rpl-share-this",order:105,data:{title:"Share this page",url:"https://duckduckgo.com"}}],showTableOfContents:!0,showTopicTermsAndTags:!0,topic:{name:"Topic",path:{alias:"#"}},tags:[{name:"Tag A",path:{alias:"#"}},{name:"Tag B",path:{alias:"#"}}],displayHeadings:"showH2AndH3",updatedDate:{date:"2020-01-01T08:00:00"},campaignPrimary:{title:"Campaign Primary Title",summary:"And campaign summary",link:{text:"Hello",url:"#"},video:null,image:{src:G.a}},campaignSecondary:{title:"Campaign Secondary Title",summary:"And campaign summary",link:{text:"Hello",url:"#"},video:null,image:{src:$.a}},controls:{theme:"light",fileDesktop:"",showKeyLinks:!1,showCrumbs:!0,title:"Landing Page",introText:"Aliqua reprehenderit laborum ad consequat proident aliquip est consectetur aute ut dolor esse proident et enim ad."}}},methods:{updateBanner:function(){var e=this;if(this.$refs["fileDesktop"].files&&this.$refs["fileDesktop"].files.length>0){var t=new FileReader;t.onload=function(){e.controls.fileDesktop=t.result},t.readAsDataURL(this.$refs["fileDesktop"].files[0])}}},computed:{heroBannerData:function(){return{title:this.controls.title,introText:this.controls.introText,linkHeading:"Want to know more about...",links:[{text:"First journey based link",url:"#"},{text:"Secondary journey based link",url:"#"},{text:"Third link goes here",url:"#"},{text:"Fourth journey based link",url:"#"}],moreLink:{text:"See more",url:"#"},theme:this.controls.theme,showLinks:this.controls.showKeyLinks,backgroundGraphic:this.bottomGraphic}},heroBackgroundImage:function(){return this.controls.fileDesktop?{src:this.controls.fileDesktop}:null},topGraphic:function(){return"img/header-pattern-shape.png"},bottomGraphic:function(){return null==this.heroBackgroundImage?"img/header-pattern-bottom.png":""},anchorLinks:function(){var e=this;if(this.showTableOfContents&&this.bodyComponents){var t=[];return this.bodyComponents.forEach((function(n){if(n&&n.name&&n.data)switch(n.name){case"rpl-markup":if(n.data.html){var a=!1;e.displayHeadings&&"showH2AndH3"===e.displayHeadings&&(a=!0),t.push.apply(t,Object(i["a"])(z.getAnchorLinks(n.data.html,a)))}break;case"rpl-accordion":n.data.title&&t.push({text:n.data.title,url:"#".concat(getAnchorLinkName(n.data.title))});break}})),t}return[]},pageType:function(){return!!this.page.type&&this.$tide.getPageTypeTemplate(this.page.type)},orderedSidebarComponents:function(){return this.sidebarComponents.filter((function(e){return e})).sort((function(e,t){return e.order>t.order?1:t.order>e.order?-1:0}))}}},V=J,Y=(n("f1b9"),Object(C["a"])(V,o,l,!1,null,null,null)),Q=Y.exports,X={name:"App",components:{LandingPage:Q}},Z=X,ee=Object(C["a"])(Z,r,s,!1,null,null,null),te=ee.exports,ne=(n("3328"),n("1872")),ae=n("599d");a["default"].config.productionTip=!1,a["default"].use(ne["c"],{rplMarkup:{plugins:ae["a"],options:{decodeEntities:!1}}}),new a["default"]({render:function(e){return e(te)}}).$mount("#app")},"702f":function(e,t,n){},"73f1":function(e,t,n){},"79ef":function(e,t,n){},"8f0f":function(e,t,n){"use strict";var a=n("702f"),r=n.n(a);r.a},c468:function(e,t,n){e.exports=n.p+"img/sample699x411.png"},d1d5:function(e,t,n){"use strict";var a=n("73f1"),r=n.n(a);r.a},e607:function(e,t,n){e.exports=n.p+"img/sample.png"},f1b9:function(e,t,n){"use strict";var a=n("79ef"),r=n.n(a);r.a},ff5c:function(e,t,n){e.exports=n.p+"img/header-pattern-shape.png"}});