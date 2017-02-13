//-------------------------------------
//  Prototype.ScriptFragment
//-------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var sport = '<script><p>스포츠</p></script>농구, 축구';

        var script = sport.replace(new RegExp(Prototype.ScriptFragment, 'img'), '');
        $('show1').innerHTML = 'ScriptFragment : ' + script;
    }
}

// 15 라인
//ScriptFragment: '(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)',
