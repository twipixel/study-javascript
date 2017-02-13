//-------------------------------------
// 캡처, 클래스, 하이픈
//-------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var matchBase = 'prototype framework';

        var captureOption = matchBase.match(/(?:type)/);
        $('show1').innerHTML = '(?:type) : ' + captureOption[0];
        $('show2').innerHTML = 'RegExp.$1 : ' + RegExp.$1;

        $('show3').innerHTML = 'proto(?=type) : ' + matchBase.match(/proto(?=type)/);
        $('show4').innerHTML = 'proto(?!frame) : ' + matchBase.match(/proto(?!frame)/);
 
        var familyName = '김희주, 김현주';
        $('show5').innerHTML = '김[희|현]주/g : ' + familyName.match(/김[희|현]주/g).inspect();
        $('show6').innerHTML = '김[^희]주/g : ' + familyName.match(/김[^희]주/);

        var numValue = '1234567';
        $('show7').innerHTML = '[3-5]/g : ' + numValue.match(/[3-5]/g).inspect();
        $('show8').innerHTML = '[^3-5] : ' + numValue.match(/[^3-5]/g).inspect();
    }
}
