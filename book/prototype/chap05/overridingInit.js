//-----------------------------------------------------
// 생성자 오버라이딩
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Hong = Class.create(); 
Hong.prototype = {
    initialize: function(name, sport) {
        this.name = name;
        this.sport = sport;
    },
    playGame: function(count) {
        $('show' + count).innerHTML = this.name + ', ' + this.sport;
    }
};

var Jumong = Class.create();
Jumong.prototype = Object.extend(new Hong(), {
    initialize: function(name, sport) {
        this.name = name;
        this.sport = sport;
    }
}); 
var Show = {
    okClick: function(event) {
        var sportHong = new Hong('홍길동', '축구');
        sportHong.playGame('1');

        var sportJumong = new Jumong('주몽', '농구'); 
        sportJumong.playGame('2');
    }
}
