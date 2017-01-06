//-------------------------------------
// 역슬래스 특수문자
//-------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var matchBase = '%Web 2.0_';
        $('show1').innerHTML = '/역슬래시w/ : ' + matchBase.match(/\w/);

        var objRegExp = new RegExp('\w');
        $('show2').innerHTML = 'RegExp(역슬래시w) : ' + objRegExp.exec(matchBase);

        objRegExp = new RegExp('\\w');
        $('show3').innerHTML = 'RegExp(역슬래스2w) : ' + objRegExp.exec(matchBase);

        $('show4').innerHTML = '역슬래시W : ' + matchBase.match(/\W/);

        $('show5').innerHTML = 'x57 : ' + matchBase.match(/\x57/);
        $('show6').innerHTML = 'u0065 : ' + matchBase.match(/\u0065/);

        $('show7').innerHTML = '역슬래시sw : ' + matchBase.match(/\s\w/);
        $('show8').innerHTML = '역슬래시S : ' + matchBase.match(/\S/);
    }
}
