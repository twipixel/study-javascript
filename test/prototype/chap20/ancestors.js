//-----------------------------------------------------
// Element.ancestors
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var parent = $('basketSwim').ancestors();
        parent.each(function(value, index) {
            $('show' + index).innerHTML = '태그: ' + value.tagName.toLowerCase()
                                                    + ',   ID: ' + value.id;
        });
    }
}

// 1210 라인
//ancestors: function(element) {
//    return $(element).recursivelyCollect('parentNode');
//},
