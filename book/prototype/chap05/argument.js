//-----------------------------------------------------
// 아규먼트
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        Show.showList('농구', '축구', '마라톤');
    },
    showList: function() {
        for (var i = 0; i < arguments.length; i++) {
            $('show' + i).innerHTML  =  arguments[i];
        }
    }
}
