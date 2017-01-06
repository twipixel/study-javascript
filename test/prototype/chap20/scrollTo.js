//-----------------------------------------------------
// Element.scrollTo
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('scrollPos').scrollTo();
    }
}

// 1355 라인
//scrollTo: function(element) {
//    element = $(element);
//    var pos = Position.cumulativeOffset(element);
//    window.scrollTo(pos[0], pos[1]);
//    return element;
//},
