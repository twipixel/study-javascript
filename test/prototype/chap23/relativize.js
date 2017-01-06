//-----------------------------------------------------
// Position.relativize
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.webPage);
    Position.absolutize('likeSport');
});
var Show = {
    webPage: function() {
        var likeSport = $('likeSport');
        $('show1').innerHTML = '실행전 style.top: ' + likeSport.style.top
                                               + ', style.left: ' + likeSport.style.left
                                               + ', style.position: ' + likeSport.style.position;

        Position.relativize('likeSport');
        likeSport = $('likeSport');
        $('show2').innerHTML = '실행후 style.top: ' + likeSport.style.top
                                               + ', style.left: ' + likeSport.style.left
                                               + ', style.position: ' + likeSport.style.position;
    }
}

//2480 라인
//relativize: function(element) {
//    element = $(element);
//    if (element.style.position == 'relative') return;
//    Position.prepare();
//
//    element.style.position = 'relative';
//    var top  = parseFloat(element.style.top  || 0) - (element._originalTop || 0);
//    var left = parseFloat(element.style.left || 0) - (element._originalLeft || 0);
//
//    element.style.top    = top + 'px';
//    element.style.left   = left + 'px';
//    element.style.height = element._originalHeight;
//    element.style.width  = element._originalWidth;
//}
