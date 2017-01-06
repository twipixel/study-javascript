//-----------------------------------------------------
// Position.positionedOffset
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.webPage);
});
var Show = {
    webPage: function(event) {        
        var posParent = $('likeSport').offsetParent;
        $('show1').innerHTML = 'Offset Parent : ' + posParent.id;
        
        $('show2').innerHTML = posParent.id + ' position : ' 
                        + Element.getStyle(posParent, 'position');

        var posLeftTop = Position.positionedOffset($('likeSport'));
        $('show3').innerHTML = 'offsetLeft: ' + posLeftTop[0] + ', '
                                      + 'offsetTop: ' + posLeftTop[1];

        //<table> 태그
        $('show4').innerHTML = '-- 우편번호 <table> --';
        posParent = $('zipNumber').offsetParent;
        $('show5').innerHTML = 'Offset Parent : ' + posParent.id;

        $('show6').innerHTML = posParent.id + ' position : ' 
                        + Element.getStyle(posParent, 'position');
        posLeftTop = Position.positionedOffset($('zipNumber'));
        $('show7').innerHTML = 'offsetLeft: ' + posLeftTop[0] + ', '
                                      + 'offsetTop: ' + posLeftTop[1];    
    }
}

//2330 라인
//positionedOffset: function(element) {
//    var valueT = 0, valueL = 0;
//    do {
//        valueT += element.offsetTop  || 0;
//        valueL += element.offsetLeft || 0;
//        element = element.offsetParent;
//        if (element) {
//            if(element.tagName=='BODY') break;
//            var p = Element.getStyle(element, 'position');
//            if (p == 'relative' || p == 'absolute') break;
//        }
//    } while (element);
//        return [valueL, valueT];
//},
