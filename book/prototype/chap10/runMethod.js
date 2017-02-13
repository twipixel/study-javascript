//-------------------------------------
//  정규 표현 작성 방법
//-------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var protoAjax = 'prototype framework';
        $('show1').innerHTML = '패턴 지정 : ' + protoAjax.match(/^p/i);

        var pattern = /^p/i;
        $('show2').innerHTML = '문자열 변수 : ' + pattern.test(protoAjax);

        var objRegExp = new RegExp('^p', 'i');
        $('show3').innerHTML = 'RegExp 패턴 : ' + objRegExp;
        $('show4').innerHTML = 'RegExp 결과 : ' + objRegExp.test(protoAjax);

        $('show5').innerHTML = '직접 지정 : ' + /^p/i.exec('prototype framework');
    }
}
