//-----------------------------------------------------
// Position.withinIncludingScrolloffsets
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.webPage);
});
var Show = {
    webPage: function(event) {
        var likeSport = $('likeSport');
        var scrollLeftTop = Position.realOffset($('likeSport'));
        $('show1').innerHTML = '좌우: ' + scrollLeftTop[0] + ', '
                                      + '상하: ' + scrollLeftTop[1];

        var cumuOffset = Position.cumulativeOffset(likeSport);
        $('show2').innerHTML = 'cummOffsetLeft: ' + cumuOffset[0] + ', '
                                      + 'cummOffsetTop: ' + cumuOffset[1];

        $('show3').innerHTML = 'offsetWidth: ' + likeSport.offsetWidth + ', '
                                      + 'offsetHeight: ' + likeSport.offsetHeight;

        $('show4').innerHTML = '아규먼트 x: 10, y: 20';
        Position.prepare();
        var resultOffset = Position.withinIncludingScrolloffsets($('likeSport'), 10, 20);
        $('show5').innerHTML = resultOffset;
    }
}

//2370 라인
//withinIncludingScrolloffsets: function(element, x, y) {
//    var offsetcache = this.realOffset(element);
//
//    this.xcomp = x + offsetcache[0] - this.deltaX;
//    this.ycomp = y + offsetcache[1] - this.deltaY;
//    this.offset = this.cumulativeOffset(element);
//
//    return (this.ycomp >= this.offset[1] &&
//            this.ycomp <  this.offset[1] + element.offsetHeight &&
//            this.xcomp >= this.offset[0] &&
//            this.xcomp <  this.offset[0] + element.offsetWidth);
//},
