//-----------------------------------------------------
// Element.makeClipping
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('clipping').makeClipping();
    }
}

// 1468 라인
//makeClipping: function(element) {
//    element = $(element);
//    if (element._overflow) return;
//    element._overflow = element.style.overflow || 'auto';
//    if ((Element.getStyle(element, 'overflow') || 'visible') != 'hidden')
//        element.style.overflow = 'hidden';
//    return element;
//},
