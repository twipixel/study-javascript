//-----------------------------------------------------
// prototype
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
function LikeSport(likeOne, likeTwo) {
    this.likeOne = likeOne;
    this.likeTwo = likeTwo;  
}
var Show = {
    okClick: function(event) {
        var SportList = new LikeSport('농구', '축구');
        $('show1').innerHTML = 'SportList.likeOne = ' + SportList.likeOne;
        $('show2').innerHTML = 'SportList.likeTwo = ' + SportList.likeTwo;

        var SportAdd = new LikeSport('마라톤', '수영');
        $('show3').innerHTML = 'SportAdd.likeOne = ' + SportAdd.likeOne;
        $('show4').innerHTML = 'SportAdd.likeTwo = ' + SportAdd.likeTwo;

        SportAdd.likeOne = '테니스';
        $('show5').innerHTML = 'SportAdd.likeOne = ' + SportAdd.likeOne;
        $('show6').innerHTML = 'SportList.likeOne = ' + SportList.likeOne;
    }
}
