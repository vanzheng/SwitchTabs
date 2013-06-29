//contentList: the content list (jQuery object)
//className: the current tab class name.
//eventType: switch tabs event. 
(function ($) {
    $.fn.switchTabs = function (options) {
        var settings = $.extend({
            contentList: null,
            className: "",
            eventType: "click"
        }, options);

        var tabs = $(this);
        return this.each(function (index) {
            $(this).bind(settings.eventType, function () {
                tabs.filter("." + settings.className).removeClass(settings.className);
                $(this).addClass(settings.className);
                if (settings.list) {
                    settings.list.filter(":visible").hide();
                    settings.list.eq(index).show();
                }
            });
        });
    }
})(jQuery);