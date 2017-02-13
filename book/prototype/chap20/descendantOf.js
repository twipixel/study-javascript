//-----------------------------------------------------
// Element.descendantOf
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('show1').innerHTML = $('seoul').descendantOf('korea');
        $('show2').innerHTML = $('korea').descendantOf('seoul');
    }
}

// 1348 라인
//descendantOf: function(element, ancestor) {
//    element = $(element), ancestor = $(ancestor);
//    while (element = element.parentNode)
//        if (element == ancestor) return true;
//    return false;
//},
