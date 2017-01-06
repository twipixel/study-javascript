//-----------------------------------------------------
// Element.undoClipping
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('clipClick', 'click', Show.clip);
    Event.observe('returnClick', 'click', Show.clipUndo);
});
var Show = {
    clip: function(event) {
        $('clipping').makeClipping();
    },
    clipUndo: function(event) {
        $('clipping').undoClipping();
    }
}

// 1477 라인
//undoClipping: function(element) {
//    element = $(element);
//    if (!element._overflow) return;
//    element.style.overflow = element._overflow == 'auto' ? '' : element._overflow;
//    element._overflow = null;
//    return element;
//}
