//contentList: the content list (jQuery object)
//currentClass: the current tab class name.
//eventType: switch tabs event. 
(function ($) {
    var defaults = {
        contentList: null,
        currentClass: '',
        eventType: "click"
    };

    $.fn.switchTabs = function (options) {
        var settings= $.extend({}, defaults, options);
        var tabs = this;
        return this.each(function (index) {
            var _this = $(this);
            _this.bind(settings.eventType, function () {
                tabs.removeClass(settings.currentClass);
                $(this).addClass(settings.currentClass);
                if (settings.contentList) {
                    settings.contentList.filter(":visible").hide();
                    settings.contentList.eq(index).show();
                }
            });
        });
    }
})(jQuery);