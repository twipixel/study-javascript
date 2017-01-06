//-----------------------------------------------------
// Form.disable
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        Form.disable('formOne');
        $('show1').innerHTML = '입력할 수 없도록 설정하였습니다.'
    }
}

// 1929 라인
//disable: function(form) {
//    form = $(form);
//    form.getElements().each(function(element) {
//        element.blur();
//        element.disabled = 'true';
//    });
//    return form;
//},
