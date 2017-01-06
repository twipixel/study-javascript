//-----------------------------------------------------
// Element.getWidth
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('show1').innerHTML = 'Height: ' + $('likeSport').getWidth();
    }
}

// 1285 라인
//getWidth: function(element) {
//    return $(element).getDimensions().width;
//},
