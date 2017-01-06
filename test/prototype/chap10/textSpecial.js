//-------------------------------------
//  정규 표현
//-------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var protoAjax = 'prototype framework';
        $('show1').innerHTML = 'frame : ' + protoAjax.match(/frame/);
        $('show2').innerHTML = 'FRAME : ' + protoAjax.match(/FRAME/);

        $('show3').innerHTML = '^p : ' + protoAjax.match(/^p/);
        $('show4').innerHTML = '^P : ' + protoAjax.match(/^P/);
    }
}
