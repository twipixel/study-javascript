//-----------------------------------------------------
// Form.Element.activate()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
    Show.disable();
});
var Show = {
    disable: function() {
        Form.Element.disable('likeRiver');
        Form.Element.disable('likeMountain');
        $('show1').innerHTML = '입력할 수 없는 상태입니다.'
    },
    okClick: function(event) {
        Form.Element.enable('likeRiver');
        Form.Element.enable('likeMountain');
        $('show1').innerHTML = '입력 가능하게 설정하였습니다.'
    }
}

//2020 라인
//enable: function(element) {
//    element = $(element);
//    element.blur();
//    element.disabled = false;
//    return element;
//}
