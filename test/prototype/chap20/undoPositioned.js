//-----------------------------------------------------
// Element.undoPositioned
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.moving);
    Event.observe('returnClick', 'click', Show.returnPos);
});
var Show = {
    moving: function(event) {
        $('baseElmt').makePositioned();
    },
    returnPos: function(event) {
        $('baseElmt').undoPositioned();
    }
}

// 1455 라인
//undoPositioned: function(element) {
//    element = $(element);
//    if (element._madePositioned) {
//        element._madePositioned = undefined;
//        element.style.position =
//        element.style.top =
//        element.style.left =
//        element.style.bottom =
//        element.style.right = '';
//    }
//    return element;
//},
