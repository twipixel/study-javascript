//-----------------------------------------------------
// Object.extend (오버라이딩)
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var Hong = {name: '홍길동'};
        var keyKind = {home: '집 열쇠', office: '회사 열쇠'};

        Object.extend(Hong, keyKind);   
        $('show1').innerHTML = 'Hong.name : ' + Hong.name;

        var Jumong = {name: '주몽', tool: '활/화살'};
        $('show2').innerHTML = 'Jumong.name : ' + Jumong.name;

        Object.extend(Hong, Jumong);

        $('show3').innerHTML = 'Hong.name : ' + Hong.name;
        $('show4').innerHTML = 'Hong.tool : ' + Hong.tool;
    }
}

