//-----------------------------------------------------
// welcome
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        document.getElementById('show1').innerHTML  = '안녕하세요';
        $('show2').innerHTML  = '좋은 하루 되세요';
    }
}
