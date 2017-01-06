//-----------------------------------------------------
// Position.page
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.webPage);
});
var Show = {
    webPage: function(event) {
        var resultPage = Position.page($('likeSport'));
        $('show1').innerHTML = '엘리먼트 위치(x, y) : ' + resultPage.inspect();
    }
}

//2394 라인
//page: function(forElement) {
//    var valueT = 0, valueL = 0;
//
//    var element = forElement;
//    do {
//        valueT += element.offsetTop  || 0;
//        valueL += element.offsetLeft || 0;
//
//        // Safari fix
//        if (element.offsetParent==document.body)
//            if (Element.getStyle(element,'position')=='absolute') break;
//
//    } while (element = element.offsetParent);
//
//    element = forElement;
//    do {
//        if (!window.opera || element.tagName=='BODY') {
//            valueT -= element.scrollTop  || 0;
//            valueL -= element.scrollLeft || 0;
//        }
//    } while (element = element.parentNode);
//
//    return [valueL, valueT];
//},
