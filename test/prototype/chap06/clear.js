//-----------------------------------------------------
// Form.Element.clear
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('show1').innerHTML = Form.Element.clear('likeMountain');
        $('show2').innerHTML = Form.Element.clear('likeRiver');
    }
}

//1996 라인
//clear: function(element) {
//    $(element).value = '';
//    return element;
//},
