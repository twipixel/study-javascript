//-----------------------------------------------------
// Element.setStyle
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('cssStyle').setStyle({
            'width': '200px',
            'height': '40px',
            'border-style': 'solid',
            'border-color': 'blue'
        });
    }
}

// 1391 라인
//setStyle: function(element, style) {
//    element = $(element);
//    for (var name in style) {
//        var value = style[name];
//        if(name == 'opacity') {
//            if (value == 1) {
//                value = (/Gecko/.test(navigator.userAgent) &&
//                  !/Konqueror|Safari|KHTML/.test(navigator.userAgent)) ? 0.999999 : 1.0;
//                if(/MSIE/.test(navigator.userAgent) && !window.opera)
//                    element.style.filter = element.getStyle('filter').replace(/alpha\([^\)]*\)/gi,'');
//            } else if(value == '') {
//                if(/MSIE/.test(navigator.userAgent) && !window.opera)
//                    element.style.filter = element.getStyle('filter').replace(/alpha\([^\)]*\)/gi,'');
//            } else {
//                if(value < 0.00001) value = 0;
//                if(/MSIE/.test(navigator.userAgent) && !window.opera)
//                    element.style.filter = element.getStyle('filter').replace(/alpha\([^\)]*\)/gi,'') +
//                        'alpha(opacity='+value*100+')';
//            }
//        } else if(['float','cssFloat'].include(name)) name = (typeof element.style.styleFloat != 'undefined') ? 'styleFloat' : 'cssFloat';
//        element.style[name.camelize()] = value;
//    }
//    return element;
//},
