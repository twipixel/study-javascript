//-----------------------------------------------------
// Class.create()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var LikeSport = Class.create();
LikeSport.prototype = {
    initialize: function(basketball, soccer) {
        this.basketball = basketball;
        this.soccer = soccer;
    }
}
var Show = {
    okClick: function(event) {
        var SportList  = new LikeSport('농구', '축구');
        $('show1').innerHTML = 'SportList.basketball = ' + SportList.basketball;
        $('show2').innerHTML = 'SportList.soccer = ' + SportList.soccer;
    }
}

// 20 라인
//var Class = {
//  create: function() {
//    return function() {
//      this.initialize.apply(this, arguments);
//    }
//  }
//}

