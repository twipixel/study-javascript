//-----------------------------------------------------
// Element.getHeight
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('show1').innerHTML = 'Height: ' + $('likeSport').getHeight();
    }
}

// 1281 라인
//getHeight: function(element) {
//    return $(element).getDimensions().height;
//},
