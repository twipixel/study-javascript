//-----------------------------------------------------
// Position.within
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.webPage);
});
var Show = {
    webPage: function(event) {
        var likeSport = $('likeSport');
        var cummOffset = Position.cumulativeOffset(likeSport);
        $('show1').innerHTML = 'cummOffsetLeft: ' + cummOffset[0] + ', '
                                      + 'cummOffsetTop: ' + cummOffset[1];

        $('show2').innerHTML = 'offsetWidth: ' + likeSport.offsetWidth +  ', '
                                      + 'offsetHeight: ' + likeSport.offsetHeight;

        var resultWithin = Position.within(likeSport, 200, 200);
        $('show3').innerHTML = 'Left: 200, Top: 200  --> ' + resultWithin;

        resultWithin = Position.within(likeSport, 130, 150);
        $('show4').innerHTML = 'Left: 130, Top: 150  --> ' + resultWithin;
    }
}

//2356 라인
// caches x/y coordinate pair to use with overlap
//within: function(element, x, y) {
//    if (this.includeScrollOffsets)
//        return this.withinIncludingScrolloffsets(element, x, y);
//    this.xcomp = x;
//    this.ycomp = y;
//    this.offset = this.cumulativeOffset(element);
//
//    return (y >= this.offset[1] &&
//            y <  this.offset[1] + element.offsetHeight &&
//            x >= this.offset[0] &&
//            x <  this.offset[0] + element.offsetWidth);
//},
