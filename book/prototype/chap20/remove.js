//-----------------------------------------------------
// Element.remove
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('removeLow', 'click', Show.low);
    Event.observe('removeMiddle', 'click', Show.middle);
    Event.observe('removeSport', 'click', Show.sport);
});
var Show = {
    low: function(event) {
        try {
    	    $('middleElmt').removeChild($('lowElmt'));
        } catch (e) {
            $('show1').innerHTML = '최하위 엘리먼트가 존재하지 않습니다.';     
        }
    },
    middle: function(event) {
        try {
            $('middleElmt').remove();
        } catch (e) {
            $('show1').innerHTML = '중간 엘리먼트가 존재하지 않습니다.';     
        }
    },
    sport: function(event) {
        try {
            $('likeSport').remove();
        } catch (e) {
            $('show1').innerHTML = '스포츠 엘리먼트가 존재하지 않습니다.';     
        }
    }
}

// 1162 라인
//remove: function(element) {
//    element = $(element);
//    element.parentNode.removeChild(element);
//    return element;
//},
