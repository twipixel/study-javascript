//-------------------------------------
//  Prototype.BrowserFeatures.XPath
//-------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('show1').innerHTML = 'XPath: ' + Prototype.BrowserFeatures.XPath;
    }
}

// 11 라인
//BrowserFeatures: {
//    XPath: !!document.evaluate
//},
