//-----------------------------------------------------
// Element.siblings
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var sibling = $('soccer').siblings();
        sibling.each(function(value, index) {
            $('show' + index).innerHTML = '태그: ' + value.tagName.toLowerCase()
                                                + ',   명칭: ' + value.innerHTML;
        });
    }
}

// 1233 라인
//siblings: function(element) {
//    element = $(element);
//    return element.previousSiblings().reverse().concat(element.nextSiblings());
//},
