//-----------------------------------------------------
// Element.cleanWhitespace
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('show1').innerHTML = '실행전 : ' + $('sportChoice').childNodes.length;

        var cleanSelect = $('sportChoice').cleanWhitespace();
        $('show2').innerHTML = '실행후 : ' + cleanSelect.childNodes.length;
    }
}

// 1331 라인
// removes whitespace-only text node children
//cleanWhitespace: function(element) {
//    element = $(element);
//    var node = element.firstChild;
//    while (node) {
//        var nextNode = node.nextSibling;
//        if (node.nodeType == 3 && !/\S/.test(node.nodeValue))
//            element.removeChild(node);
//        node = nextNode;
//    }
//    return element;
//},
