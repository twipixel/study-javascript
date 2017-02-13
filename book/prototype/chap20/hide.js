//-----------------------------------------------------
// Element.hide
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var returnElmt = $('likeSport').hide();
        $('show1').innerHTML = '숨겨진 엘리먼트: ' + returnElmt;

        returnElmt = $('soccer').hide();
        $('show2').innerHTML = '숨겨진 엘리먼트: ' + returnElmt.id;
    
        returnElmt = Element.hide('basketBall');
        $('show3').innerHTML = '숨겨진 엘리먼트: ' + returnElmt;
    }
}

//1152 라인
//hide: function(element) {
//    $(element).style.display = 'none';
//    return element;
//},
