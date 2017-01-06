//-----------------------------------------------------
// Event.findElement()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('gu', 'click', Show.click);
});

var Show = {
    click: function(event) {
        var element = Event.findElement(event, 'div');
        $('show1').innerHTML = '엘리먼트 ID: ' + element.id;
    }
}

//2225 라인
// find the first node with the given tagName, starting from the
// node the event was triggered on; traverses the DOM upwards
//findElement: function(event, tagName) {
//    var element = Event.element(event);
//    while (element.parentNode && (!element.tagName ||
//            (element.tagName.toUpperCase() != tagName.toUpperCase())))
//        element = element.parentNode;
//    return element;
//},
