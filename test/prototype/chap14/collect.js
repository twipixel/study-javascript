//-----------------------------------------------------
// Enumerable.collect
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var oddNumber = [1, 3, 5, 7, 9];
        var evenNumber = [0, 2, 4, 6, 8];

        var resultCollect = oddNumber.collect(function(value, index) {
            return value + evenNumber[index];
        });
        $('show1').innerHTML = 'collect : ' + resultCollect.inspect();

        //map
        resultCollect = evenNumber.map(function(value, index) {
            return value + oddNumber[index];
        });
        $('show2').innerHTML = 'map : ' + resultCollect.inspect();
    }
}

// 364 라인
//collect: function(iterator) {
//    var results = [];
//    this.each(function(value, index) {
//        results.push((iterator || Prototype.K)(value, index));
//    });
//    return results;
//},

// 515 라인
//Object.extend(Enumerable, {
//    map:     Enumerable.collect,
//});
