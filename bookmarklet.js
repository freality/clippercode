//Bookmarklet code
// use TextMate's Javascript bundle to compile
(function(document, location) {
  //we must use the same protocol as the target page
  // else, BE BLOCKED.
  var dev = true;
  var settings = {}
    , setting.dev = dev
    , settings.protocol = location.protocol
    , settings.domain = dev ? 'github.com' : 'dev.tgdcom.com'
    , settings.path = dev ? '/freality/clippercode/raw/master' : '/clipmaker'
    , settings.url = url = protocol + '//' + domain + path;
  
  cs = document.createElement('LINK');
  cs.rel = 'stylesheet';
  cs.href = url + '/css/styles.css';
  cs.media = 'all';
  cs.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(cs);
  
  qs = document.createElement('SCRIPT');
  qs.type = 'text/javascript'; 
  qs.src = url + '/js/qwery.min.js';
  document.getElementsByTagName('head')[0].appendChild(qs);
  
  zs = document.createElement('SCRIPT');
  zs.type = 'text/javascript';
  zs.src = url + '/js/ZeroClipboard.min.js';
  document.getElementsByTagName('head')[0].appendChild(zs);
  
  ms = document.createElement('SCRIPT');
  ms.type = 'text/javascript';
  ms.src = url + '/js/main.js';
  document.getElementsByTagName('head')[0].appendChild(ms);
  
  window.ClipperSettings = settings;
  
})(this.document, window.location);