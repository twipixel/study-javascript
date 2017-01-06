//-----------------------------------------------------
// String.dasherize
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var underLineString = 'border_left_color';
        $('show1').innerHTML = underLineString.dasherize();

        var DOMString = 'borderLeftColor';
        $('show2').innerHTML = underLineString.underscore().dasherize();
    }
}

// 281 라인
//dasherize: function() {
//    return this.gsub(/_/,'-');
//},
