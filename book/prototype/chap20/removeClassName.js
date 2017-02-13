//-----------------------------------------------------
// Element.removeClassName
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var returnValue = $('likeSport').removeClassName('cssName');
        $('show1').innerHTML = '반환 ID: ' + returnValue.id;
    }
}

// 1309 라인
//removeClassName: function(element, className) {
//    if (!(element = $(element))) return;
//    Element.classNames(element).remove(className);
//    return element;
//},
