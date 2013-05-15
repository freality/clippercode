(function($, qwery, ZeroClipboard, document, location) {
  var settings = window.ClipperSettings || {};
  var url = settings ? settings.url : "/js";
  var movie_path = url + "/ZeroClipboard.swf";
  
  var clip_defaults = {
    moviePath:         movie_path,                 // URL to movie
    trustedDomains:    undefined,                  // Domains that we should trust (single string or array of strings)
    hoverClass:        "zeroclipboard-is-hover",   // The class used to hover over the object
    activeClass:       "zeroclipboard-is-active",  // The class used to set object active
    allowScriptAccess: "sameDomain"                // SWF outbound scripting policy
  };
  
  ZeroClipboard.setDefaults(clip_defaults);
  
})(jQuery, qwery, ZeroClipboard, this.document, window.location);