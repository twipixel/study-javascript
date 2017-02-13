//-----------------------------------------------------
// String.stripTags
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var riverMtnTag = '<div id="riverMtn">아름다운 우리 강산</div>';
        var tagStrip = riverMtnTag.stripTags();

        if (window.ActiveXObject) {
            $('show1').innerText = riverMtnTag;
            $('show2').innerText = tagStrip;
        } else {
            $('show1').textContent = riverMtnTag;
            $('show2').textContent = tagStrip;
        };
    }
}

// 195 라인
//stripTags: function() {
//    return this.replace(/<\/?[^>]+>/gi, '');
//},
