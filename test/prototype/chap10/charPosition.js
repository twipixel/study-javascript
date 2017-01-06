//-------------------------------------
// 매치 위치
//-------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var protoAjax = 'prototype framework';
        $('show1').innerHTML = '^p : ' + protoAjax.match(/^p/);

        $('show2').innerHTML = 'e$ : ' + protoAjax.match(/e$/);
        $('show3').innerHTML = 'k$ : ' + protoAjax.match(/k$/);
    }
}
