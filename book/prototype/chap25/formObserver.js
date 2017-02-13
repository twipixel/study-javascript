//-----------------------------------------------------
// Form.Observer
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    new Form.Observer('formOne', 0.7, Show.valueChange);
});
var Show = {
    valueChange: function(element, value) {
        $('show1').innerHTML = element.id + ': ' + value;
    }
}

//2115 라인
/*
Form.Observer = Class.create();
Form.Observer.prototype = Object.extend(new Abstract.TimedObserver(), {
    getValue: function() {
        return Form.serialize(this.element);
    }
});
*/