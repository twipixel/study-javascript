//-----------------------------------------------------
//Element.hasClassName
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var sportHas = $('likeSport').hasClassName('sportCss detailCss');
        $('show1').innerHTML = 'sportCss detailCss: ' + sportHas;

        sportHas = $('likeSport').hasClassName('detailCss sportCss');
        $('show2').innerHTML = 'detailCss sportCss: ' + sportHas;

        sportHas = $('likeSport').hasClassName('sportCss');
        $('show3').innerHTML = 'sportCss: ' + sportHas;

        sportHas = $('likeSport').hasClassName('detailCss');
        $('show4').innerHTML = 'detailCss: ' + sportHas;
    }
}

// 1293 라인
//hasClassName: function(element, className) {
//    if (!(element = $(element))) return;
//    var elementClassName = element.className;
//    if (elementClassName.length == 0) return false;
//    if (elementClassName == className ||
//        elementClassName.match(new RegExp("(^|\\s)" + className + "(\\s|$)")))
//        return true;
//    return false;
//},
