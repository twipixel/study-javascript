//-----------------------------------------------------
// Array.flatten
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = [['농구', 5], [['탁구', 2], ['축구', 11, '90분']]];
        $('show1').innerHTML = 'flatten()전 length: ' + likeSport.length;

        var flattenArray = likeSport.flatten();
        $('show2').innerHTML = 'flatten()후 length: ' + flattenArray.length;
        $('show3').innerHTML = 'flatten() 결과 : ' + flattenArray.inspect();    
    }
}

// 563 라인
//flatten: function() {
//    return this.inject([], function(array, value) {
//        return array.concat(value && value.constructor == Array ?
//        value.flatten() : [value]);
//    });
//},
