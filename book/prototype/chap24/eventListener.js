//-----------------------------------------------------
// HTML 엘리먼트에 이벤트 리스너 설정
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    var clickChoice = $('elementClick');

	if (clickChoice.addEventListener) {
		clickChoice.addEventListener('click', Show.webPage, false);
	} else {
		clickChoice.attachEvent('onclick', Show.webPage);
	}
});
var Show = {
    webPage: function() {
        $('show1').innerHTML = '클릭하였습니다.';
    }
}

//window.onload = function()	{
//	var clickChoice = $('elementClick');
//
//	if (clickChoice.addEventListener) {
//		clickChoice.addEventListener(click, Show.webPage, false);
//	} else {
//		clickChoice.attachEvent('onclick', Show.webPage);
//	}
//}
//var Show = {
//    webPage: function() {
//        $('show1').innerHTML = '클릭하였습니다.';
//    }
//}

