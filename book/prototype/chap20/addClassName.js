//-----------------------------------------------------
// Element.addClassName
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var returnValue = $('likeSport').addClassName('cssName');
        $('show1').innerHTML = '반환 ID: ' + returnValue.id;
    }
}

// 1303 라인
//addClassName: function(element, className) {
//    if (!(element = $(element))) return;
//    Element.classNames(element).add(className);
//    return element;
//},
