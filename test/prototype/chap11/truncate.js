//-----------------------------------------------------
// String.truncate
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var arrayCount = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $('show1').innerHTML = arrayCount.truncate();

        $('show2').innerHTML = arrayCount.truncate(10);

        $('show3').innerHTML = arrayCount.truncate(10, '부족');

        $('show4').innerHTML = arrayCount.truncate(40, '부족');
    }
}

// 184 라인
//truncate: function(length, truncation) {
//    length = length || 30;
//    truncation = truncation === undefined ? '...' : truncation;
//    return this.length > length ?
//        this.slice(0, length - truncation.length) + truncation : this;
//},
