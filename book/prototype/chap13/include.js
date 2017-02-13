//-----------------------------------------------------
// objectRange.include
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var falseRange = new ObjectRange(-2, 2, false);
        $('show1').innerHTML = 'include(0) : ' + falseRange.include(0); 
        $('show2').innerHTML = 'include(-5) : ' + falseRange.include(-5);
        $('show3').innerHTML = 'include(3) : ' + falseRange.include(3);
    }
}

// 740 라인
//include: function(value) {
//    if (value < this.start)
//        return false;
//    if (this.exclusive)
//        return value < this.end;
//    return value <= this.end;
//}
