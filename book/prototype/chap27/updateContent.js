//-----------------------------------------------------
// Ajax.Updater
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', AJAXComm.fileReceive);
});
var AJAXComm = {
    fileReceive: function(event) {
        new Ajax.Updater('show1', 'before.txt', {
            insertion: Insertion.Before
        });
         new Ajax.Updater('show1', 'top.txt', {
            insertion: Insertion.Top
        });

        new Ajax.Updater({success: 'show1'}, 'after.txt', {
            insertion: Insertion.After
        });       
        new Ajax.Updater({success: 'show1'}, 'bottom.txt', {
            insertion: Insertion.Bottom
        });
    }
}

//1004 ∂Û¿Œ
//updateContent: function() {
//    var receiver = this.container[this.success() ? 'success' : 'failure'];
//    var response = this.transport.responseText;
//
//    if (!this.options.evalScripts) response = response.stripScripts();
//
//    if (receiver = $(receiver)) {
//        if (this.options.insertion)
//            new this.options.insertion(receiver, response);
//        else
//            receiver.update(response);
//    }
//
//    if (this.success()) {
//        if (this.onComplete)
//          setTimeout(this.onComplete.bind(this), 10);
//    }
//}

