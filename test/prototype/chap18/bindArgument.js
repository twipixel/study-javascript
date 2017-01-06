//-----------------------------------------------------
// Function.bind()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var playSport = Base.showSport.bind(Base, likeSport.title);
        playSport('농구', '축구', 'show1');
        playSport('탁구', '마라톤', '수영', 'show2');
    }
}
var likeSport = {
    title: '좋아하는 스포츠: '
}
var Base = {
    showSport: function() {
        parm = $A(arguments);
        element = parm.pop();
        $(element).innerHTML = parm.join(', ');
    }
}

// 68 라인
//Function.prototype.bind = function() {
//    var __method = this, args = $A(arguments), object = args.shift();
//    return function() {
//        return __method.apply(object, args.concat($A(arguments)));
//    }
//}
