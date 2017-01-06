//-----------------------------------------------------
// Element.readAttribute
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('show1').innerHTML = 'type: ' + $('mountain').readAttribute('type');
        $('show2').innerHTML = 'value: ' + $('sport').readAttribute('value');
    }
}

// 1269 라인
//readAttribute: function(element, name) {
//    element = $(element);
//    if (document.all && !window.opera) {
//        var t = Element._attributeTranslations;
//        if (t.values[name]) return t.values[name](element, name);
//        if (t.names[name])  name = t.names[name];
//        var attribute = element.attributes[name];
//        if(attribute) return attribute.nodeValue;
//    }
//    return element.getAttribute(name);
//},
//  readAttribute: function(element, name) {
//    element = $(element);
//    if (document.all && !window.opera) {
//      var t = Element._attributeTranslations;
//      if (t.values[name]) return t.values[name](element, name);
//      if (t.names[name])  name = t.names[name];
//      var attribute = element.attributes[name];
//      if(attribute) return attribute.nodeValue;
//    }
//    return element.getAttribute(name);
//  },
