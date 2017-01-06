//-----------------------------------------------------
// Array.reduce
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var oneNumber = ['one'];
        $('show1').innerHTML = '하나 : ' + oneNumber.reduce().inspect();

        var manyNumber = ['1', '2', '3', '4', '5'];
        $('show2').innerHTML = '다수 : ' + manyNumber.reduce().inspect();
    }
}

// 587 라인
//reduce: function() {
//    return this.length > 1 ? this : this[0];
//},
