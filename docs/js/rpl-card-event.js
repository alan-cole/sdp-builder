(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["rpl-card-event"],{"0342":function(t,e,i){(function(){function e(t,e){document.addEventListener?t.addEventListener("scroll",e,!1):t.attachEvent("scroll",e)}function i(t){document.body?t():document.addEventListener?document.addEventListener("DOMContentLoaded",(function e(){document.removeEventListener("DOMContentLoaded",e),t()})):document.attachEvent("onreadystatechange",(function e(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",e),t())}))}function n(t){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(t)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function a(t,e){t.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+e+";"}function r(t){var e=t.a.offsetWidth,i=e+100;return t.f.style.width=i+"px",t.c.scrollLeft=i,t.b.scrollLeft=t.b.scrollWidth+100,t.g!==e&&(t.g=e,!0)}function s(t,i){function n(){var t=a;r(t)&&t.a.parentNode&&i(t.g)}var a=t;e(t.b,n),e(t.c,n),r(t)}function l(t,e){var i=e||{};this.family=t,this.style=i.style||"normal",this.weight=i.weight||"normal",this.stretch=i.stretch||"normal"}var o=null,c=null,d=null,p=null;function u(){if(null===c)if(m()&&/Apple/.test(window.navigator.vendor)){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);c=!!t&&603>parseInt(t[1],10)}else c=!1;return c}function m(){return null===p&&(p=!!document.fonts),p}function _(){if(null===d){var t=document.createElement("div");try{t.style.font="condensed 100px sans-serif"}catch(e){}d=""!==t.style.font}return d}function h(t,e){return[t.style,t.weight,_()?t.stretch:"","100px",e].join(" ")}l.prototype.load=function(t,e){var r=this,l=t||"BESbswy",c=0,d=e||3e3,p=(new Date).getTime();return new Promise((function(t,e){if(m()&&!u()){var _=new Promise((function(t,e){function i(){(new Date).getTime()-p>=d?e(Error(d+"ms timeout exceeded")):document.fonts.load(h(r,'"'+r.family+'"'),l).then((function(e){1<=e.length?t():setTimeout(i,25)}),e)}i()})),f=new Promise((function(t,e){c=setTimeout((function(){e(Error(d+"ms timeout exceeded"))}),d)}));Promise.race([f,_]).then((function(){clearTimeout(c),t(r)}),e)}else i((function(){function i(){var e;(e=-1!=g&&-1!=v||-1!=g&&-1!=y||-1!=v&&-1!=y)&&((e=g!=v&&g!=y&&v!=y)||(null===o&&(e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),o=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))),e=o&&(g==C&&v==C&&y==C||g==b&&v==b&&y==b||g==S&&v==S&&y==S)),e=!e),e&&(x.parentNode&&x.parentNode.removeChild(x),clearTimeout(c),t(r))}function u(){if((new Date).getTime()-p>=d)x.parentNode&&x.parentNode.removeChild(x),e(Error(d+"ms timeout exceeded"));else{var t=document.hidden;!0!==t&&void 0!==t||(g=m.a.offsetWidth,v=_.a.offsetWidth,y=f.a.offsetWidth,i()),c=setTimeout(u,50)}}var m=new n(l),_=new n(l),f=new n(l),g=-1,v=-1,y=-1,C=-1,b=-1,S=-1,x=document.createElement("div");x.dir="ltr",a(m,h(r,"sans-serif")),a(_,h(r,"serif")),a(f,h(r,"monospace")),x.appendChild(m.a),x.appendChild(_.a),x.appendChild(f.a),document.body.appendChild(x),C=m.a.offsetWidth,b=_.a.offsetWidth,S=f.a.offsetWidth,u(),s(m,(function(t){g=t,i()})),a(m,h(r,'"'+r.family+'",sans-serif')),s(_,(function(t){v=t,i()})),a(_,h(r,'"'+r.family+'",serif')),s(f,(function(t){y=t,i()})),a(f,h(r,'"'+r.family+'",monospace'))}))}))},t.exports=l})()},"04e7":function(t,e,i){},"056b":function(t,e,i){"use strict";var n=i("5722"),a=i.n(n);a.a},"0d41":function(t,e,i){"use strict";i.r(e),i.d(e,"RplCardPromo",(function(){return b})),i.d(e,"RplCardNav",(function(){return R})),i.d(e,"RplCardImageNavigation",(function(){return z})),i.d(e,"RplCardNavigation",(function(){return A})),i.d(e,"RplCardNavigationFeatured",(function(){return X})),i.d(e,"RplCardPromotion",(function(){return ct})),i.d(e,"RplCardKeydates",(function(){return ht})),i.d(e,"RplCardEvent",(function(){return bt})),i.d(e,"RplCardCta",(function(){return Rt})),i.d(e,"RplCardEmergencyContact",(function(){return Mt})),i.d(e,"RplCardBox",(function(){return Gt})),i.d(e,"RplCardHonourRoll",(function(){return Ut})),i.d(e,"RplCardProfile",(function(){return ee})),i.d(e,"RplCardCarousel",(function(){return ce}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.link?i("rpl-link",{class:["rpl-card-promo",t.classModifiers],attrs:{href:t.link.url}},[t.computedImg&&"noImage"!==t.displayStyle?i("rpl-responsive-img",t._b({staticClass:"rpl-card-promo__image",attrs:{alt:"",srcSet:t.srcSet}},"rpl-responsive-img",t.computedImg,!1)):t._e(),i("div",{staticClass:"rpl-card-promo__content"},[t.showMeta&&t.isMetaInfoNotEmpty?i("div",{staticClass:"rpl-card-promo__meta"},[t.contentTypeLabel?i("div",{staticClass:"rpl-card-promo__content-type"},[t._v(t._s(t.contentTypeLabel))]):t._e(),t.topicLabel?i("div",{staticClass:"rpl-card-promo__topic"},[t._v(t._s(t.topicLabel))]):t._e(),t.isContentTypeGrant&&t.grantStatusData?i("div",{staticClass:"rpl-card-promo__status"},[i("rpl-icon",{staticClass:"rpl-card-promo__status-icon",attrs:{symbol:t.grantStatusData.symbol,color:t.grantStatusData.color,size:"s"}}),i("span",[t._v(t._s(t.grantStatusData.label))])],1):t._e(),t.fvRecommendationStatus&&!t.isContentTypeGrant?i("div",{staticClass:"rpl-card-promo__fv-status"},[t._v(t._s(t.fvRecommendationStatus))]):t._e(),t.formattedDate&&!t.isContentTypeGrant?i("div",{staticClass:"rpl-card-promo__date"},[t._v(t._s(t.formattedDate))]):t._e(),t.inductionYear&&!t.isContentTypeGrant?i("div",{staticClass:"rpl-card-promo__year"},[t._v(t._s(t.inductionYear))]):t._e()]):t._e(),t.title?i("h2",{staticClass:"rpl-card-promo__title"},[t._v(t._s(t.trimmedTitle))]):t._e(),t.summary?i("p",{staticClass:"rpl-card-promo__summary"},[t._v(t._s(t.trimmedSummary))]):t._e()])],1):t._e()},a=[],r=(i("caad"),i("b64b"),i("627e")),s=i("39a6"),l=i("4498"),o=i("2470"),c=i("0b4b"),d=i("c1df"),p=i.n(d);const u=r["a"].methods.formatDate,m={open:"Open",closed:"Closed",ongoing:"Ongoing",openingSoon:t=>"Opening on "+t,closingSoon:(t,e)=>{if(!t||!e)return"Opening soon";const i=parseInt(t.diff(e,"days"));return i>1?`Open, closing in ${i} days`:1===i?`Open, closing in ${i} day`:"Open, closing today"}};function _(t,e,i=!0,n=m){if(n||(n=m),t||e){const a=p()(),r=t?p()(t):null,s=e?p()(e):null;return r?a.isAfter(r)?s?a.isBefore(s)?i?n.closingSoon(s,a):n.open:n.closed:n.ongoing:a.isBetween(p()(r).subtract(1,"months"),r)?i?n.openingSoon(u(t)):n.openingSoon():n.closed:s?a.isBefore(s)&&i?n.closingSoon(s,a):n.closed:n.ongoing}return n.ongoing}const h={data(){return{statusTerms:{open:{label:"Open",symbol:"success",color:"success"},closed:{label:"Closed",symbol:"cross_circle",color:"danger"},ongoing:{label:"Ongoing",symbol:"success",color:"success"},openingSoon:t=>({label:"Opening on "+t,symbol:"success",color:"success"}),closingSoon:(t,e)=>{const i=parseInt(t.diff(e,"days"));let n="Open, closing today";return i>1?n=`Open, closing in ${i} days`:1===i&&(n=`Open, closing in ${i} day`),{label:n,symbol:"success",color:"success"}}},srcSet:[{size:"xs",height:534,width:764},{size:"s",height:200,width:764},{size:"m",height:232,width:448},{size:"l",height:232,width:333}]}},methods:{modifiers(t="rpl-card"){return`${t}--${this.displayStyle.toLowerCase()}`}},computed:{grantStatusData(){return"1"===this.isGrantOnGoing?this.statusTerms.ongoing:_(this.dateStart,this.dateEnd,!1,this.statusTerms)},trimmedTitle(){const t=150;return this.title?Object(c["i"])(this.title,t):""},formattedDate(){if(!this.dateStart&&!this.dateEnd)return"";let t=this.formatDate(this.dateStart,"DD MMMM YYYY");return this.dateStart&&this.dateEnd&&(t=this.formatDateRange(this.dateStart,this.dateEnd)),t},isValidContentType(){const t=["event","grant","news","publication","publication page","profile: aboriginal honour roll","profile: australia day ambassador","profile: victorian design review panel","profile: women's honour roll","recommendation - family violence"];return!(!this.contentType||!t.includes(this.contentType.toLowerCase()))},isContentTypeGrant(){return this.isValidContentType&&"grant"===this.contentType.toLowerCase()},contentTypeLabel(){if(this.showMeta&&!0===this.isValidContentType&&this.contentType){let t=this.contentType.split(" ");return t[0].replace(":","")}return""},topicLabel(){return this.showMeta&&!1===this.isValidContentType&&this.topic?this.topic:""},isMetaInfoNotEmpty(){return this.contentTypeLabel||this.topicLabel||this.grantStatusData&&this.isContentTypeGrant||this.fvRecommendationStatus||this.formattedDate||this.inductionYear},computedImg(){return this.image?"string"===typeof this.image?{src:this.image}:this.image:""}}};var f=h,g={name:"RplCardPromo",mixins:[r["a"],f],components:{RplResponsiveImg:l["a"],RplIcon:o["c"],RplLink:s["e"]},props:{title:{type:String,required:!0},link:{type:Object,default:function(){return{}}},summary:{type:String,default:""},image:{type:[Object,String],default:function(){return{}}},dateStart:{type:String,default:""},dateEnd:{type:String,default:""},contentType:{type:String,default:""},topic:{type:String,default:""},showMeta:{type:Boolean,default:!1},displayStyle:{type:String,default:"noImage",validator:function(t){return["noImage","thumbnail","profile"].includes(t)}},isGrantOnGoing:{type:String,default:""},inductionYear:{type:String,default:""},fvRecommendationStatus:{type:String,default:""}},computed:{classModifiers:function(){var t="rpl-card-promo";return this.image?this.modifiers(t):"".concat(t,"--noimage")},trimmedSummary:function(){var t=300;return this.image&&Object.keys(this.image).length&&"profile"===this.displayStyle&&(t=150),this.summary?Object(c["i"])(this.summary,t):""}}},v=g,y=(i("056b"),i("2877")),C=Object(y["a"])(v,n,a,!1,null,null,null),b=C.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.link?i("rpl-link",{class:["rpl-card-nav",t.classModifiers],attrs:{href:t.link.url,innerWrap:!1}},[t.computedImg&&"noImage"!==t.displayStyle?i("div",{staticClass:"rpl-card-nav__image-wrapper"},[i("rpl-responsive-img",t._b({staticClass:"rpl-card-nav__image",attrs:{alt:"",srcSet:t.srcSet}},"rpl-responsive-img",t.computedImg,!1))],1):t._e(),i("div",{staticClass:"rpl-card-nav__content"},[t.showMeta&&t.isMetaInfoNotEmpty?i("div",{staticClass:"rpl-card-nav__meta"},[t.contentTypeLabel?i("div",{staticClass:"rpl-card-nav__content-type"},[t._v(t._s(t.contentTypeLabel))]):t._e(),t.topicLabel?i("div",{staticClass:"rpl-card-nav__topic"},[t._v(t._s(t.topicLabel))]):t._e(),t.isContentTypeGrant&&t.grantStatusData?i("div",{staticClass:"rpl-card-nav__status"},[i("rpl-icon",{staticClass:"rpl-card-nav__status-icon",attrs:{symbol:t.grantStatusData.symbol,color:t.grantStatusData.color,size:"s"}}),i("span",[t._v(t._s(t.grantStatusData.label))])],1):t._e(),t.fvRecommendationStatus&&!t.isContentTypeGrant?i("div",{staticClass:"rpl-card-nav__fv-status"},[t._v(t._s(t.fvRecommendationStatus))]):t._e(),t.formattedDate&&!t.isContentTypeGrant?i("div",{staticClass:"rpl-card-nav__date"},[t._v(t._s(t.formattedDate))]):t._e(),t.inductionYear&&!t.isContentTypeGrant?i("div",{staticClass:"rpl-card-nav__year"},[t._v(t._s(t.inductionYear))]):t._e()]):t._e(),t.title?i("h2",{staticClass:"rpl-card-nav__title"},[i("span",[t._v(t._s(t.trimmedTitle))])]):t._e(),t.summary?i("p",{staticClass:"rpl-card-nav__summary"},[t._v(t._s(t.trimmedSummary))]):t._e(),t.authors&&t.authors.length>0?i("p",{staticClass:"rpl-card-nav__author"},[i("strong",[t._v("Author:")]),t._v(" "+t._s(t.authors.join(", ")))]):t._e()])]):t._e()},x=[],k={name:"RplCardNav",mixins:[r["a"],f],components:{RplLink:s["e"],RplResponsiveImg:l["a"],RplIcon:o["c"]},props:{title:{type:String,default:""},image:{type:[Object,String],default:function(){return{}}},summary:{type:String,default:""},link:{type:Object,default:function(){return{}}},topic:{type:String,default:""},contentType:{type:String,default:""},showMeta:{type:Boolean,default:!1},dateStart:{type:String,default:""},dateEnd:{type:String,default:""},authors:{type:Array,default:function(){return[]}},displayStyle:{type:String,default:"noImage",validator:function(t){return["noImage","thumbnail","featured"].includes(t)}},isGrantOnGoing:{type:String,default:""},inductionYear:{type:String,default:""},fvRecommendationStatus:{type:String,default:""}},computed:{classModifiers:function(){return this.modifiers("rpl-card-nav")},trimmedSummary:function(){var t=300;return this.image&&Object.keys(this.image).length&&(t=200),this.summary?Object(c["i"])(this.summary,t):""}}},w=k,O=(i("7ca2"),Object(y["a"])(w,S,x,!1,null,null,null)),R=O.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("rpl-card-content",{staticClass:"rpl-card-image-navigation",attrs:{image:t.image,link:t.link,type:"inline",border:!1}},[i("div",{staticClass:"rpl-card-image-navigation__details"},[t.date||t.topic?i("div",{staticClass:"rpl-card-image-navigation__meta"},[t.date?i("div",{staticClass:"rpl-card-image-navigation__date"},[t._v(t._s(t.formatDate(t.date)))]):t._e(),i("div",{staticClass:"rpl-card-image-navigation__tag"},[t._v(t._s(t.topic))])]):t._e(),t.title?i("h2",{staticClass:"rpl-card-image-navigation__title"},[t._v(t._s(t.title))]):t._e(),t.summary?i("p",{staticClass:"rpl-card-image-navigation__summary"},[t._v(t._s(t.summary))]):t._e()])])},E=[],F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.link?i("rpl-link",{staticClass:"rpl-card-content",class:{"rpl-card-content--no-image":!t.image,"rpl-card-content--has-border":t.border&&!t.image,"rpl-card-content--center":t.center&&!t.image,"rpl-card-content--default":"default"===t.type,"rpl-card-content--simple":"simple"===t.type,"rpl-card-content--inline":"inline"===t.type,"rpl-card-content--has-link-text":t.link.text},attrs:{href:t.link.url,innerWrap:!1}},[t.computedImg?i("div",{staticClass:"rpl-card-content__image-wrapper"},[i("rpl-responsive-img",t._b({staticClass:"rpl-card-content__image",attrs:{alt:"",srcSet:[{size:"xs",height:534,width:764},{size:"s",height:200,width:764},{size:"m",height:232,width:448},{size:"l",height:232,width:333}]}},"rpl-responsive-img",t.computedImg,!1))],1):t._e(),i("div",{staticClass:"rpl-card-content__details"},[t._t("default"),t.link.text&&"inline"===t.type?i("div",{staticClass:"rpl-card-content__link"},[i("rpl-text-icon",{attrs:{text:t.link.text,symbol:t.iconSymbol,color:"primary",size:"0.7"}})],1):t._e()],2),t.link.text&&"inline"!==t.type?i("div",{staticClass:"rpl-card-content__link"},[i("rpl-text-icon",{attrs:{text:t.link.text,symbol:t.iconSymbol,color:"primary",size:"0.7"}})],1):t._e()]):t._e()},I=[],j=(i("9911"),{name:"RplCardContent",props:{link:{type:Object,required:!0},image:[String,Object],border:{type:Boolean,default:!0},center:{type:Boolean,default:!1},type:{type:String,default:"default"}},components:{RplLink:s["e"],RplTextIcon:o["b"],RplResponsiveImg:l["a"]},computed:{iconSymbol:function(){return Object(c["f"])(this.link.url,this.rplOptions.hostname)?"external_link":"arrow_right_primary"},computedImg:function(){return"string"===typeof this.image?{src:this.image}:this.image}},created:function(){if(!this.link||"undefined"===typeof this.link.url)throw new Error("Invalid link is provided to card component.")}}),M=j,H=(i("5633"),Object(y["a"])(M,F,I,!1,null,null,null)),L=H.exports,D={name:"RplCardImageNavigation",mixins:[r["a"]],components:{RplCardContent:L},props:{image:[String,Object],date:String,topic:String,title:String,summary:String,link:Object}},$=D,B=(i("22b0"),Object(y["a"])($,T,E,!1,null,null,null)),z=B.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("rpl-card-content",{staticClass:"rpl-card-navigation",attrs:{link:t.link,type:"simple",border:!1}},[t.title?i("h2",{staticClass:"rpl-card-navigation__title",class:{"rpl-card-navigation__title--with-summary":t.summary}},[t._v(t._s(t.title))]):t._e(),t.summary?i("p",{staticClass:"rpl-card-navigation__summary"},[t._v(t._s(t.summary))]):t._e()])},G=[],N=i("04de"),Y={name:"RplCardNavigation",mixins:[N["a"]],components:{RplCardContent:L},props:{title:String,summary:String,link:Object},mounted:function(){this.deprecatedWarn('"rpl-card-navigation" is deprecated, please import "rpl-card-nav" from @dpc-sdp/ripple-card-nav instead')}},W=Y,q=(i("c538"),Object(y["a"])(W,P,G,!1,null,null,null)),A=q.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.url?i("rpl-link",{staticClass:"rpl-card-navigation-featured",attrs:{href:t.url,innerWrap:!1}},[i("div",{staticClass:"rpl-card-navigation-featured__inner"},[i("rpl-responsive-img",t._b({staticClass:"rpl-card-navigation-featured__image",attrs:{alt:""}},"rpl-responsive-img",t.computedImg,!1)),t.title||t.date||t.topic?i("div",{staticClass:"rpl-card-navigation-featured__meta_and_title",class:{"rpl-card-navigation-featured__meta_and_title--image":t.image,"rpl-card-navigation-featured__meta_and_title--no-image":!t.image,"rpl-card-navigation-featured__meta_and_title--summary":t.summary}},[t.date||t.topic?i("div",{staticClass:"rpl-card-navigation-featured__meta"},[t.date?i("span",{staticClass:"rpl-card-navigation-featured__date"},[t._v(t._s(t.formatDate(t.date)))]):t._e(),t.topic?i("span",{staticClass:"rpl-card-navigation-featured__tag"},[t._v(t._s(t.topic))]):t._e()]):t._e(),t.title?i("h2",{staticClass:"rpl-card-navigation-featured__title"},[i("span",[t._v(t._s(t.title))])]):t._e()]):t._e()],1),t.summary?i("p",{staticClass:"rpl-card-navigation-featured__summary",class:{"rpl-card-navigation-featured__summary--image":t.image,"rpl-card-navigation-featured__summary--meta-no-image":!t.image&&(t.title||t.date||t.topic)}},[t._v(t._s(t.summary))]):t._e(),!t.image||t.summary?i("rpl-icon",{attrs:{symbol:"arrow_right_primary",color:"white"}}):t._e()],1):t._e()},K=[],U={name:"RplCardNavigationFeatured",mixins:[r["a"]],props:{title:String,summary:String,url:{type:String,required:!0},image:[Object,String],date:String,topic:String},components:{RplResponsiveImg:l["a"],RplLink:s["e"],RplIcon:o["c"]},created:function(){if(!this.url)throw new Error("Invalid url is provided to card navigation featured component.")},computed:{computedImg:function(){return"string"===typeof this.image?{src:this.image}:this.image}}},J=U,Q=(i("d139"),Object(y["a"])(J,V,K,!1,null,null,null)),X=Q.exports,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("rpl-card-content",{staticClass:"rpl-card-promotion",attrs:{image:t.computedImg,link:t.link}},[t.date||t.topic?i("div",{staticClass:"rpl-card-promotion__meta"},[t.date?i("div",{staticClass:"rpl-card-promotion__date"},[t._v(t._s(t.formatDate(t.date)))]):t._e(),i("div",{staticClass:"rpl-card-promotion__tag"},[t._v(t._s(t.topic))])]):t._e(),t.title?i("h2",{staticClass:"rpl-card-promotion__title"},[t._v(t._s(t.title))]):t._e(),t.summary?i("div",{staticClass:"rpl-card-promotion__trim-wrapper",style:{maxHeight:t.trimFieldMaxHeight}},[i("p",{staticClass:"rpl-card-promotion__summary"},[t._v(t._s(t.summary))])]):t._e()])},tt=[],et=i("74c3"),it=i("0342"),nt=i.n(it);const at={mixins:[et["a"]],props:{trimFieldEventBus:Object,trimFieldUpdateOnResize:{type:Boolean,default:!0}},data:function(){return{trimFieldMaxHeight:"none",trimFieldSelector:"",trimFieldRefreshOnFonts:!1}},methods:{getTrimFieldMaxHeightOffset:function(t){return t.clientHeight},setTrimFieldMaxHeight:function(){if("undefined"!==typeof window&&this.$el&&this.$el.querySelector&&this.$breakpoint.m){const t=this.$el,e=t.querySelector(this.trimFieldSelector);if(e){const i=parseFloat(window.getComputedStyle(e,null).getPropertyValue("line-height"));let n=this.getTrimFieldMaxHeightOffset(t)-e.offsetTop;n=i*Math.floor(n/i),this.trimFieldMaxHeight=e.clientHeight>n?n+"px":"none"}else this.trimFieldMaxHeight="none"}else this.trimFieldMaxHeight="none"}},mounted(){if(this.trimFieldRefreshOnFonts){let t=["VIC-Bold"];this.rplOptions.card&&this.rplOptions.card.trimFieldfonts&&(t=this.rplOptions.card.trimFieldfonts),t.forEach(t=>{const e=new nt.a(t);e.load().then(this.setTrimFieldMaxHeight)})}this.trimFieldEventBus&&this.trimFieldEventBus.$on("setTrimFieldMaxHeight",this.setTrimFieldMaxHeight),this.trimFieldUpdateOnResize&&this.$nextTick(()=>{"undefined"!==typeof window&&(this.setTrimFieldMaxHeight(),window.addEventListener("resize",this.setTrimFieldMaxHeight,{passive:!0}))})},destroyed(){this.trimFieldEventBus&&this.trimFieldEventBus.$off("setTrimFieldMaxHeight",this.setTrimFieldMaxHeight),this.trimFieldUpdateOnResize&&"undefined"!==typeof window&&window.removeEventListener("resize",this.setTrimFieldMaxHeight)}};var rt=at,st={name:"RplCardPromotion",mixins:[r["a"],rt,N["a"]],props:{image:[String,Object],date:String,topic:String,title:String,summary:String,link:Object,locale:{default:"en-au",type:String}},components:{RplCardContent:L},data:function(){return{trimFieldSelector:".rpl-card-promotion__summary",trimFieldRefreshOnFonts:!0}},mounted:function(){this.deprecatedWarn('"rpl-card-promotion" is deprecated, please import "rpl-card-promo" from @dpc-sdp/ripple-card-promo instead')},methods:{getTrimFieldMaxHeightOffset:function(t){var e=this.$el.querySelector(".rpl-card-content__link");return e?t.clientHeight-e.clientHeight:t.clientHeight}},computed:{computedImg:function(){return"string"===typeof this.image?{src:this.image}:this.image}}},lt=st,ot=(i("d2a8"),Object(y["a"])(lt,Z,tt,!1,null,null,null)),ct=ot.exports,dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("rpl-card-content",{staticClass:"rpl-card-keydates",attrs:{link:t.link}},[t.title?i("h2",{staticClass:"rpl-card-keydates__title"},[t._v(t._s(t.title))]):t._e(),t._l(t.keydatesTrimmed,(function(e,n){return i("div",{key:n,staticClass:"rpl-card-keydates__keydate"},[i("div",{staticClass:"rpl-card-keydates__keydate-date"},[i("rpl-icon",{attrs:{symbol:"calendar",color:"white"}}),i("span",[t._v(t._s(e.date))])],1),i("h3",{staticClass:"rpl-card-keydates__keydate-title"},[t._v(t._s(e.title))]),i("p",{staticClass:"rpl-card-keydates__keydate-description"},[t._v(t._s(e.description))])])}))],2)},pt=[],ut=(i("d81d"),i("a4d3"),i("e01a"),{name:"RplCardKeydates",mixins:[r["a"]],props:{title:String,keydates:Array,link:Object},components:{RplCardContent:L,RplIcon:o["c"]},computed:{keydatesTrimmed:function(){var t=this.keydates,e=80,i=40,n=120,a=80,r=function(t,n){return t.length>a&&n.length>i?Object(c["i"])(n,i):Object(c["i"])(n,e)};return this.keydates.length>1&&(t=this.keydates.map((function(t){return{date:t.date,title:r(t.description,t.title),description:Object(c["i"])(t.description,n)}}))),t}}}),mt=ut,_t=(i("86ad"),Object(y["a"])(mt,dt,pt,!1,null,null,null)),ht=_t.exports,ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("rpl-card-content",{staticClass:"rpl-card-event",attrs:{image:t.image,link:t.link}},[t.date?i("div",{staticClass:"rpl-card-event__meta"},[i("div",{staticClass:"rpl-card-event__date"},[t._v(t._s(t.date))])]):t._e(),t.title?i("h2",{staticClass:"rpl-card-event__title"},[t._v(t._s(t.title))]):t._e(),t.summary?i("div",{staticClass:"rpl-card-event__trim-wrapper",style:{maxHeight:t.trimFieldMaxHeight}},[i("p",{staticClass:"rpl-card-event__summary"},[t._v(t._s(t.summary))])]):t._e(),t.location?i("p",{staticClass:"rpl-card-event__location"},[i("rpl-icon",{attrs:{symbol:"map_marker",size:"0.75",color:"secondary"}}),t._v(t._s(t.location))],1):t._e()])},gt=[],vt={name:"RplCardEvent",mixins:[r["a"],rt],props:{image:[String,Object],dateStart:String,dateEnd:String,location:String,title:String,summary:String,link:Object,locale:{default:"en-au",type:String},rangeDivider:{default:" to ",type:String}},components:{RplIcon:o["c"],RplCardContent:L},data:function(){return{trimFieldSelector:".rpl-card-event__summary",trimFieldRefreshOnFonts:!0}},methods:{getTrimFieldMaxHeightOffset:function(t){var e=this.$el.querySelector(".rpl-card-content__link"),i=this.$el.querySelector(".rpl-card-event__location"),n=e?t.clientHeight-e.clientHeight:t.clientHeight;return i?n-i.clientHeight:n}},computed:{date:function(){return this.dateStart||this.dateEnd?this.dateStart&&!this.dateEnd?this.formatDate(this.dateStart):this.dateStart&&this.dateEnd?this.formatDateRange(this.dateStart,this.dateEnd):void 0:null}}},yt=vt,Ct=(i("2dab"),Object(y["a"])(yt,ft,gt,!1,null,null,null)),bt=Ct.exports,St=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("rpl-card-content",{staticClass:"rpl-card-cta",attrs:{border:!1,link:t.linkOnly}},[i("rpl-responsive-img",t._b({staticClass:"rpl-card-cta__image",attrs:{alt:""}},"rpl-responsive-img",t.computedImg,!1)),t.title?i("h2",{staticClass:"rpl-card-cta__title"},[t._v(t._s(t.title))]):t._e(),t.summary?i("div",{staticClass:"rpl-card-cta__trim-wrapper",style:{maxHeight:t.trimFieldMaxHeight}},[t.summary?i("div",{staticClass:"rpl-card-cta__summary",domProps:{innerHTML:t._s(t.summary)}}):t._e()]):t._e(),t.link.text?i("span",{staticClass:"rpl-card-cta__button"},[t._v(t._s(t.link.text))]):t._e()],1)},xt=[],kt={name:"RplCardCta",mixins:[rt],props:{image:[String,Object],title:String,summary:String,link:Object},components:{RplResponsiveImg:l["a"],RplCardContent:L},data:function(){return{linkOnly:{text:null,url:this.link.url},trimFieldSelector:".rpl-card-cta__summary",trimFieldRefreshOnFonts:!0}},methods:{getTrimFieldMaxHeightOffset:function(t){var e=this.$el.querySelector(".rpl-card-cta__button"),i=e?t.clientHeight-e.clientHeight:t.clientHeight;return e?i-e.clientHeight:i}},computed:{computedImg:function(){return"string"===typeof this.image?{src:this.image}:this.image}}},wt=kt,Ot=(i("1415"),Object(y["a"])(wt,St,xt,!1,null,null,null)),Rt=Ot.exports,Tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rpl-card-emergency"},[i("div",{staticClass:"rpl-card-emergency__content"},[t.subtitle?i("div",{staticClass:"rpl-card-emergency__subtitle"},[i("span",[t._v(t._s(t.subtitle))])]):t._e(),t.title?i("h2",{staticClass:"rpl-card-emergency__title"},[t._v(t._s(t.title))]):t._e(),t.summary?i("p",{staticClass:"rpl-card-emergency__summary"},[t._v(t._s(t.summary))]):t._e()]),t.link?i("div",{staticClass:"rpl-card-emergency__cta"},[i("span",{staticClass:"rpl-card-emergency__separator"}),t.link?i("rpl-link",{staticClass:"rpl-card-emergency__cta-link",attrs:{href:t.filterLink,innerWrap:!1}},[i("rpl-icon",{attrs:{symbol:t.iconSymbol,color:"primary",size:"1.05"}}),t.link.text?i("span",{staticClass:"rpl-card-emergency__cta-link-text"},[t._v(" "+t._s(t.link.text)+" ")]):t._e()],1):t._e()],1):t._e()])},Et=[],Ft=(i("ac1f"),i("5319"),{name:"RplCardEmergencyContact",props:{title:String,subtitle:String,summary:String,link:Object},components:{RplLink:s["e"],RplIcon:o["a"],RplTextIcon:o["b"]},computed:{iconSymbol:function(){return this.link.url.indexOf("tel:")>-1?"phone_number":Object(c["f"])(this.link.url,this.rplOptions.hostname)?"external_link":"arrow_right_primary"},filterLink:function(){return this.link.url.indexOf("tel:+")>-1?this.link.url.replace("tel:+","tel:"):this.link.url}}}),It=Ft,jt=(i("a5bc"),Object(y["a"])(It,Tt,Et,!1,null,null,null)),Mt=jt.exports,Ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rpl-card-box",class:t.childErrorClass},[t.gotChildError?i("rpl-dev-error",{attrs:{errors:t.childErrors}}):t._e(),i("div",{staticClass:"rpl-card-box__items"},t._l(t.cards,(function(e,n){return i("div",{key:n,staticClass:"rpl-card-box__item"},[i(e.name,t._b({tag:"component"},"component",e.data,!1))],1)})),0)],1)},Lt=[],Dt=i("2243"),$t=i("1872"),Bt={name:"RplCardBox",components:{RplCardEmergencyContact:Mt,RplDevError:$t["a"]},props:{cards:Array,catchChildError:{type:Boolean,default:!0}},mixins:[Dt["a"]]},zt=Bt,Pt=(i("6165"),Object(y["a"])(zt,Ht,Lt,!1,null,null,null)),Gt=Pt.exports,Nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("rpl-card-content",{staticClass:"rpl-card-honour-roll",attrs:{link:t.link,border:!1,center:!t.image}},[i("div",{staticClass:"rpl-card-honour-roll__inner"},[t.image?i("img",{ref:"image",staticClass:"rpl-card-honour-roll__image",attrs:{src:t.image,alt:""}}):t._e(),t.name?i("h2",{staticClass:"rpl-card-honour-roll__name",class:{"rpl-card-honour-roll__name--no-margin":t.lifespan}},[t._v(t._s(t.name))]):t._e(),t.lifespan?i("p",{staticClass:"rpl-card-honour-roll__lifespan"},[t._v("("+t._s(t.lifespan)+")")]):t._e(),i("p",{staticClass:"rpl-card-honour-roll__induction"},[t.inductionYear?i("span",[t._v(t._s(t.inductionYear))]):t._e(),t.inductionYear&&t.category?i("span",{staticClass:"rpl-card-honour-roll__separator"},[t._v("|")]):t._e(),t.category?i("span",[t._v(t._s(t.category))]):t._e()]),t.summary?i("div",{staticClass:"rpl-card-honour-roll__summary",domProps:{innerHTML:t._s(t.summary)}}):t._e()])])},Yt=[],Wt=i("0b7d"),qt=i.n(Wt),At={name:"RplCardHonourRoll",mixins:[N["a"]],props:{name:String,inductionYear:String,category:String,lifespan:String,summary:String,link:Object,image:[String,Object]},components:{RplCardContent:L},mounted:function(){this.image&&qt()(this.$refs["image"]),this.deprecatedWarn('"rpl-card-honour-roll" is depricated, please use "rpl-card-profile" instead.')}},Vt=At,Kt=(i("1885"),Object(y["a"])(Vt,Nt,Yt,!1,null,null,null)),Ut=Kt.exports,Jt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("rpl-card-content",{staticClass:"rpl-card-profile",attrs:{link:t.link,border:!1,center:!t.image}},[i("div",{staticClass:"rpl-card-profile__inner"},[t.image?i("img",{ref:"image",staticClass:"rpl-card-profile__image",attrs:{src:t.image,alt:""}}):t._e(),t.name?i("h2",{staticClass:"rpl-card-profile__name",class:{"rpl-card-profile__name--no-margin":t.lifespan}},[t._v(t._s(t.name))]):t._e(),t.lifespan?i("p",{staticClass:"rpl-card-profile__lifespan"},[t._v("("+t._s(t.lifespan)+")")]):t._e(),t.inductionYear?i("p",{staticClass:"rpl-card-profile__induction"},[t.inductionPrefix?i("span",[t._v(t._s(t.inductionPrefix))]):t._e(),i("span",[t._v(t._s(t.inductionYear))])]):t._e(),t.summary?i("div",{staticClass:"rpl-card-profile__summary",domProps:{innerHTML:t._s(t.summary)}}):t._e()])])},Qt=[],Xt={name:"RplCardProfile",props:{name:String,inductionYear:String,inductionPrefix:{type:String,default:"Inducted"},lifespan:String,summary:String,link:Object,image:[String,Object]},components:{RplCardContent:L},mounted:function(){this.image&&qt()(this.$refs["image"])}},Zt=Xt,te=(i("7926"),Object(y["a"])(Zt,Jt,Qt,!1,null,null,null)),ee=te.exports,ie=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rpl-card-carousel",class:t.childErrorClass},[t.gotChildError?i("rpl-dev-error",{attrs:{errors:t.childErrors}}):t._e(),t.title?i("h2",{staticClass:"rpl-card-carousel__title"},[t._v(t._s(t.title))]):t._e(),i("div",{staticClass:"rpl-card-carousel__slider"},[t.showCarousel?i("carousel",{attrs:{perPage:t.slidesPerPage,navigateTo:t.navTo,mouseDrag:!1,paginationEnabled:!1}},t._l(t.cards,(function(e,n){return i("slide",{key:n,staticClass:"rpl-card-carousel__slide"},[i("div",{staticClass:"rpl-card-carousel__slide-wrap"},[i(e.name,t._b({tag:"component",attrs:{trimFieldEventBus:t.isTrimmed(e.name)?t.eventBus:null,trimFieldUpdateOnResize:!1,"data-tid":"carousel-card"}},"component",e.data,!1))],1)])})),1):t._e(),i("div",{staticClass:"rpl-card-carousel__navigation"},[i("button",{staticClass:"rpl-card-carousel__navigation-button rpl-card-carousel__navigation-button--prev",attrs:{role:"button",disabled:t.prevDisabled,"aria-label":t.previousLabel},on:{click:t.prevSlide}},[i("rpl-icon",{attrs:{symbol:t.prevIcon,color:t.iconColor(t.prevDisabled),size:"1.6"}})],1),i("button",{staticClass:"rpl-card-carousel__navigation-button rpl-card-carousel__navigation-button--next",attrs:{role:"button",disabled:t.nextDisabled,"aria-label":t.nextLabel},on:{click:t.nextSlide}},[i("rpl-icon",{attrs:{symbol:t.nextIcon,color:t.iconColor(t.nextDisabled),size:"1.6"}})],1)])],1)],1)},ne=[],ae=(i("a9e3"),i("d3b7"),i("3ca3"),i("ddb0"),i("2b0e")),re=i("8b92"),se={name:"RplCardCarousel",mixins:[et["a"],re["a"],Dt["a"]],props:{title:String,cards:Array,previousLabel:{type:String,default:"Go to previous slide"},nextLabel:{type:String,default:"Go to next slide"},childColsBp:{type:Object,default:function(){return{l:4,m:6}}},totalGridColumns:{type:Number,default:12},catchChildError:{type:Boolean,default:!0}},components:{RplIcon:o["c"],RplCardPromo:b,RplCardPromotion:ct,RplCardEvent:bt,RplCardKeydates:ht,RplDevError:$t["a"],Carousel:function(){return i.e("chunk-2d0ae5a4").then(i.t.bind(null,"0a63",7)).then((function(t){return t.Carousel}))},Slide:function(){return i.e("chunk-2d0ae5a4").then(i.t.bind(null,"0a63",7)).then((function(t){return t.Slide}))}},data:function(){return{navTo:0,eventBus:new ae["default"],observer:null,lastCarouselInnerFlexBasis:null,showCarousel:!1,trimmedCards:["rpl-card-event","rpl-card-promotion"]}},methods:{nextSlide:function(){this.navTo=this.navTo<this.totalSlides?this.navTo+1:this.totalSlides},prevSlide:function(){this.navTo=this.navTo>0?this.navTo-1:0},iconColor:function(t){return t?"mid_neutral_1":"primary"},updateTrimFields:function(t){if(t&&t.length>=1){var e=t[0].target.style.flexBasis;e!==this.lastCarouselInnerFlexBasis&&(this.eventBus.$emit("setTrimFieldMaxHeight"),this.lastCarouselInnerFlexBasis=e)}},isTrimmed:function(t){return this.trimmedCards.indexOf(t)>=0}},computed:{slidesPerPage:function(){if(this.childColsBp&&this.totalGridColumns)for(var t=this.breakpointsSmallToLarge.length-1;t>=0;t--){var e=this.breakpointsSmallToLarge[t].label;if(this.childColsBp[e]&&this.$breakpoint[e])return this.totalGridColumns/this.childColsBp[e]}return 1},totalSlides:function(){return Math.ceil(this.cards.length/this.slidesPerPage)-1},prevDisabled:function(){return 0===this.navTo},nextDisabled:function(){return this.navTo===this.totalSlides},prevIcon:function(){return this.$breakpoint.l?"arrow_left_secondary":"left"},nextIcon:function(){return this.$breakpoint.l?"arrow_right_secondary":"right"}},mounted:function(){if(this.showCarousel=!0,"undefined"!==typeof MutationObserver){this.observer=new MutationObserver(this.updateTrimFields);var t=this.$el.querySelector(".VueCarousel-inner");t&&this.observer.observe(this.$el.querySelector(".VueCarousel-inner"),{attributes:!0})}},destroyed:function(){"undefined"!==typeof MutationObserver&&this.observer.disconnect()}},le=se,oe=(i("d46d"),Object(y["a"])(le,ie,ne,!1,null,null,null)),ce=oe.exports;e["default"]=A},"0f7d":function(t,e,i){},1415:function(t,e,i){"use strict";var n=i("a789"),a=i.n(n);a.a},1885:function(t,e,i){"use strict";var n=i("64e6"),a=i.n(n);a.a},"1a1a":function(t,e,i){},"22b0":function(t,e,i){"use strict";var n=i("4435"),a=i.n(n);a.a},"2b13":function(t,e,i){},"2dab":function(t,e,i){"use strict";var n=i("2b13"),a=i.n(n);a.a},4435:function(t,e,i){},5143:function(t,e,i){},5633:function(t,e,i){"use strict";var n=i("9a0e"),a=i.n(n);a.a},5722:function(t,e,i){},6165:function(t,e,i){"use strict";var n=i("1a1a"),a=i.n(n);a.a},"64e6":function(t,e,i){},"6b89":function(t,e,i){},"75ef":function(t,e,i){},7926:function(t,e,i){"use strict";var n=i("6b89"),a=i.n(n);a.a},"7ca2":function(t,e,i){"use strict";var n=i("a865"),a=i.n(n);a.a},"857a":function(t,e,i){var n=i("1d80"),a=/"/g;t.exports=function(t,e,i,r){var s=String(n(t)),l="<"+e;return""!==i&&(l+=" "+i+'="'+String(r).replace(a,"&quot;")+'"'),l+">"+s+"</"+e+">"}},"86ad":function(t,e,i){"use strict";var n=i("75ef"),a=i.n(n);a.a},9911:function(t,e,i){"use strict";var n=i("23e7"),a=i("857a"),r=i("af03");n({target:"String",proto:!0,forced:r("link")},{link:function(t){return a(this,"a","href",t)}})},"9a0e":function(t,e,i){},a40c:function(t,e,i){},a5bc:function(t,e,i){"use strict";var n=i("a40c"),a=i.n(n);a.a},a789:function(t,e,i){},a865:function(t,e,i){},af03:function(t,e,i){var n=i("d039");t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},c538:function(t,e,i){"use strict";var n=i("04e7"),a=i.n(n);a.a},d139:function(t,e,i){"use strict";var n=i("eeb4"),a=i.n(n);a.a},d2a8:function(t,e,i){"use strict";var n=i("5143"),a=i.n(n);a.a},d46d:function(t,e,i){"use strict";var n=i("0f7d"),a=i.n(n);a.a},eeb4:function(t,e,i){}}]);