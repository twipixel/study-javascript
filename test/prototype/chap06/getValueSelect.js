//-----------------------------------------------------
// Form.Element.getValue()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('show1').innerHTML = '하나 선택: ' + Form.Element.getValue('riverSelect').inspect();
        $('show2').innerHTML = '다수 선택: ' + Form.Element.getValue('sportSelect').inspect();
    }
}

//1990 라인
//getValue: function(element) {
//    element = $(element);
//    var method = element.tagName.toLowerCase();
//    return Form.Element.Serializers[method](element);
//},
