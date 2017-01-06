//-------------------------------------
// 수량자
//-------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var matchBase = 'Suuun~ Soo';
        $('show1').innerHTML = '기준, match() : ' + matchBase;
        $('show2').innerHTML = 'Su+ : ' + matchBase.match(/Su+/g);
        $('show3').innerHTML = 'Su{1,} : ' + matchBase.match(/Su{1,}/g);

        $('show4').innerHTML = 'Su* : ' + matchBase.match(/Su*/g).inspect();
        $('show5').innerHTML = 'Su{0,} : ' + matchBase.match(/Su{0,}/g).inspect();
        
        $('show6').innerHTML = 'Su? : ' + matchBase.match(/Su?/g).inspect();
        $('show7').innerHTML = 'Su{0,1} : ' + matchBase.match(/Su{0,1}/g).inspect();
    }
}
