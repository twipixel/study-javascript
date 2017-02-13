//-----------------------------------------------------
// Position.absolutize
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.webPage);
});
var Show = {
    webPage: function() {
        var likeSport = $('likeSport');
        $('show1').innerHTML = '실행전 style.top: ' + likeSport.style.top
                                               + ', style.left: ' + likeSport.style.left
                                               + ', style.position: ' + likeSport.style.position;

        Position.absolutize('likeSport');
        likeSport = $('likeSport');
        $('show2').innerHTML = '실행후 style.top: ' + likeSport.style.top
                                               + ', style.left: ' + likeSport.style.left
                                               + ', style.position: ' + likeSport.style.position;
    }
}

//2457 라인
//absolutize: function(element) {
//    element = $(element);
//    if (element.style.position == 'absolute') return;
//    Position.prepare();
//
//    var offsets = Position.positionedOffset(element);
//    var top     = offsets[1];
//    var left    = offsets[0];
//    var width   = element.clientWidth;
//    var height  = element.clientHeight;
//
//    element._originalLeft   = left - parseFloat(element.style.left  || 0);
//    element._originalTop    = top  - parseFloat(element.style.top || 0);
//    element._originalWidth  = element.style.width;
//    element._originalHeight = element.style.height;
//
//    element.style.position = 'absolute';
//    element.style.top    = top + 'px';;
//    element.style.left   = left + 'px';;
//    element.style.width  = width + 'px';;
//    element.style.height = height + 'px';;
//},
