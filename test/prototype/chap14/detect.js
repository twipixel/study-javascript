//-----------------------------------------------------
// Enumerable.detect
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = [1, 3, 5, 7, 9];

        $('show1').innerHTML = likeSport.detect(function(value) {
            return value > 3;
        });
        $('show2').innerHTML = likeSport.detect(function(value) {
            return value > 9;
        });

        // find() 메서드
        $('show3').innerHTML = likeSport.find(function(value) {
            return value < 5;
        });
    }
}

// 372 라인
//detect: function (iterator) {
//    var result;
//    this.each(function(value, index) {
//        if (iterator(value, index)) {
//            result = value;
//            throw $break;
//        }
//    });
//    return result;
//},

// 516 라인
//Object.extend(Enumerable, {
//    find:    Enumerable.detect,
//});
