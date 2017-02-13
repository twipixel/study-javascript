//-----------------------------------------------------
// Form.focusFirstElement
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        Form.focusFirstElement('formOne');
    }
}

// 1953 라인
//focusFirstElement: function(form) {
//    form = $(form);
//    form.findFirstElement().activate();
//    return form;
//}
