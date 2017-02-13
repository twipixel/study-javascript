//-----------------------------------------------------
// Form.reset()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
         Form.reset('formName');
    }
}

//1874 라인
//reset: function(form) {
//    $(form).reset();
//    return form;
//},
