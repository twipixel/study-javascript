//-----------------------------------------------------
// 프로퍼티
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var SportObject = new Object();

        SportObject['12'] = '수영';
        $('show1').innerHTML  = "SportObject['12'] : " + SportObject[12];

        SportObject[0.77] = '수영';
        $('show2').innerHTML  = 'SportObject[0.77] : ' + SportObject[0.77];

        SportObject['swim'] = '수영';
        $('show3').innerHTML  = "SportObject['swim'] : " + SportObject['swim'];

        SportObject.swim = '수영';
        $('show4').innerHTML  = 'SportObject.swim : ' + SportObject.swim;

    //    SportObject[tennis] = '테니스';
    //    $('show5').innerHTML  = 'SportObject[tennis] : ' + SportObject[tennis];

        var soccer = 'abcde'
        SportObject[soccer] = '축구';
        $('show5').innerHTML  = 'SportObject[soccer] : ' + SportObject[soccer];
        $('show6').innerHTML  = "SportObject['abcde'] : " + SportObject['abcde'];
    }
}
