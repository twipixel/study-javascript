//-----------------------------------------------------
// Event.element
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    $('firstKey', 'secondKey').each(function(element) {
        Event.observe(element, 'keyup', Show.webPage);
    });
    Form.Element.focus('firstKey');
});

var Show = {
    webPage: function(event) {
        $('show1').innerHTML = '입력 값 : ' + event.keyCode;
        $('show2').innerHTML = '';

        if (event.keyCode == Event.KEY_TAB) {
            $('show2').innerHTML = 'Tab Key 클릭';                
        }
    }
}

// 2196 라인
//element: function(event) {
//    return event.target || event.srcElement;
//},
