(function(a){a.easyconfirm={};a.easyconfirm.locales={};a.easyconfirm.locales.enUS={title:"Are you sure?",text:"Are you sure that you want to perform this action?",button:["Cancel","OK"],closeText:"close"};a.easyconfirm.locales.svSE={title:"Ã„r du sÃ¤ker?",text:"Ã„r du sÃ¤ker pÃ¥ att du vill genomfÃ¶ra denna Ã¥tgÃ¤rden?",button:["Avbryt","OK"],closeText:"stÃ¤ng"};a.easyconfirm.locales.itIT={title:"Sei sicuro?",text:"Sei sicuro di voler compiere questa azione?",button:["Annulla","Conferma"],closeText:"chiudi"};a.fn.easyconfirm=function(c){var e=a.fn.attr;a.fn.attr=function(f,h){var g=e.apply(this,arguments);if(f=="title"&&g===undefined){g=""}return g};var c=jQuery.extend({eventType:"click",icon:"help",minHeight:120,maxHeight:200},c);var b=jQuery.extend({},a.easyconfirm.locales.enUS,c.locale);var d=c.eventType;return this.each(function(){var i=this;var f=jQuery(i);var l=function(){if(h(i.href)){document.location=i.href}},h=function(p){if(p){var q=String(p).length;if(p.substring(q-1,q)!="#"){return true}}return false},g=function(){var q=a._data(i,"events");if(q){i._handlers=new Array();for(var p in q[d]){i._handlers.push(q[d][p])}f.unbind(d)}},j=function(){if(i._handlers!==undefined){for(var p in i._handlers){f.bind(d,i._handlers[p])}}};if(f.attr("title")!==null&&f.attr("title").length>0){b.text=f.attr("title")}var k=(c.dialog===undefined||typeof(c.dialog)!="object")?a('<div class="dialog confirm">'+b.text+"</div>"):c.dialog;var m={};m[b.button[0]]=function(){a(k).dialog("close")};m[b.button[1]]=function(){f.unbind(d,o);a(k).dialog("close");var p=a._data(i,"events");if(p||!h(i.href)){f.trigger(d)}else{l()}n()};a(k).dialog({autoOpen:false,resizable:false,draggable:true,closeOnEscape:true,width:"auto",minHeight:c.minHeight,maxHeight:c.maxHeight,buttons:m,title:b.title,closeText:b.closeText,modal:true,open:function(){a(this).closest(".ui-dialog").find(".ui-dialog-buttonpane button:eq(1)").focus()}});var o=function(p){p.stopImmediatePropagation();p.preventDefault();a(k).dialog("open")},n=function(){g();f.bind(d,o);j()};n()})}})(jQuery);