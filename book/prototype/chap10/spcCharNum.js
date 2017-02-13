//-------------------------------------
// 역슬래스 특수문자
//-------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var matchBase = '%Web 2.0';
        $('show1').innerHTML = '\d : ' + matchBase.match(/\d/);
        $('show2').innerHTML = '\D : ' + matchBase.match(/\D/);

        var matchFeed = '\fFF\nLF\rCR\tHT';
        $('show3').innerHTML = 'FF : ' + matchFeed.match(/\f/);
        $('show4').innerHTML = 'LF : ' + matchFeed.match(/\n/);
        $('show5').innerHTML = 'CR : ' + matchFeed.match(/\r/);
        $('show6').innerHTML = 'HT : ' + matchFeed.match(/\t/);
        $('show7').innerHTML = 'VT : ' + matchFeed.match(/\v/);
    }
}
