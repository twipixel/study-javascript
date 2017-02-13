//-----------------------------------------------------
// Enumerable.include
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = ['농구', '탁구', '마라톤'];
        $('show1').innerHTML = '톤: ' + likeSport.include('톤');
        $('show2').innerHTML = '마라톤: ' + likeSport.include('마라톤');

        var arrayNumber = ['1', '2', '3'];
        $('show3').innerHTML = '3: ' + arrayNumber.member(3);
    }
}

// 402 라인
//include: function(object) {
//    var found = false;
//    this.each(function(value) {
//        if (value == object) {
//            found = true;
//            throw $break;
//        }
//    });
//    return found;
//},

// 518 라인
//Object.extend(Enumerable, {
//    member:  Enumerable.include,
//});
