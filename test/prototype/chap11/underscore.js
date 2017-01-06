//-----------------------------------------------------
// String.underscore
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var backString = 'borderLeftColor';
        $('show1').innerHTML = backString.underscore();

        var underLineString = '::font-Size';
        $('show2').innerHTML = underLineString.underscore();
    }
}

// 277 라인
//underscore: function() {
//    return this.gsub(/::/, '/').gsub(/([A-Z]+)([A-Z][a-z])/,'#{1}_#{2}').gsub(/([a-z\d])([A-Z])/,'#{1}_#{2}').gsub(/-/,'_').toLowerCase();
//},
