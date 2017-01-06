//-----------------------------------------------------
// Position.overlap
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.webPage);
});
var Show = {
    webPage: function(event) {
        var baseBox = $('baseBox');
        for (var k = 1; k < 5; k++) {
            var objectBox = $('box' + k);
            var cummOffset = Position.cumulativeOffset(objectBox);
            Position.within(baseBox, cummOffset[0], cummOffset[1]);

            var overWidth = Position.overlap('horizontal', baseBox);
            var overHeight = Position.overlap('vertical', baseBox);
            $('show' + k).innerHTML = '엘리먼트' + k + ' --> 폭: ' + overWidth 
                                                                      + ',  높이: ' + overHeight;
        }

        var inBaseBox = $('inBoxBase');
        for (k = 5; k < 7; k++) {
            objectBox = $('inBox' + k);
            cummOffset = Position.cumulativeOffset(objectBox);
            Position.within(inBaseBox, cummOffset[0], cummOffset[1]);

            overWidth = Position.overlap('horizontal', inBaseBox);
            overHeight = Position.overlap('vertical', inBaseBox);
            $('show' + k).innerHTML = '엘리먼트' + k + ' --> 폭: ' + overWidth 
                                                                      + ',  높이: ' + overHeight;
        }
    }
}

//2384 라인
// within must be called directly before
//overlap: function(mode, element) {
//    if (!mode) return 0;
//    if (mode == 'vertical')
//        return ((this.offset[1] + element.offsetHeight) - this.ycomp) /
//                    element.offsetHeight;
//    if (mode == 'horizontal')
//        return ((this.offset[0] + element.offsetWidth) - this.xcomp) /
//                    element.offsetWidth;
//},
