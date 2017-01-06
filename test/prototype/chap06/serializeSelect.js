//-----------------------------------------------------
// Form.Element.serialize
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('show1').innerHTML = '하나 선택: ' + Form.Element.serialize('riverSelect');
        $('show2').innerHTML = '다수 선택: ' + Form.Element.serialize('sportSelect');
    }
}

//1977 라인
//serialize: function(element) {
//    element = $(element);
//    if (!element.disabled && element.name) {
//        var value = element.getValue();
//        if (value != undefined) {
//            var pair = {};
//            pair[element.name] = value;
//            return Hash.toQueryString(pair);
//        }
//    }
//    return '';
//},
