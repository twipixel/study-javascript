//-----------------------------------------------------
// String.capitalize
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var smallString = 'ajax';
        $('show1').innerHTML = smallString.capitalize();

        var largeString = 'AJAX FRAMEWORK';
        $('show2').innerHTML = largeString.capitalize();
    }
}

// 273 라인
//capitalize: function(){
//    return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
//},
