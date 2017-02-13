//-------------------------------------
// 간격 수량자
//-------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var matchBase = 'Suuun~ Suuuuu';
        $('show1').innerHTML = '기준, match() : ' + matchBase;

        $('show2').innerHTML = 'u{1} : ' + matchBase.match(/u{1}/g).inspect();
        $('show3').innerHTML = 'u{2} : ' + matchBase.match(/u{2}/g).inspect();

        $('show4').innerHTML = 'u{2,} : ' + matchBase.match(/u{2,}/g).inspect();
        $('show5').innerHTML = 'u{5,} : ' + matchBase.match(/u{5,}/g).inspect();

        $('show6').innerHTML = 'u{1,3} : ' + matchBase.match(/u{1,3}/g).inspect();
        $('show7').innerHTML = 'u{4,5} : ' + matchBase.match(/u{4,5}/g).inspect();
    }
}
