//-----------------------------------------------------
// Element.getStyle
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var fontFamily = $('cssStyle').getStyle('font-family');
        $('show1').innerHTML = 'font-family : ' + fontFamily;

        var borderStyle = $('cssStyle').getStyle('border-style');
        $('show2').innerHTML = 'border-style : ' + borderStyle;

        var topStyle = $('cssStyle').getStyle('border-top-style');
        $('show3').innerHTML = 'border-top-style : ' + topStyle;

        var borderColor = $('cssStyle').getStyle('border-color');
        $('show4').innerHTML = 'border-color : ' + borderColor;
    }
}

// 1362 라인
//getStyle: function(element, style) {
//    element = $(element);
//    if (['float','cssFloat'].include(style))
//        style = (typeof element.style.styleFloat != 'undefined' ? 'styleFloat' : 'cssFloat');
//    style = style.camelize();
//    var value = element.style[style];
//    if (!value) {
//        if (document.defaultView && document.defaultView.getComputedStyle) {
//            var css = document.defaultView.getComputedStyle(element, null);
//            value = css ? css[style] : null;
//        } else if (element.currentStyle) {
//            value = element.currentStyle[style];
//        }
//    }
//
//    if((value == 'auto') && ['width','height'].include(style) && (element.getStyle('display') != 'none'))
//        value = element['offset'+style.capitalize()] + 'px';
//
//    if (window.opera && ['left', 'top', 'right', 'bottom'].include(style))
//        if (Element.getStyle(element, 'position') == 'static') value = 'auto';
//    if(style == 'opacity') {
//        if(value) return parseFloat(value);
//        if(value = (element.getStyle('filter') || '').match(/alpha\(opacity=(.*)\)/))
//            if(value[1]) return parseFloat(value[1]) / 100;
//        return 1.0;
//    }
//    return value == 'auto' ? null : value;
//},
