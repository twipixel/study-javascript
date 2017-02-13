//-----------------------------------------------------
// Element.makePositioned
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('baseElmt').makePositioned();
    }
}

// 1439 라인
//makePositioned: function(element) {
//    element = $(element);
//    var pos = Element.getStyle(element, 'position');
//    if (pos == 'static' || !pos) {
//        element._madePositioned = true;
//        element.style.position = 'relative';
//        // Opera returns the offset relative to the positioning context, when an
//        // element is position relative but top and left have not been defined
//        if (window.opera) {
//            element.style.top = 0;
//            element.style.left = 0;
//        }
//    }
//    return element;
//},
//
