//-----------------------------------------------------
// Number.succ()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var userValue = 87;
        $('show1').innerHTML = '변수(10진수 87) : ' + Number(userValue).succ();
        $('show2').innerHTML = '10진수(87) : ' + (87).succ();

        $('show3').innerHTML = '8진수(127) : ' + Number(0127).succ();
        $('show4').innerHTML = '16진수(57) : ' + 0x57.succ();
    }
}

// 89 라인
//    succ: function() {
//        return this + 1;
//    },
