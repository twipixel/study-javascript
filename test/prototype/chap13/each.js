//-----------------------------------------------------
// objectRange._each()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var trueRange = new ObjectRange(-2, 2, true);
        var joinValue = '';
        trueRange.each(function(value) { 
            joinValue += value + ', ';
        });
        $('show1').innerHTML = joinValue; 

        var falseRange = new ObjectRange('가', '간', false);
        joinValue = '';
        falseRange.each(function(value) {
            joinValue += value + ', ';
        });
        $('show2').innerHTML = joinValue; 
    }
}

// 624 라인
//ObjectRange = Class.create();
//Object.extend(ObjectRange.prototype, Enumerable);
//Object.extend(ObjectRange.prototype, {
//    initialize: function(start, end, exclusive) {
//        this.start = start;
//        this.end = end;
//        this.exclusive = exclusive;
//    },
//
//    _each: function(iterator) {
//        var value = this.start;
//        while (this.include(value)) {
//            iterator(value);
//            value = value.succ();
//        }
//    },
