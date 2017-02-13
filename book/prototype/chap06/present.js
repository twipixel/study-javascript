//-----------------------------------------------------
// Form.Element.present
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('show1').innerHTML = '산: ' + Form.Element.present('likeMountain');
        $('show2').innerHTML = '강: ' + Form.Element.present('likeRiver'); 
    }
}

//2001 라인
//present: function(element) {
//    return $(element).value != '';
//},
