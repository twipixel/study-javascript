//-----------------------------------------------------
// Ajax.Updater
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', AJAXComm.fileReceive);
});
var AJAXComm = {
    fileReceive: function(event) {
        var URL = 'welcome.txt';
        new Ajax.Updater('show1', URL);
        new Ajax.Updater({success: 'show2'}, 'top.txt');

        new Ajax.Updater({success: 'show3', failure: 'show4'}, 'bottom.txt');
        new Ajax.Updater({success: 'show5'}, 'NotFound.txt', {
            onFailure: function(xmlHttp) {
                $('show6').innerHTML = 'onFailure : ' + xmlHttp.status;
            }
        }),
        new Ajax.Updater({success: 'show7'}, 'before.txt', {
            parameters: {textInput: Form.Element.serialize('textInput')}
        });
    }
}

// 983 ∂Û¿Œ
//Ajax.Updater = Class.create();
//
//Object.extend(Object.extend(Ajax.Updater.prototype, Ajax.Request.prototype), {
//    initialize: function(container, url, options) {
//        this.container = {
//            success: (container.success || container),
//            failure: (container.failure || (container.success ? null : container))
//        }
//
//        this.transport = Ajax.getTransport();
//        this.setOptions(options);
//
//        var onComplete = this.options.onComplete || Prototype.emptyFunction;
//        this.options.onComplete = (function(transport, param) {
//            this.updateContent();
//            onComplete(transport, param);
//        }).bind(this);
//
//        this.request(url);
//  },
