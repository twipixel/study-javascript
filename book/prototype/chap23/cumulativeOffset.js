//-----------------------------------------------------
// Position.cumulativeOffset
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.webPage);
});
var Show = {
    webPage: function(event) {
        var offsetLeftTop = Position.cumulativeOffset($('riverMountain'));
        $('show1').innerHTML = 'offsetLeft: ' + offsetLeftTop[0] + ', '
                                      + 'offsetTop: ' + offsetLeftTop[1];
    }
}

//2320 라인
//cumulativeOffset: function(element) {
//    var valueT = 0, valueL = 0;
//    do {
//        valueT += element.offsetTop  || 0;
//        valueL += element.offsetLeft || 0;
//        element = element.offsetParent;
//    } while (element);
//    return [valueL, valueT];
//},
