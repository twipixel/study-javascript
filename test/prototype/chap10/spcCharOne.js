//-------------------------------------
// 역슬래스 특수문자: \b, \B, \cK
//-------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var matchBase = 'prototype framework';

        $('show1').innerHTML = 'work_b : ' + matchBase.match(/work\b/);
        $('show2').innerHTML = 'type_b : ' + matchBase.match(/type\b/);
        $('show3').innerHTML = 'proto_b : ' + matchBase.match(/proto\b/);

        $('show4').innerHTML = 'work_B : ' + matchBase.match(/work\B/);
        $('show5').innerHTML = 'proto_B : ' + matchBase.match(/proto\B/);

        var tabKey = 'prototype framework';
        var ctrlChar = tabKey.match(/\cK/);
        if (ctrlChar) $('show6').innerHTML = '\cK : Tab Key';	
    }
}
