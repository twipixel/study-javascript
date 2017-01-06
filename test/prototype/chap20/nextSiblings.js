//-----------------------------------------------------
// Element.nextSiblings
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var sibling = $('swim').nextSiblings();
        sibling.each(function(value, index) {
            $('show' + index).innerHTML = '태그: ' + value.tagName.toLowerCase()
                                                + ',   명칭: ' + value.innerHTML;
        });
    }
}

// 1229 라인
//nextSiblings: function(element) {
//    return $(element).recursivelyCollect('nextSibling');
//},

