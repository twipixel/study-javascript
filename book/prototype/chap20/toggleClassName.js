//-----------------------------------------------------
// Element.toggleClassName
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('likeSport').toggleClassName('cssName');
    }
}

// 1315 라인
//toggleClassName: function(element, className) {
//    if (!(element = $(element))) return;
//    Element.classNames(element)[element.hasClassName(className) ? 'remove' : 'add'](className);
//    return element;
//},
