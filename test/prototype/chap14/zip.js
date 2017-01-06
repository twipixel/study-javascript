//-----------------------------------------------------
// Enumerable.zip
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = ['농구', '축구'];
        var member = [5, 11, 777];
        var gameTime = ['48', '90', '무제한'];

        $('show1').innerHTML = 'likeSport: ' + likeSport.zip(member, gameTime).inspect();
        $('show2').innerHTML = 'gameTime: ' + gameTime.zip(likeSport, member).inspect();

        var returnArray = gameTime.zip(likeSport, member, function(value) {
            return value[0] + ', ' + value[1] + ', ' + value[2];
        });
        $('show3').innerHTML = '이터레이터: ' + returnArray.inspect();
        $('show4').innerHTML = '문자열: ' + returnArray.toString();
    }
}

// 494 라인
//zip: function() {
//    var iterator = Prototype.K, args = $A(arguments);
//    if (typeof args.last() == 'function')
//        iterator = args.pop();
//
//    var collections = [this].concat(args).map($A);
//    return this.map(function(value, index) {
//        return iterator(collections.pluck(index));
//    });
//},
