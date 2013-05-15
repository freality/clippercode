//Bookmarklet code
// use TextMate's Javascript bundle to compile
(function(document, location) {
  //we must use the same protocol as the target page
  // else, BE BLOCKED.
  var dev = true
    , protocol = location.protocol
    , domain = dev ? 'github.com' : 'dev.tgdcom.com'
    , path = dev ? '/freality/clippercode/raw/master' : '/clipmaker'
    , uri = protocol + '//' + domain + path;
  
  cs = document.createElement('LINK');
  cs.rel = 'stylesheet';
  cs.href = uri + '/css/styles.css';
  cs.media = 'all';
  cs.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(cs);
  
  qs = document.createElement('SCRIPT');
  qs.type = 'text/javascript'; 
  qs.src = uri + '/js/qwery.min.js';
  document.getElementsByTagName('head')[0].appendChild(qs);
  
  zs = document.createElement('SCRIPT');
  zs.type = 'text/javascript';
  zs.src = uri + '/js/ZeroClipboard.min.js';
  document.getElementsByTagName('head')[0].appendChild(zs);
  
  ms = document.createElement('SCRIPT');
  ms.type = 'text/javascript';
  ms.src = uri + '/js/main.js';
  document.getElementsByTagName('head')[0].appendChild(ms);
  
})(this.document, window.location);