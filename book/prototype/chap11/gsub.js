//-----------------------------------------------------
// String.gsub
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var goodsPrice = 'price1: 100, price2: 200, price3: 100';
        $('show1').innerHTML = goodsPrice.gsub('price', 'Amount');

        var itemDesc = '[noteBook], [Computer], [Mobile]';
        $('show2').innerHTML = itemDesc.gsub(/\[|\]/, '\*');

        var sportDesc = '축구 농구 배구 탁구';
        var changeData = function(match) {
             return match[0] + '종목, ';
        };
        $('show3').innerHTML = sportDesc.gsub(/(.구)/, changeData);
    }
}

// 153 라인
//gsub: function(pattern, replacement) {
//    var result = '', source = this, match;
//    replacement = arguments.callee.prepareReplacement(replacement);
//
//    while (source.length > 0) {
//        if (match = source.match(pattern)) {
//            result += source.slice(0, match.index);
//            result += String.interpret(replacement(match));
//            source  = source.slice(match.index + match[0].length);
//        } else {
//          result += source, source = '';
//        }
//    }
//    return result;
//},
