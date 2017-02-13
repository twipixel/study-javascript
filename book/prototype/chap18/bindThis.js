//-----------------------------------------------------
// Function.bind()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        window.sport = '마라톤, 수영';
        Base.title('1');
        Base.methodCall(Base.title);
    }
}
var Base = {
    sport: '농구, 축구',
    title: function(count) {
        $('show' + count).innerHTML =  this.sport;
    },
    methodCall: function(methodName) {
        methodName('2');
    }
};
