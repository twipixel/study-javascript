//-----------------------------------------------------
// Form.enable
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
    Form.disable('formOne');
});
var Show = {
    okClick: function(event) {
        Form.enable('formOne');
        $('show1').innerHTML = '입력할 수 있도록 설정하였습니다.'
    }
}

// 1938 라인
//enable: function(form) {
//    form = $(form);
//    form.getElements().each(function(element) {
//        element.disabled = '';
//    });
//    return form;
//},
