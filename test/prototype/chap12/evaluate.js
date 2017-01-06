//-----------------------------------------------------
// Template.evaluate
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var itemTemplate = '코드: #{code}, 품명: #{desc}, \원산지: \#{origin}';
        var noteBook = {code: 'N01', desc: '노트북', origin: '대한민국'};

        var newObject = new Template(itemTemplate);
        $('show1').innerHTML = newObject.evaluate(noteBook);

        var colorTV = {code: 'TV01', desc: '칼라TV', origin: '대한민국'};
        $('show2').innerHTML = newObject.evaluate(colorTV);

        var goodsTemplate = '코드: [code], 품명: [desc], 원산지: [origin]';
        var goodsPattern = /(^|.|\r|\n)(\[([a-zA-Z_]+)\])/;
        var goodsObejct = new Template(goodsTemplate, goodsPattern);
        $('show3').innerHTML = goodsObejct.evaluate(colorTV);
    }
}

// 310 라인
//evaluate: function(object) {
//    return this.template.gsub(this.pattern, function(match) {
//        var before = match[1];
//        if (before == '\\') return match[2];
//        return before + String.interpret(object[match[3]]);
//    });
//}
