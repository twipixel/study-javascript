//-----------------------------------------------------
// Event.element
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('inputQty', 'click', Show.webPage);

    $('inputPrice', 'inputAmount').each(function(element) {
        Event.observe(element, 'click', Show.webPage);
    })
});
var Show = {
    webPage: function(event) {
        var clickElement = Event.element(event);
        $('show1').innerHTML = '클릭 ID : ' + clickElement.id + 
                                         ',   Size : ' + clickElement.size;
    }
}

// 2196 라인
//element: function(event) {
//    return event.target || event.srcElement;
//},
