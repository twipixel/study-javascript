//-----------------------------------------------------
// Form.Element.Methods.getValue
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('show1').innerHTML = '일반문자: ' + Form.Element.getValue('textInput');
        $('show2').innerHTML = '파일이름: ' + Form.Element.getValue('fileInput');
        $('show3').innerHTML = '패스워드: ' + Form.Element.getValue('passWord');
        $('show4').innerHTML = '히든문자: ' + Form.Element.getValue('hiddenInput');
        $('show5').innerHTML = 'textarea: ' + Form.Element.getValue('textArea');
//      $('show6').innerHTML = 'name 사용: ' + Form.Element.getValue('nameSport');
    }
}

//1990 라인
//getValue: function(element) {
//    element = $(element);
//    var method = element.tagName.toLowerCase();
//    return Form.Element.Serializers[method](element);
//},
