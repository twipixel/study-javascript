//-------------------------------------
// 선택, 이스케이프, 점
//-------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var matchBase = 'prototype framework';
        $('show1').innerHTML = 'proto|frame : ' + matchBase.match(/proto|frame/);

        $('show2').innerHTML = '(/p(r|x)oto/) : ' + matchBase.match(/p(r|x)oto/).inspect();

        var captureOption = matchBase.match(/p(r|x)oto/);
        $('show3').innerHTML = 'captureOption[0] : ' + captureOption[0];
        $('show4').innerHTML = 'RegExp.$1 : ' + RegExp.$1;

        $('show5').innerHTML = '.p : ' + matchBase.match(/.p/);
        $('show6').innerHTML = 't. : ' + matchBase.match(/t./);
        $('show7').innerHTML = 't.* : ' + matchBase.match(/t.*/);

        var escapeBase = '^Ajax';
        $('show8').innerHTML = '\^A : ' + escapeBase.match(/\^A/);
    }
}
