//-----------------------------------------------------
// Position.offsetParent
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.webPage);
});
var Show = {
    webPage: function(event) {
        var posParent = Position.offsetParent($('likeSport'));
        $('show1').innerHTML = 'offsetParent.id : ' + posParent.id;
    }
}

//2148 라인
//offsetParent: function(element) {
//    if (element.offsetParent) return element.offsetParent;
//    if (element == document.body) return element;
//
//    while ((element = element.parentNode) && element != document.body)
//        if (Element.getStyle(element, 'position') != 'static')
//            return element;
//
//    return document.body;
//},
