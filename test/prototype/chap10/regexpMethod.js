//-------------------------------------
//  정규표현 메서드
//-------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var protoAjax = 'prototype framework';
        $('show1').innerHTML = 'match() : ' + protoAjax.match(/^p/i);

        $('show2').innerHTML = 'replace() : ' + protoAjax.replace(/^p/, 'Ajax p');

        $('show3').innerHTML = 'search() 매치 : ' + protoAjax.search(/t/);
        $('show4').innerHTML = 'search() 비매치 : ' + protoAjax.search(/Ajax/);

        var splitResult = protoAjax.split(/t/);
        $('show5').innerHTML = 'split() : ' + splitResult.inspect();
        $('show6').innerHTML = 'split() [2] : ' + splitResult[2];

        var objRegExp = new RegExp('TO', 'i');
        $('show7').innerHTML = 'RegExp.text() : ' + objRegExp.test(protoAjax);

        $('show8').innerHTML = 'RegExp.exec() : ' + objRegExp.exec(protoAjax);
    }
}
