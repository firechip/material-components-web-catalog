"use strict";var precacheConfig=[["/material-components-web-catalog/index.html","ef01987f8e55d1caeff6de5cbf4488da"],["/material-components-web-catalog/static/css/main.e81e0c31.css","19a00c74a87f814140678197a59aa93e"],["/material-components-web-catalog/static/js/main.79726256.js","9452f5d20f41729bffe95eef21d9fbd7"],["/material-components-web-catalog/static/media/buttons_180px.svg","95624a6f1acac0d1365baa0905e1b03a"],["/material-components-web-catalog/static/media/cards_180px.svg","8f61423f4e8ffd067b2df9bafb4638c5"],["/material-components-web-catalog/static/media/checkbox_180px.svg","d22379181a05118774fb71788c1cff4e"],["/material-components-web-catalog/static/media/chips_180px.svg","44268b6fbe011679fac8d862ca1a979f"],["/material-components-web-catalog/static/media/dialog_180px.svg","aa2c5f0d739c2177ddc42aa896fb302b"],["/material-components-web-catalog/static/media/drawer_180px.svg","6f059aeab1e73f2ea4a66921c3ae78aa"],["/material-components-web-catalog/static/media/elevation_180px.svg","a1b3b7bcd693e1430083dc831540ab96"],["/material-components-web-catalog/static/media/floating_action_button_180px.svg","505f2d7b499a5e792a6a6c93bb513c69"],["/material-components-web-catalog/static/media/fonts_180px.svg","0f12fa60489a1c5e70b9ec8df093adc7"],["/material-components-web-catalog/static/media/form_field_180px.svg","6a0e24740da32da179a2f52caff4cd8f"],["/material-components-web-catalog/static/media/ic_code_24px.svg","1c9bd072250dd75b7860ebb9f19cf3c6"],["/material-components-web-catalog/static/media/ic_component_24px_white.svg","534deff10ccf5b63d4b59750307aae61"],["/material-components-web-catalog/static/media/ic_drive_document_24px.svg","7a5d8bf28a88fd878ad2e28a4e64051d"],["/material-components-web-catalog/static/media/ic_material_design_24px.svg","38bac37501a9b62226be948c5c7b1f4a"],["/material-components-web-catalog/static/media/ic_switch_24px.svg","4bd1f21c8fbf821acab5e8fc26d5bf1e"],["/material-components-web-catalog/static/media/icon_toggle_180px.svg","04402d3e215496e2cfbab6a8169454fa"],["/material-components-web-catalog/static/media/image_list_180px.svg","d3570636e5703978322ce6f603d0191e"],["/material-components-web-catalog/static/media/linear_progress_180px.svg","b3c7543548bcc1a778e91cd2e040d665"],["/material-components-web-catalog/static/media/list_180px.svg","1bd5750792b399b8defd4fd92abcb13b"],["/material-components-web-catalog/static/media/mdc_web_48dp.png","2895887d0300686b6e3e17f2dc3939f5"],["/material-components-web-catalog/static/media/menu_180px.svg","a1ecdc7a3ebc4b8d3b407900b6a397cb"],["/material-components-web-catalog/static/media/photos/2x3/1.jpg","401cfb9124db2fa64178b376760bcd10"],["/material-components-web-catalog/static/media/photos/2x3/2.jpg","335b37b6326c960b6d5c8d4c3de18c2c"],["/material-components-web-catalog/static/media/photos/2x3/3.jpg","a0d26559bd897d33fac545a2357b3955"],["/material-components-web-catalog/static/media/photos/2x3/4.jpg","4407fab106eb222fef5e52dfed29d25e"],["/material-components-web-catalog/static/media/photos/2x3/5.jpg","8c17836ab73458977bac8d9ca81b34e0"],["/material-components-web-catalog/static/media/photos/2x3/6.jpg","731892dc7b5cc2c2ab6f9b94fd2200b2"],["/material-components-web-catalog/static/media/photos/2x3/7.jpg","5ce039991797244d835666584cb3b21b"],["/material-components-web-catalog/static/media/photos/2x3/8.jpg","7936c3ebf6d57495b8277a1bf97b3dff"],["/material-components-web-catalog/static/media/photos/3x2/1.jpg","b9cb6c92e0ecf66be30fe960fd9a9410"],["/material-components-web-catalog/static/media/photos/3x2/10.jpg","e187ff4f16efaaf2d479046031db89dc"],["/material-components-web-catalog/static/media/photos/3x2/11.jpg","262278888e40784a5fe5231303769c4a"],["/material-components-web-catalog/static/media/photos/3x2/12.jpg","643ba58fe14160bf1f4dc174175407ff"],["/material-components-web-catalog/static/media/photos/3x2/13.jpg","1c9e854b2281f805cdd20b0608924e78"],["/material-components-web-catalog/static/media/photos/3x2/14.jpg","e3eda8aabdcd48044737dbb1b7db0109"],["/material-components-web-catalog/static/media/photos/3x2/15.jpg","0b10440c1a721e91d0763f8cf33e6e9c"],["/material-components-web-catalog/static/media/photos/3x2/16.jpg","e62a6bf01f72113754ac7ee1e12349f0"],["/material-components-web-catalog/static/media/photos/3x2/2.jpg","a97ba23d8eabcb22d6e2d9498e4e037e"],["/material-components-web-catalog/static/media/photos/3x2/3.jpg","bb6227e88eb5bd1193d2d33f1db4a58f"],["/material-components-web-catalog/static/media/photos/3x2/4.jpg","2c12a72a3de4c5605d13f333ac0fa249"],["/material-components-web-catalog/static/media/photos/3x2/5.jpg","901a592d3f11277f2ce1d11e03efd971"],["/material-components-web-catalog/static/media/photos/3x2/6.jpg","9b9cf768e97a61f88daeb754898f76ba"],["/material-components-web-catalog/static/media/photos/3x2/7.jpg","ab8e99498b4a593a1e2c7028188cffef"],["/material-components-web-catalog/static/media/photos/3x2/8.jpg","256a4cd1f5dedf772d86748b735cd77c"],["/material-components-web-catalog/static/media/photos/3x2/9.jpg","90fa9f93911b2f98ca5435f52e47f923"],["/material-components-web-catalog/static/media/radio_180px.svg","32b554f93af6428b5ace13ddc1075306"],["/material-components-web-catalog/static/media/ripple_180px.svg","56965d59320fffedcb779263612273e9"],["/material-components-web-catalog/static/media/slider_180px.svg","64980529a81fae30d3dd18c5e228e3ce"],["/material-components-web-catalog/static/media/switch_180px.svg","f5f49084cbd100999a75e03a1296accf"],["/material-components-web-catalog/static/media/top_app_bar_180px.svg","80849d4aa7cc33b59bdb7774fa2df0c8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var o=new URL(e);return c&&o.pathname.match(c)||(o.search+=(o.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),o.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),o=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var o="/material-components-web-catalog/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(o,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});