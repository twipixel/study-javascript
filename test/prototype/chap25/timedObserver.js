//-----------------------------------------------------
// Abstract.TimedObserver()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    new Form.Element.Observer('likeMountain', 0.2, Show.likeMountain);
    new Form.Element.Observer('likeRiver', 0.5, Show.likeRiver);
});

var Show = {
    likeMountain: function(element, value) {
        $('show1').innerHTML = '산: ' + element.id + ': ' + value;
    },
    likeRiver: function(element, value) {
        $('show2').innerHTML = '강: ' + element.id + ': ' + value;
    }
}

// 2083 라인
/*
Abstract.TimedObserver = function() {}
Abstract.TimedObserver.prototype = {
    initialize: function(element, frequency, callback) {
        this.frequency = frequency;
        this.element   = $(element);
        this.callback  = callback;

        this.lastValue = this.getValue();
        this.registerCallback();
    },

    registerCallback: function() {
        setInterval(this.onTimerEvent.bind(this), this.frequency * 1000);
    },

    onTimerEvent: function() {
        var value = this.getValue();
        var changed = ('string' == typeof this.lastValue && 'string' == typeof value
            ? this.lastValue != value : String(this.lastValue) != String(value));
        if (changed) {
            this.callback(this.element, value);
            this.lastValue = value;
        }
    }
}
*/

// 2108 라인
/* 
Form.Element.Observer = Class.create();
Form.Element.Observer.prototype = Object.extend(new Abstract.TimedObserver(), {
    getValue: function() {
      return Form.Element.getValue(this.element);
    }
});
*/
