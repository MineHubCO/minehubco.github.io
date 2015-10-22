 /*********************************************************************
 *  #### Twitter Post Fetcher v12.0 ####
 *  Coded by Jason Mayes 2013. A present to all the developers out there.
 *  www.jasonmayes.com
 *  Please keep this disclaimer with my code if you use it. Thanks. :-)
 *  Got feedback or questions, ask here:
 *  http://www.jasonmayes.com/projects/twitterApi/
 *  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
 *  Updates will be posted to this site.
 *********************************************************************/
var twitterFetcher=function(){function x(a){return a.replace(/<b[^>]*>(.*?)<\/b>/gi,function(a,f){return f}).replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function y(a){a=a.getElementsByTagName("a");for(var c=a.length-1;0<=c;c--)a[c].setAttribute("target","_blank")}function m(a,c){for(var f=[],g=new RegExp("(^| )"+c+"( |$)"),h=a.getElementsByTagName("*"),b=0,k=h.length;b<k;b++)g.test(h[b].className)&&f.push(h[b]);return f}var z="",k=20,A=!0,r=[],t=!1,s=!0,p=!0,u=null,v=!0,
B=!0,w=null,C=!0,D=!1,q=!0;return{fetch:function(a){void 0===a.maxTweets&&(a.maxTweets=20);void 0===a.enableLinks&&(a.enableLinks=!0);void 0===a.showUser&&(a.showUser=!0);void 0===a.showTime&&(a.showTime=!0);void 0===a.dateFunction&&(a.dateFunction="default");void 0===a.showRetweet&&(a.showRetweet=!0);void 0===a.customCallback&&(a.customCallback=null);void 0===a.showInteraction&&(a.showInteraction=!0);void 0===a.showImages&&(a.showImages=!1);void 0===a.linksInNewWindow&&(a.linksInNewWindow=!0);if(t)r.push(a);
else{t=!0;z=a.domId;k=a.maxTweets;A=a.enableLinks;p=a.showUser;s=a.showTime;B=a.showRetweet;u=a.dateFunction;w=a.customCallback;C=a.showInteraction;D=a.showImages;q=a.linksInNewWindow;var c=document.createElement("script");c.type="text/javascript";c.src="//cdn.syndication.twimg.com/widgets/timelines/"+a.id+"?&lang="+(a.lang||"en")+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random();document.getElementsByTagName("head")[0].appendChild(c)}},callback:function(a){var c=
document.createElement("div");c.innerHTML=a.body;"undefined"===typeof c.getElementsByClassName&&(v=!1);a=[];var f=[],g=[],h=[],b=[],n=[],e=0;if(v)for(c=c.getElementsByClassName("tweet");e<c.length;){0<c[e].getElementsByClassName("retweet-credit").length?b.push(!0):b.push(!1);if(!b[e]||b[e]&&B)a.push(c[e].getElementsByClassName("e-entry-title")[0]),n.push(c[e].getAttribute("data-tweet-id")),f.push(c[e].getElementsByClassName("p-author")[0]),g.push(c[e].getElementsByClassName("dt-updated")[0]),void 0!==
c[e].getElementsByClassName("inline-media")[0]?h.push(c[e].getElementsByClassName("inline-media")[0]):h.push(void 0);e++}else for(c=m(c,"tweet");e<c.length;)a.push(m(c[e],"e-entry-title")[0]),n.push(c[e].getAttribute("data-tweet-id")),f.push(m(c[e],"p-author")[0]),g.push(m(c[e],"dt-updated")[0]),void 0!==m(c[e],"inline-media")[0]?h.push(m(c[e],"inline-media")[0]):h.push(void 0),0<m(c[e],"retweet-credit").length?b.push(!0):b.push(!1),e++;a.length>k&&(a.splice(k,a.length-k),f.splice(k,f.length-k),g.splice(k,
g.length-k),b.splice(k,b.length-k),h.splice(k,h.length-k));c=[];e=a.length;for(b=0;b<e;){if("string"!==typeof u){var d=g[b].getAttribute("datetime"),l=new Date(g[b].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),d=u(l,d);g[b].setAttribute("aria-label",d);if(a[b].innerText)if(v)g[b].innerText=d;else{var l=document.createElement("p"),E=document.createTextNode(d);l.appendChild(E);l.setAttribute("aria-label",d);g[b]=l}else g[b].textContent=d}d="";A?(q&&(y(a[b]),p&&y(f[b])),
p&&(d+='<div class="user">'+x(f[b].innerHTML)+"</div>"),d+='<p class="tweet">'+x(a[b].innerHTML)+"</p>",s&&(d+='<p class="timePosted">'+g[b].getAttribute("aria-label")+"</p>")):a[b].innerText?(p&&(d+='<p class="user">'+f[b].innerText+"</p>"),d+='<p class="tweet">'+a[b].innerText+"</p>",s&&(d+='<p class="timePosted">'+g[b].innerText+"</p>")):(p&&(d+='<p class="user">'+f[b].textContent+"</p>"),d+='<p class="tweet">'+a[b].textContent+"</p>",s&&(d+='<p class="timePosted">'+g[b].textContent+"</p>"));C&&
(d+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+n[b]+'" class="twitter_reply_icon"'+(q?' target="_blank">':">")+'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+n[b]+'" class="twitter_retweet_icon"'+(q?' target="_blank">':">")+'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+n[b]+'" class="twitter_fav_icon"'+(q?' target="_blank">':">")+"Favorite</a></p>");D&&void 0!==h[b]&&(l=h[b],void 0!==l?(l=l.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0],
l=decodeURIComponent(l).split('"')[1]):l=void 0,d+='<div class="media"><img src="'+l+'" alt="Image from tweet" /></div>');c.push(d);b++}if(null===w){a=c.length;f=0;g=document.getElementById(z);for(h="<ul>";f<a;)h+="<li>"+c[f]+"</li>",f++;g.innerHTML=h+"</ul>"}else w(c);t=!1;0<r.length&&(twitterFetcher.fetch(r[0]),r.splice(0,1))}}}();

// ##### Simple example 1 #####
var config1 = {
  "id": '495697428280909825',
  "domId": 'tw-widget',
  "maxTweets": 3,
  "enableLinks": true
};
twitterFetcher.fetch(config1);