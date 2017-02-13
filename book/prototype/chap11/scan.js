//-----------------------------------------------------
// String.scan
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var resultData = [];
        var sportDesc = '축구 농구 배구 탁구';
        var changeData = function(match) {
             resultData.push(match[0]);
        };
        sportDesc.scan(/(.구)/, changeData);
        $('show1').innerHTML = resultData.inspect();
    }
}

// 179 라인
//scan: function(pattern, iterator) {
//    this.gsub(pattern, iterator);
//    return this;
//},
