//-----------------------------------------------------
// Position.realOffset
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.webPage);
});
var Show = {
    webPage: function(event) {
        var scrollLeftTop = Position.realOffset($('likeSport'));
        $('show1').innerHTML = '좌우: ' + scrollLeftTop[0] + ', '
                                      + '상하: ' + scrollLeftTop[1];
    }
}

//2310 라인
//realOffset: function(element) {
//    var valueT = 0, valueL = 0;
//    do {
//        valueT += element.scrollTop  || 0;
//        valueL += element.scrollLeft || 0;
//        element = element.parentNode;
//    } while (element);
//    return [valueL, valueT];
//},

//#likeSport {
//    border: solid blue 2px; position: absolute; 
//    width: 100px; height: 100px; margin: 50px;
//	background-color: yellow;
//}
