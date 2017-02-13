//-----------------------------------------------------
// prototype 프로퍼티
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
function LikeSport(likeOne, likeTwo) {
    this.likeOne = likeOne;
    this.likeTwo = likeTwo;
}
function ShowSport(divNum) {
    $('show' + divNum).innerHTML  =  divNum + ': ' + this.likeOne + ', ' + this.likeTwo;
}
var Show = {
    okClick: function(event) {
        var SportList = new LikeSport('농구', '축구');
        $('show1').innerHTML = 'SportList.likeOne = ' + SportList.likeOne;
        $('show2').innerHTML = 'SportList.likeTwo = ' + SportList.likeTwo;

        LikeSport.prototype.useFunc = ShowSport;

        var AfterProto = new LikeSport('농구', '축구');
        AfterProto.useFunc('3'); 

        var ChangeValue = new LikeSport('수영', '마라톤');
        ChangeValue.useFunc('4'); 

        AfterProto.likeOne = '탁구';
        AfterProto.likeTwo = '테니스';
        AfterProto.useFunc('5');

        delete ChangeValue.likeTwo;
        ChangeValue.useFunc('6');
    }
}
