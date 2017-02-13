//-----------------------------------------------------
// Position.prepare
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('prepareClick', 'click', Show.webPage);
});
var Show = {
    webPage: function(event) {
        $('show1').innerHTML = 'window pageXOffset: ' + window.pageXOffset 
                                       + ', pageYOffset: ' + window.pageYOffset;

        $('show2').innerHTML = 'document.documentElement '
                                       + 'scrollLeft: ' + document.documentElement.scrollLeft
                                       + ', scrollTop: ' + document.documentElement.scrollTop;

        $('show3').innerHTML = 'document.body '
                                       + 'scrollLeft: ' + document.body.scrollLeft
                                       + ', scrollTop: ' + document.body.scrollTop;
    }
}

//2297 라인
// must be called before calling withinIncludingScrolloffset, every time the
// page is scrolled
//prepare: function() {
//    this.deltaX =  window.pageXOffset
//                || document.documentElement.scrollLeft
//                || document.body.scrollLeft
//                || 0;
//    this.deltaY =  window.pageYOffset
//                || document.documentElement.scrollTop
//                || document.body.scrollTop
//                || 0;
//},
