//-----------------------------------------------------
// Element.getDimensions
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var dimValue = $('cssStyle').getDimensions();
        var dimShow = 'block; 폭: ' + dimValue.width + ', 높이: '+ dimValue.height;
        $('show1').innerHTML = dimShow;

        $('noneStyle').setStyle({'display': 'none'});
        var noneValue = $('noneStyle').getDimensions();

        var noneShow = 'none; 폭: ' + noneValue.width + ', 높이: '+ noneValue.height;
        $('show2').innerHTML = noneShow;
    }
}

// 1416 라인
//getDimensions: function(element) {
//    element = $(element);
//    var display = $(element).getStyle('display');
//    if (display != 'none' && display != null) // Safari bug
//        return {width: element.offsetWidth, height: element.offsetHeight};
//
//    // All *Width and *Height properties give 0 on elements with display none,
//    // so enable the element temporarily
//    var els = element.style;
//    var originalVisibility = els.visibility;
//    var originalPosition = els.position;
//    var originalDisplay = els.display;
//    els.visibility = 'hidden';
//    els.position = 'absolute';
//    els.display = 'block';
//    var originalWidth = element.clientWidth;
//    var originalHeight = element.clientHeight;
//    els.display = originalDisplay;
//    els.position = originalPosition;
//    els.visibility = originalVisibility;
//    return {width: originalWidth, height: originalHeight};
//},
