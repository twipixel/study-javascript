//-----------------------------------------------------
// String.camelize
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var telNumber = '-010-1234-5678';
        $('show1').innerHTML = '-010-1234-5678 : ' + telNumber.camelize();

        var backColor = 'background-color';
        $('show2').innerHTML = 'background-color : ' + backColor.camelize();
    }
}

// 259 라인
//camelize: function() {
//    var parts = this.split('-'), len = parts.length;
//    if (len == 1) return parts[0];
//
//    var camelized = this.charAt(0) == '-'
//        ? parts[0].charAt(0).toUpperCase() + parts[0].substring(1)
//        : parts[0];
//
//    for (var i = 1; i < len; i++)
//        camelized += parts[i].charAt(0).toUpperCase() + parts[i].substring(1);
//
//    return camelized;
//},
