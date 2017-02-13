//-----------------------------------------------------
// Element.immediateDescendants
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var returnResult = $('korea').immediateDescendants();
        returnResult.each(function(value, index) {
            $('show' + index).innerHTML = value.id;
        });
    }
}

// 1218 라인
//immediateDescendants: function(element) {
//    if (!(element = $(element).firstChild)) return [];
//    while (element && element.nodeType != 1) element = element.nextSibling;
//    if (element) return [element].concat($(element).nextSiblings());
//    return [];
//},
