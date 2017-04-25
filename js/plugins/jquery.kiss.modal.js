(function($) {
    var PLUGIN_NAME = 'kiss.modal',
        pluginData = function(obj) {
            return obj.data(PLUGIN_NAME);
        };

    var privateMethods = {
    };

    var publicMethods = {
        init : function(options) {
            return this.each(function() {
                var self = $(this);
                var content = $(self).html();
                var id = self.attr('id');
                var body = $('body');
                var c = "";
                c+='<div id="modal" class="content-locker ' + id + '">';
                c+='<div class="modal-container">';
                c+='<div class="modal-content pa5">';
                c+= content;
                c+='</div>';
                c+='</div>';
                c+='</div>';
                body.append(c);
                $('#modal').show();
                $('#content').addClass('blur');
                $('#navigation').addClass('blur');
            });
        },
        destroy : function() {
            return this.each(function() {
                $('#modal').remove();
                $('#content').removeClass('blur');
                $('#navigation').removeClass('blur');
            });
        },
    };

    $.fn.kissModal = function(method) {
        if (publicMethods[method]) {
            return publicMethods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return publicMethods.init.apply(this, arguments);
        } else {
            $.error('Method [' +  method + '] not available in $.kissModal');
        }
    };
})(jQuery);