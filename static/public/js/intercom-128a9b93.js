!function(){window.__IntercomBooted=!1;var t=[],n=function(){Array.prototype.unshift.call(arguments,"[Intercom]:"),console.log.apply(this,arguments)};window.__trackIntercomEvent=function(n,e){window.__IntercomBooted?window.Intercom("trackEvent",n,e):t.push({type:n,data:e})},n("Loading Intercom");var e=setTimeout(function(){n("Not booted, quiting"),clearInterval(o)},3e4),o=setInterval(function(){window.Intercom&&window.Intercom.booted&&(n("Booted"),window.__IntercomBooted=!0,t.forEach(function(t){window.Intercom("trackEvent",t.type,t.data)}),t=[],clearInterval(o),clearTimeout(e))},10);!function(){var t=window,n=t.Intercom;if("function"==typeof n)n("reattach_activator"),n("update",intercomSettings);else{var e=document,o=function(){o.c(arguments)};o.q=[],o.c=function(t){o.q.push(t)},t.Intercom=o;function c(){var t=e.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://widget.intercom.io/widget/"+window.__IntercomAppId;var n=e.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}t.attachEvent?t.attachEvent("onload",c):t.addEventListener("load",c,!1)}}()}();