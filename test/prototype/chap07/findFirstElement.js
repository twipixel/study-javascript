//-----------------------------------------------------
// Form.findFirstElement
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var firstElmt = Form.findFirstElement('formOne');
        $('show1').innerHTML = '첫 엘리먼트: ' + firstElmt.id + ', ' + firstElmt.value;
    }
}

// 1946 라인
//findFirstElement: function(form) {
//    return $(form).getElements().find(function(element) {
//        return element.type != 'hidden' && !element.disabled &&
//            ['input', 'select', 'textarea'].include(element.tagName.toLowerCase());
//    });
//},
