//-----------------------------------------------------
// Form.Element.disable()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var rtnMountain = Form.Element.disable('likeMountain');
        $('show1').innerHTML = rtnMountain.id + '을 입력 불가로 설정하였습니다.';
    }
}

//2014 라인
//disable: function(element) {
//    element = $(element);
//    element.disabled = true;
//    return element;
//},
