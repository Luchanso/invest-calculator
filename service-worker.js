"use strict";function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}var precacheConfig=[["/invest-calculator/index.html","799ad3ebd239264554ba4f44eb25d12a"],["/invest-calculator/static/css/main.edddcad4.css","58aa4e46a3b27b7b9cccb5f57ded876b"],["/invest-calculator/static/js/main.78740a85.js","1607c722bfd21b09203073d319675492"],["/invest-calculator/static/media/icon_action-check-indeterminate_m_black.f6d62712.svg","f6d62712eafb105bd5869e848d6e94af"],["/invest-calculator/static/media/icon_action-check-indeterminate_m_white.ae564bf4.svg","ae564bf4f558bae9c402bd013f364a00"],["/invest-calculator/static/media/icon_action-check_l_black.12b8fcfc.svg","12b8fcfc1ab060e47871304e28f91787"],["/invest-calculator/static/media/icon_action-check_l_white.7d5f734b.svg","7d5f734b84ad01ff4433f273c4aceb40"],["/invest-calculator/static/media/icon_action-check_m_black.0c87304a.svg","0c87304aceba07c9880b84379f309564"],["/invest-calculator/static/media/icon_action-check_m_white.69367bcb.svg","69367bcb0e9c8ebf404f9cabd98f700f"],["/invest-calculator/static/media/icon_action-check_s_black.dcb939bd.svg","dcb939bd7e0f40c89b5981345edec5a5"],["/invest-calculator/static/media/icon_action-check_s_white.2e063ab4.svg","2e063ab474abbac33960b15bc8029403"],["/invest-calculator/static/media/icon_action-check_xl_black.40e72d12.svg","40e72d12ecb2e44b5baec357e3ca75c9"],["/invest-calculator/static/media/icon_action-check_xl_white.1d3a9ebc.svg","1d3a9ebc95d000df7ff1d9c38493271f"],["/invest-calculator/static/media/icon_action-down_l_black.fd3e6a5d.svg","fd3e6a5dd5e57861d5d5518b763a30eb"],["/invest-calculator/static/media/icon_action-down_l_white.1a006c05.svg","1a006c05b7f253737c34f2507dc7dd7e"],["/invest-calculator/static/media/icon_action-down_m_black.7f5e5dec.svg","7f5e5dec1900bf0045313d7afecc291f"],["/invest-calculator/static/media/icon_action-down_m_white.777c9b36.svg","777c9b363d2ab700b8200fb79144a56d"],["/invest-calculator/static/media/icon_action-down_s_black.4e4c5dba.svg","4e4c5dba94e535668dfc3ca316217be2"],["/invest-calculator/static/media/icon_action-down_s_white.27292557.svg","272925570c5a09092c8893cee8895b69"],["/invest-calculator/static/media/icon_action-down_xl_black.9e43b711.svg","9e43b7117faa33c3f82eeecfb2818508"],["/invest-calculator/static/media/icon_action-down_xl_white.f97ce501.svg","f97ce5012da891bbf812bdce7114f1ba"],["/invest-calculator/static/media/icon_action-down_xs_black.d97e8f20.svg","d97e8f209cb0046324eee36231b41391"],["/invest-calculator/static/media/icon_action-down_xs_white.683476b8.svg","683476b8dbd655c6114c27f85194ef2f"],["/invest-calculator/static/media/icon_action-error_l_black.d7f946a3.svg","d7f946a3cfed162083c58ef218134a70"],["/invest-calculator/static/media/icon_action-error_l_color.5b25f9fd.svg","5b25f9fd87b2250df2dc963487fa0c0f"],["/invest-calculator/static/media/icon_action-error_l_white.88e2466d.svg","88e2466d0a0c2031fdfe27e23e1d980f"],["/invest-calculator/static/media/icon_action-error_m_black.3315d17b.svg","3315d17baf6dc5408c57e6e7987ae114"],["/invest-calculator/static/media/icon_action-error_m_color.300b940b.svg","300b940b6b861d05e4cf73d2d5acbe03"],["/invest-calculator/static/media/icon_action-error_m_white.c0abddea.svg","c0abddeac33b755123c33c65b536bf8c"],["/invest-calculator/static/media/icon_action-error_s_black.5955c288.svg","5955c2881b872e3b7f4d96e227cf1c2f"],["/invest-calculator/static/media/icon_action-error_s_color.85ff06b5.svg","85ff06b5d1bc40f081f7a956435fbd80"],["/invest-calculator/static/media/icon_action-error_s_white.c4e543d9.svg","c4e543d98b5c16b1d75e44c76f893fa4"],["/invest-calculator/static/media/icon_action-error_xl_black.b021247e.svg","b021247e6a9ba946e3680263644f38e8"],["/invest-calculator/static/media/icon_action-error_xl_color.91a0e9b8.svg","91a0e9b8f645c07326ed247077bafd2f"],["/invest-calculator/static/media/icon_action-error_xl_white.72e0acaa.svg","72e0acaa9aaeb95dff0101a54d4b7453"],["/invest-calculator/static/media/icon_action-fail_l_black.07c70971.svg","07c70971b395d5e87ae608611fcbd50f"],["/invest-calculator/static/media/icon_action-fail_l_white.57be5a26.svg","57be5a26b4675355aeeaf07706975c87"],["/invest-calculator/static/media/icon_action-fail_m_black.a4f1476d.svg","a4f1476debd02aadd940d8303eea9736"],["/invest-calculator/static/media/icon_action-fail_m_white.624c9014.svg","624c9014743f03f3a87ebdca97b822eb"],["/invest-calculator/static/media/icon_action-fail_s_black.8cbeec8f.svg","8cbeec8f153ed36a0ea28fccff24e4d9"],["/invest-calculator/static/media/icon_action-fail_s_white.34cf4812.svg","34cf48125b1df258a4afb33af6bcdf40"],["/invest-calculator/static/media/icon_action-fail_xl_black.6b97d7b8.svg","6b97d7b865b9fd4b8f36cd095dd4953f"],["/invest-calculator/static/media/icon_action-fail_xl_white.66addea8.svg","66addea827d720775d16a8a896c7d5b9"],["/invest-calculator/static/media/icon_action-ok-filled_l_black.9e262155.svg","9e2621550ee8ba9becb75359c8b4ab1b"],["/invest-calculator/static/media/icon_action-ok-filled_l_white.63967924.svg","639679240ce8e9e0d5a55859fec28005"],["/invest-calculator/static/media/icon_action-ok-filled_m_black.0a3cee34.svg","0a3cee34fd49d251a9ce93f0a29559eb"],["/invest-calculator/static/media/icon_action-ok-filled_m_white.9fdd2daf.svg","9fdd2daf01fec2e0609d94d635c8e6a1"],["/invest-calculator/static/media/icon_action-ok-filled_s_black.c8d599a6.svg","c8d599a6fa2dad9970c15465c9d2f889"],["/invest-calculator/static/media/icon_action-ok-filled_s_white.c25d0cc5.svg","c25d0cc5acf60c3f13fafab2b57e4c8c"],["/invest-calculator/static/media/icon_action-ok-filled_xl_black.80c03b32.svg","80c03b32309099fe7e90c9f25492ad0e"],["/invest-calculator/static/media/icon_action-ok-filled_xl_white.1603eb42.svg","1603eb42d2051983c01efb1b1281a5d9"],["/invest-calculator/static/media/icon_action-ok_l_black.4f5c3ab6.svg","4f5c3ab6c52906124bd6d1df8dce1510"],["/invest-calculator/static/media/icon_action-ok_l_color.fe7adbb7.svg","fe7adbb7f91e96c77b421ab1bf83f34d"],["/invest-calculator/static/media/icon_action-ok_l_white.8929922b.svg","8929922bc1d50a2df377f61032422c29"],["/invest-calculator/static/media/icon_action-ok_m_black.504bdcc3.svg","504bdcc3db6ee224daf617e25d0a156a"],["/invest-calculator/static/media/icon_action-ok_m_color.8d2e4bb2.svg","8d2e4bb218455ee4cf4aa8876283196c"],["/invest-calculator/static/media/icon_action-ok_m_white.21f9e9f1.svg","21f9e9f132de59f485cc094ff3938897"],["/invest-calculator/static/media/icon_action-ok_s_black.221f5a47.svg","221f5a47a17facc987a46c386b95171d"],["/invest-calculator/static/media/icon_action-ok_s_color.b18d47ed.svg","b18d47eddd9551cc7a9366cd494fdee5"],["/invest-calculator/static/media/icon_action-ok_s_white.9acc3efa.svg","9acc3efa2181e36ec4e282c8e0964351"],["/invest-calculator/static/media/icon_action-ok_xl_black.e2bdd60a.svg","e2bdd60a763927993b6b26e106a5cc7a"],["/invest-calculator/static/media/icon_action-ok_xl_color.da3fd7aa.svg","da3fd7aa9766ac7e057f44c70d550f8f"],["/invest-calculator/static/media/icon_action-ok_xl_white.9c562ba7.svg","9c562ba71e27bb53885f93966848b266"],["/invest-calculator/static/media/icon_action-up_l_black.2bf95e0a.svg","2bf95e0a685c84bfb1d68d42085a9ab4"],["/invest-calculator/static/media/icon_action-up_l_white.361d5b5d.svg","361d5b5de135ecc05a019549931fd344"],["/invest-calculator/static/media/icon_action-up_m_black.ad695680.svg","ad695680518e8a143d2f5557db4201a1"],["/invest-calculator/static/media/icon_action-up_m_white.9944dbc3.svg","9944dbc321f6bec07b5472a17e52c8cf"],["/invest-calculator/static/media/icon_action-up_s_black.4c5a425d.svg","4c5a425d5a049b2b4009931d4abd872b"],["/invest-calculator/static/media/icon_action-up_s_white.967acfdf.svg","967acfdfa6215728f27f2ccd21bf6861"],["/invest-calculator/static/media/icon_action-up_xl_black.f13a55c3.svg","f13a55c3275adfbd0373ec64903c8596"],["/invest-calculator/static/media/icon_action-up_xl_white.278ad300.svg","278ad300cf6a1d63a9fa5e5b3396b7a0"],["/invest-calculator/static/media/icon_action-up_xs_black.656ff6cf.svg","656ff6cfab5f908bf413d9f0e9a2daaa"],["/invest-calculator/static/media/icon_action-up_xs_white.70057a98.svg","70057a986c4dc0f9f12128e3b81f102b"],["/invest-calculator/static/media/icon_tool-attachment_l_black.f25ab3fb.svg","f25ab3fbce385b3a8abb1fd16e4aedcc"],["/invest-calculator/static/media/icon_tool-attachment_l_white.19e18cbb.svg","19e18cbb7d0b685844a67f42e3191fca"],["/invest-calculator/static/media/icon_tool-attachment_m_black.c30080b1.svg","c30080b13b9ebbfe547b8bd73fe56e07"],["/invest-calculator/static/media/icon_tool-attachment_m_white.4024b4e5.svg","4024b4e56a6aba6a799a9710ed0ce322"],["/invest-calculator/static/media/icon_tool-attachment_s_black.9c3d3ff1.svg","9c3d3ff1abae15e01868f66f4e4ba795"],["/invest-calculator/static/media/icon_tool-attachment_s_white.6bb7d06b.svg","6bb7d06ba0f5ff9fb4ea69e261011caf"],["/invest-calculator/static/media/icon_tool-attachment_xl_black.e1d9ff81.svg","e1d9ff81ca7a2fc652511d3f3a6c7a39"],["/invest-calculator/static/media/icon_tool-attachment_xl_white.9c26cf00.svg","9c26cf004f8946ad07d158b262f37013"],["/invest-calculator/static/media/icon_tool-calendar_l_black.631dad33.svg","631dad33672abf79c719dcd042859e59"],["/invest-calculator/static/media/icon_tool-calendar_l_white.f13130b7.svg","f13130b7193ee818ad0792d02237cb8a"],["/invest-calculator/static/media/icon_tool-calendar_m_black.a6ece15a.svg","a6ece15a0fd775f1a242a46608c97df5"],["/invest-calculator/static/media/icon_tool-calendar_m_white.017a82aa.svg","017a82aa02fd0c242ceb078c8e99bdaa"],["/invest-calculator/static/media/icon_tool-calendar_s_black.696b29c6.svg","696b29c6ce8b685805c0937750525c10"],["/invest-calculator/static/media/icon_tool-calendar_s_white.64b14cb4.svg","64b14cb43b16cbc0fb9031b8066741f9"],["/invest-calculator/static/media/icon_tool-calendar_xl_black.33a4e2b8.svg","33a4e2b878523bc6e1b4c826507e69ff"],["/invest-calculator/static/media/icon_tool-calendar_xl_white.0eb9fee5.svg","0eb9fee53f38d5f0a6130f9453ad6f2e"],["/invest-calculator/static/media/icon_tool-close_l_black.2d85a141.svg","2d85a141d150b91996ca6c974170d874"],["/invest-calculator/static/media/icon_tool-close_l_white.c37bf139.svg","c37bf139515cf2e1c8a4999c2d4e7c5d"],["/invest-calculator/static/media/icon_tool-close_m_black.586daa4f.svg","586daa4faa276d914fe4bb6c5575ad86"],["/invest-calculator/static/media/icon_tool-close_m_white.32e7eadd.svg","32e7eadd9d4fde356841df15ec268f74"],["/invest-calculator/static/media/icon_tool-close_s_black.1364e3d4.svg","1364e3d48fab713c6c78b4a2e1ed6e95"],["/invest-calculator/static/media/icon_tool-close_s_white.211383fc.svg","211383fc6cc7d8b89ee497b5230c826b"],["/invest-calculator/static/media/icon_tool-close_xl_black.e88a9beb.svg","e88a9beb4fbfc14a23666ff39e71a6f0"],["/invest-calculator/static/media/icon_tool-close_xl_white.fa730aa6.svg","fa730aa6103344dcdcdd2082e2bd9e87"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,c){var e=new URL(a);return"/"===e.pathname.slice(-1)&&(e.pathname+=c),e.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(c){return new Response(c,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(a,c,e,t){var i=new URL(a);return t&&i.pathname.match(t)||(i.search+=(i.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(e)),i.toString()},isPathWhitelisted=function(a,c){if(0===a.length)return!0;var e=new URL(c).pathname;return a.some(function(a){return e.match(a)})},stripIgnoredUrlParameters=function(a,c){var e=new URL(a);return e.hash="",e.search=e.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(a){return c.every(function(c){return!c.test(a[0])})}).map(function(a){return a.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var c=a[0],e=a[1],t=new URL(c,self.location),i=createCacheKey(t,hashParamName,e,/\.\w{8}\./);return[t.toString(),i]}));self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e){if(!c.has(e)){var t=new Request(e,{credentials:"same-origin"});return fetch(t).then(function(c){if(!c.ok)throw new Error("Request for "+e+" returned a response with status "+c.status);return cleanResponse(c).then(function(c){return a.put(e,c)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var c=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var c,e=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching);(c=urlsToCacheKeys.has(e))||(e=addDirectoryIndex(e,"index.html"),c=urlsToCacheKeys.has(e));!c&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(e=new URL("/invest-calculator/index.html",self.location).toString(),c=urlsToCacheKeys.has(e)),c&&a.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(e)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(c){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,c),fetch(a.request)}))}});