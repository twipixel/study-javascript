//-----------------------------------------------------
// Hash 타입 배열
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var LikeSport = {
    basketball : '농구',
    soccer : '축구'
}
var LikeFood = {
    korean: function() {
        $('show3').innerHTML  = '김치';
    },
    chinese: function() {
        $('show4').innerHTML  = '자장면';
    }
}
var Show = {
    okClick: function(event) {
        $('show1').innerHTML  = LikeSport.basketball;
        $('show2').innerHTML  = LikeSport.soccer;

        LikeFood.korean();
        LikeFood.chinese();
    }
}

