//-----------------------------------------------------
// Element.update
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var replaceSport = '농구, 마라톤';
        $('likeSport').update(replaceSport);

        var execScript = "<script>$('show1').innerHTML = '한라산, 설악산';</script>";
        $('show1').update(execScript);

        var dualScript = "축구<script>$('show3').innerHTML = '탁구, 수영';</script>";
        $('show2').update(dualScript);
    }
}

// 1168 라인
//update: function(element, html) {
//    html = typeof html == 'undefined' ? '' : html.toString();
//    $(element).innerHTML = html.stripScripts();
//    setTimeout(function() {html.evalScripts()}, 10);
//    return element;
//},
