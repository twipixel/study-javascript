//-----------------------------------------------------
// Element.recursivelyCollect
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var parent = $('basketSwim').recursivelyCollect('parentNode');
        parent.each(function(value, index) {
            $('show' + index).innerHTML = '태그: ' + value.tagName.toLowerCase()
                                                    + ',   ID: ' + value.id;
        });
    }
}

// 1201 라인
//recursivelyCollect: function(element, property) {
//    element = $(element);
//    var elements = [];
//    while (element = element[property])
//        if (element.nodeType == 1)
//            elements.push(Element.extend(element));
//    return elements;
//},
