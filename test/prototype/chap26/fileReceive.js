//-----------------------------------------------------
// Ajax.Request
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', AJAXComm.welcome);
});
var AJAXComm = {
    welcome: function(event) {
        var URL = 'welcome.txt';
        new Ajax.Request(URL, {
            onComplete: function(xmlHttp) {
                $('show1').innerHTML = xmlHttp.responseText;
            }
        });
    }
}
