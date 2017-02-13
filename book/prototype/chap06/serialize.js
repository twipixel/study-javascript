//-----------------------------------------------------
// Form.Element.serialize
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('show1').innerHTML = '텍스트: ' + Form.Element.serialize('textInput');
        $('show2').innerHTML = 'textarea: ' + Form.Element.serialize('textArea');
        $('show3').innerHTML = 'inputType Button: ' + Form.Element.serialize('inputType');
        $('show4').innerHTML = 'button 태그: ' + Form.Element.serialize('okClick');
    }
}
