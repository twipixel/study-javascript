//-----------------------------------------------------
// Function.bindAsEventListener
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('firstCheck', 'click', Show.showSport.bindAsEventListener(this, '설악산'));
    Event.observe('secondCheck', 'click', Show.showSport.bindAsEventListener(this, '한라산'));
});
var Show = {
    showSport: function(event, check) {
        var clickElement = Event.element(event);
        $('show1').innerHTML = '클릭 ID : ' + clickElement.id + ', ' + check;
    }
}

// 75 라인
//Function.prototype.bindAsEventListener = function(object) {
//    var __method = this, args = $A(arguments), object = args.shift();
//    return function(event) {
//        return __method.apply(object, [( event || window.event)].concat(args).concat($A(arguments)));
//    }
//}
