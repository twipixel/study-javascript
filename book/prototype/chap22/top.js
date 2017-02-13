//-----------------------------------------------------
// Insertion.Top
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('sportClick', 'click', Show.sport);
    Event.observe('zipClick', 'click', Show.zip);
});
var Show = {
    count: 0,
    zipSecond: 100,

    sport: function(event) {
        Show.count++;
        var showContent = '농구 (' + Show.count + ')' + '<br />'
                               + "<script>$('lastCount').innerHTML =" 
                               + "'최종번호: ' + Show.count</script>";
        new Insertion.Top('likeSport', showContent);
    },
    zip: function() {
        Show.zipSecond++;
        var trtdInsert = "<tr id='zipNumber'>"
                        + "<td>100-" + Show.zipSecond + "</td>" 
                        + "<td> 서울 "  + Show.zipSecond + "</td></tr>";
        new Insertion.Top('zipBody', trtdInsert);
    }
}

//1668 라인
//Insertion.Top = Class.create();
//Insertion.Top.prototype = Object.extend(new Abstract.Insertion('afterBegin'), {
//    initializeRange: function() {
//        this.range.selectNodeContents(this.element);
//        this.range.collapse(true);
//    },
//
//    insertContent: function(fragments) {
//        fragments.reverse(false).each((function(fragment) {
//            this.element.insertBefore(fragment, this.element.firstChild);
//        }).bind(this));
//    }
//});
