//-----------------------------------------------------
// Element.previousSiblings
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var sibling = $('soccer').previousSiblings();
        sibling.each(function(value, index) {
            $('show' + index).innerHTML = '태그: ' + value.tagName.toLowerCase()
                                                + ',   명칭: ' + value.innerHTML;
        });
    }
}

// 1225 라인
//previousSiblings: function(element) {
//    return $(element).recursivelyCollect('previousSibling');
//},
