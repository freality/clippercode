//Bookmarklet code
// use TextMate's Javascript bundle to compile
(function(document, location) {
  //we must use the same protocol as the target page
  // else, BE BLOCKED.
  var protocol = location.protocol
    , host = protocol + '//' + 'dev.tgdcom.com';
  
  cs = document.createElement('LINK');
  cs.rel = 'stylesheet';
  cs.href = host + '/clipmaker/css/ZeroClipboard.min.js';
  cs.media = 'all';
  cs.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(cs);
  
  qs = document.createElement('SCRIPT');
  qs.type = 'text/javascript';
  qs.src = host + '/clipmaker/js/qwery.min.js';
  document.getElementsByTagName('head')[0].appendChild(qs);
  
  zs = document.createElement('SCRIPT');
  zs.type = 'text/javascript';
  zs.src = host + '/clipmaker/js/ZeroClipboard.min.js';
  document.getElementsByTagName('head')[0].appendChild(zs);
  
  ms = document.createElement('SCRIPT');
  ms.type = 'text/javascript';
  ms.src = host + '/clipmaker/js/main.js';
  document.getElementsByTagName('head')[0].appendChild(ms);
  
})(this.document, window.location);