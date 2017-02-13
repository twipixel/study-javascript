//-----------------------------------------------------
// String.sub
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var goodsPrice = 'price1: 100, price2: 200, price3: 100';
        $('show1').innerHTML = goodsPrice.sub('price', 'Amount');

        var itemDesc = '[noteBook], [Computer], [Mobile]';
        $('show2').innerHTML = itemDesc.sub(/\[|\]/, '\*', 3);

        var sportDesc = '축구 농구 배구 탁구';
        var changeData = function(match) {
             return match[0] + '종목, ';
        };
        $('show3').innerHTML = sportDesc.sub(/(.구)/, changeData, 2);
    }
}

// 169 라인
//sub: function(pattern, replacement, count) {
//    replacement = this.gsub.prepareReplacement(replacement);
//    count = count === undefined ? 1 : count;
//
//    return this.gsub(pattern, function(match) {
//        if (--count < 0) return match[0];
//        return replacement(match);
//    });
//},
