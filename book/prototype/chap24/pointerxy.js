//-----------------------------------------------------
// 마우스를 클릭한 X, Y 좌표 출력
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('likeSport', 'click', Show.positionXY);
});
var Show = {
    positionXY: function(event) {
        var positionX = Event.pointerX(event);
        var positionY = Event.pointerY(event);
        $('pointerXY').innerHTML = '클릭 좌표 X : ' + positionX +  ', Y : ' + positionY;
    }
}

// 2205 라인
//pointerX: function(event) {
//    return event.pageX || (event.clientX +
//        (document.documentElement.scrollLeft || document.body.scrollLeft));
//},
//
//pointerY: function(event) {
//    return event.pageY || (event.clientY +
//        (document.documentElement.scrollTop || document.body.scrollTop));
//},
