//-----------------------------------------------------
// Element.toggle
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('likeSport').toggle();
    }
}

// 1146 라인
//toggle: function(element) {
//    element = $(element);
//    Element[Element.visible(element) ? 'hide' : 'show'](element);
//    return element;
//},
