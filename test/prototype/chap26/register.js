//-----------------------------------------------------
// Ajax.Responders
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', AJAXComm.welcome);
});
var UserMethod = {
    eventStatus: '',
    onCreate: function() {
        UserMethod.eventStatus += 'User onCreate, ';
    },
    onInteractive: function() {
        UserMethod.eventStatus += 'User onInteractive, ';
    }
}
var MoreMethod = {
    onInteractive: function() {
        UserMethod.eventStatus += 'More onInteractive ';
    }
}
var addMethod = {
    onInteractive: function() {
        UserMethod.eventStatus += 'Add onInteractive ';
    }
}
var AJAXComm = {
    welcome: function(event) {
        Ajax.Responders.register(UserMethod);
        Ajax.Responders.register(MoreMethod);
        Ajax.Responders.unregister(addMethod);

        var URL = 'welcome.txt';
        new Ajax.Request(URL, {
            onComplete: function(xmlHttp) {
                $('show1').innerHTML = xmlHttp.responseText;
                $('show2').innerHTML = '건수: ' + Ajax.activeRequestCount;
                $('show3').innerHTML = '실행: ' + UserMethod.eventStatus;
            }
        });
    }
}
