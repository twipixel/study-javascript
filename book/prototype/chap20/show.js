//-----------------------------------------------------
// Element.show 
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.display);
    Event.observe('hiddenClick', 'click', Show.hidden);
    Show.noneDisplay(this);
});
var Show = {
    noneDisplay: function(event) {
        $('likeSport').hide();
    },
    display: function(event) {
        $('likeSport').show();
    },
    hidden: function(event) {
        var returnElmt = $('sportHidden').show()
        $('show1').innerHTML = '히든 엘리먼트: ' + returnElmt.id;
    }
}

// 1157 라인
//show: function(element) {
//    $(element).style.display = '';
//    return element;
//},
