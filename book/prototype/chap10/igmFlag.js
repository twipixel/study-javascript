//-------------------------------------
//  i/g/m 변경자
//-------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var protoAjax = 'Java, JavaScript, ';
        $('show1').innerHTML = 'JAVA/i : ' + protoAjax.match(/JAVA/i);

        $('show2').innerHTML = 'JAVA/ig : ' + protoAjax.match(/JAVA/ig).inspect();

        var modValue = 'Ajax,\nframework\nframework';
        $('show3').innerHTML = '/^frame/ : ' + modValue.match(/^frame/);
        $('show4').innerHTML = '/^frame/m : ' + modValue.match(/^frame/m);
        $('show5').innerHTML = '/^frame/gm : ' + modValue.match(/^frame/gm).inspect();
    }
}
