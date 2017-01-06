//-----------------------------------------------------
// Ajax.Request
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', AJAXComm.fileReceive);
});
var AJAXComm = {
    fileReceive: function(event) {
        var URL = 'welcome.txt';
        var abcd = new Ajax.Request(URL, {
            requestHeaders: {'likeSport': 'basketBall', 'play-time': '48 minutes'},
            onSuccess: function(xmlHttp, xjson) {
                $('show1').innerHTML = xmlHttp.responseText;
            },
        });
    }
}

//884 ∂Û¿Œ
//setRequestHeaders: function() {
//    var headers = {
//      'X-Requested-With': 'XMLHttpRequest',
//      'X-Prototype-Version': Prototype.Version,
//      'Accept': 'text/javascript, text/html, application/xml, text/xml, */*'
//    };
//
//    if (this.method == 'post') {
//      headers['Content-type'] = this.options.contentType +
//        (this.options.encoding ? '; charset=' + this.options.encoding : '');
//
//      /* Force "Connection: close" for older Mozilla browsers to work
//       * around a bug where XMLHttpRequest sends an incorrect
//       * Content-length header. See Mozilla Bugzilla #246651.
//       */
//      if (this.transport.overrideMimeType &&
//          (navigator.userAgent.match(/Gecko\/(\d{4})/) || [0,2005])[1] < 2005)
//            headers['Connection'] = 'close';
//    }
//
//    // user-defined headers
//    if (typeof this.options.requestHeaders == 'object') {
//      var extras = this.options.requestHeaders;
//
//      if (typeof extras.push == 'function')
//        for (var i = 0, length = extras.length; i < length; i += 2)
//          headers[extras[i]] = extras[i+1];
//      else
//        $H(extras).each(function(pair) { headers[pair.key] = pair.value });
//    }
//
//    for (var name in headers)
//      this.transport.setRequestHeader(name, headers[name]);
//},
