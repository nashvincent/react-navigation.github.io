(window.webpackJsonp=window.webpackJsonp||[]).push([[320,350],{473:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=(t(23),t(17),t(18),t(50),t(547),t(477)),o=t(481),c=t(58),l=t(485),s=t(1),u=t(478),d=t.n(u),m=t(491),f=t(514),p=t(482),h=t(510),v=t(445),b=t.n(v);function g(e){var a=e.item,t=e.onItemClick,i=e.collapsible,o=a.items,c=a.href,l=a.label,u=a.type,m=Object(n.useState)(a.collapsed),f=m[0],v=m[1],b=Object(n.useState)(null),E=b[0],k=b[1];a.collapsed!==E&&(k(a.collapsed),v(a.collapsed));var w=Object(n.useCallback)((function(e){e.preventDefault(),v((function(e){return!e}))}));switch(u){case"category":return o.length>0&&r.a.createElement("li",{className:d()("menu__list-item",{"menu__list-item--collapsed":f}),key:l},r.a.createElement("a",{className:d()("menu__link",{"menu__link--sublist":i,"menu__link--active":i&&!a.collapsed}),href:"#!",onClick:i?w:void 0},l),r.a.createElement("ul",{className:"menu__list"},o.map((function(e){return r.a.createElement(g,{key:e.label,item:e,onItemClick:t,collapsible:i})}))));case"link":default:return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(p.a,Object(s.a)({className:"menu__link",to:c},Object(h.a)(c)?{activeClassName:"menu__link--active",exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"}),l))}}var E=function(e){var a=Object(n.useState)(!1),t=a[0],i=a[1],c=Object(o.a)().siteConfig,l=(c=void 0===c?{}:c).themeConfig.navbar,s=(l=void 0===l?{}:l).title,u=l.logo,p=void 0===u?{}:u,h=Object(m.a)(p.src),v=e.docsSidebars,E=e.path,k=e.sidebar,w=e.sidebarCollapsible;if(Object(f.a)(t),!k)return null;var x=v[k];if(!x)throw new Error('Cannot find the sidebar "'+k+'" in the sidebar config!');return w&&x.forEach((function(e){return function e(a,t){var n=a.items,r=a.href;switch(a.type){case"category":var i=n.map((function(a){return e(a,t)})).filter((function(e){return e})).length>0;return a.collapsed=!i,i;case"link":default:return r===t}}(e,E)})),r.a.createElement("div",{className:b.a.sidebar},r.a.createElement("div",{className:b.a.sidebarLogo},null!=p&&r.a.createElement("img",{src:h,alt:p.alt}),null!=s&&r.a.createElement("strong",null,s)),r.a.createElement("div",{className:d()("menu","menu--responsive",b.a.menu,{"menu--show":t})},r.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){i(!t)}},t?r.a.createElement("span",{className:d()(b.a.sidebarMenuIcon,b.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{className:b.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},x.map((function(e){return r.a.createElement(g,{key:e.label,item:e,onItemClick:function(){i(!1)},collapsible:w})})))))},k=t(501),w=t(505),x=t(513),_=t(446),C=t.n(_);var N=function(e){var a=e.route,t=e.docsMetadata,n=e.location,s=a.routes.find((function(e){return Object(x.a)(n.pathname,e)}))||{},u=t.permalinkToSidebar,d=t.docsSidebars,m=t.version,f=u[s.path],p=Object(o.a)(),h=p.siteConfig,v=(h=void 0===h?{}:h).themeConfig,b=void 0===v?{}:v,g=p.isClient,_=b.sidebarCollapsible,N=void 0===_||_;return 0===Object.keys(s).length?r.a.createElement(w.default,e):r.a.createElement(l.a,{version:m,key:g},r.a.createElement("div",{className:C.a.docPage},f&&r.a.createElement("div",{className:C.a.docSidebarContainer},r.a.createElement(E,{docsSidebars:d,path:s.path,sidebar:f,sidebarCollapsible:N})),r.a.createElement("main",{className:C.a.docMainContainer},r.a.createElement(i.a,{components:k.a},Object(c.a)(a.routes)))))},y=(t(69),t(483),t(484),t(515),{4:["@react-native-community/masked-view@^0.1.7","react-navigation@^4.3.3","react-navigation-tabs@^2.8.7","react-navigation-stack@^2.3.6","react-navigation-drawer@^2.4.7","react-native-reanimated@^1.7.0","react-native-safe-area-context@^0.7.3","react-native-screens@^2.4.0"],5:["@react-native-community/masked-view@^0.1.7","@react-navigation/bottom-tabs@^5.4.2","@react-navigation/drawer@^5.7.2","@react-navigation/material-bottom-tabs@^5.2.2","@react-navigation/material-top-tabs@^5.2.2","@react-navigation/native@^5.3.0","@react-navigation/stack@^5.3.2","react-native-paper@^3.10.1","react-native-reanimated@^1.7.0","react-native-safe-area-context@^0.7.3","react-native-screens@^2.4.0","react-native-tab-view@^2.14.0"],next:[]});function S(e){var a=function(){if(window.__reactNavigationVersion)return window.__reactNavigationVersion}(),t=e.label||document.title,n=e.code,r=e.templateId,i="next"===a?"next":a.match(/(\d+)\./)[1],o="https://snack.expo.io?platform=android&name="+encodeURIComponent(t)+"&dependencies="+encodeURIComponent(y[i].join(","));if(r){var c=document.location.origin+"/examples/"+a+"/"+r+".js";return o+"&sourceUrl="+encodeURIComponent(c)}return o+"&code="+encodeURIComponent(n)}var O,j='<svg width="14px" height="14px" viewBox="0 0 16 16" style="vertical-align: -1px"><g stroke="none" stroke-width="1" fill="none"><polyline stroke="currentColor" points="8.5 0.5 15.5 0.5 15.5 7.5"></polyline><path d="M8,8 L15.0710678,0.928932188" stroke="currentColor"></path><polyline stroke="currentColor" points="9.06944444 3.5 1.5 3.5 1.5 14.5 12.5 14.5 12.5 6.93055556"></polyline></g></svg>';function I(){var e=document.querySelectorAll("samp");e.length&&e.forEach((function(e){var a=function(e){var a=e.nextElementSibling;for(a||"P"!==e.parentElement.tagName||(a=e.parentElement.nextElementSibling);a;){if("DIV"===a.tagName&&a.className.includes("mdxCodeBlock"))return a;a=a.nextElementSibling}}(e);if(a){var t=a.innerText,n=e.innerText,r=e.getAttribute("id"),i=document.createElement("a");i.className="snack-sample-link",i.dataset.snack=!0,i.target="_blank",i.innerHTML=n?'Try the "'+n+'" example on Snack '+j:"Try this example on Snack "+j;var o=S({code:t,templateId:r,label:n});i.href!==o&&(i.href=o,a.insertAdjacentElement("afterend",i),e.remove())}else console.log("Code block not found for <samp> element "+e.innerText)}))}function M(){document.querySelectorAll('a[href*="#example/"]').forEach((function(e){var a=e.href.split("#example/"),t=a[a.length-1];e.href=S({templateId:t}),e.target="_blank"}))}a.default=function(e){return r.a.useEffect((function(){window.__reactNavigationVersion=e.docsMetadata.version})),r.a.useEffect((function(){return I(),M(),(O=new MutationObserver((function(e){e.forEach(I),e.forEach(M)}))).observe(document.documentElement,{childList:!0,subtree:!0}),function(){O&&O.disconnect(),O=null}}),[]),r.a.createElement(N,e)}},486:function(e,a,t){"use strict";t(48),t(23),t(17),t(18),t(67),t(483),t(484),t(487);var n=t(0),r=t.n(n),i=t(478),o=t.n(i),c=t(481),l=(t(121),["1.x","2.x","3.x","4.x"]);a.a=function(e){var a=Object(n.useState)(!1),i=a[0],s=a[1],u=Object(n.useRef)(null),d=Object(c.a)().siteConfig,m=(void 0===d?{}:d).themeConfig.algolia;function f(e){var a,t,n=(a=window.location.href,(t=l.findIndex((function(e){return a.includes(e)})))>=0?l[t]:"5.x");m.algoliaOptions.facetFilters=["version:"+n],window.docsearch({appId:m.appId,apiKey:m.apiKey,indexName:m.indexName,inputSelector:"#search_input_react",algoliaOptions:m.algoliaOptions,handleSelected:function(e,a,t){var n=document.createElement("a");n.href=t.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;window.open(r,"_self")}}),e&&u.current.focus()}var p=function(e){void 0===e&&(e=!0),i||Promise.all([t.e(349).then(t.t.bind(null,488,7)),t.e(243).then(t.t.bind(null,490,7))]).then((function(a){var t=a[0].default;s(!0),window.docsearch=t,f(e)}))},h=Object(n.useCallback)((function(){p(),i&&u.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),v=Object(n.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),b=Object(n.useCallback)((function(e){var a="mouseover"!==e.type;p(a)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:b,onFocus:b,onBlur:v,ref:u}))}},505:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(485);a.default=function(){return r.a.createElement(i.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},547:function(e,a,t){"use strict";var n=t(19),r=t(511)(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),n(n.P+n.F*i,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),t(70)("find")}}]);