//-----------------------------------------------------
// String.toArray
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var baseData = '아름다운 우리 강산';
        var toArrayData = baseData.toArray();

        var resultData = '';
        for (var i = 0; i < toArrayData.length; i++) {
            resultData += toArrayData[i] + ',';
        }
        $('show1').innerHTML = resultData; 
    }
}

// 250 라인
//toArray: function() {
//    return this.split('');
//},
