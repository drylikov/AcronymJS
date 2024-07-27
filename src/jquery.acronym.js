/*
    Acronym Jquery Plugin
    
    Version: 1.0
    http://gleero.com/
 */

(function ($) {

    var cssExist = false;

    // Adding new css rule
    var CreateStyle = function(o) {
        
        var css = '.ajs-smallcaps { font-size: ' + o.size + '; letter-spacing: ' + o.tracking + '; margin-right: -' + o.tracking + ';}';

        var style = document.createElement('style');
        style.type = 'text/css';

        // Crossbrowser
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        $('head').append(style);
    };

    // Library
    $.fn.acronym = function (o) {

        var re = /(^|[!@#$%\^&*\(\)<>\.,\-\_\+\=\{\}\[\]\^]|\s)([A-ZА-Я][A-ZА-ЯЁ.\d]{1,5})([!@#$%\^&*\(\)<>\.,\-\_\+\=\{\}\[\]\^]|\s|$)/g;

        var options = {
            tracking: "0.15em",
            size: "90%"
        };

        $.extend(options, o);

        // On first time adding styles
        if (!cssExist) {
            new CreateStyle(options);
            cssExist = true;
        }

        this.each(function () {
            var text = $(this).html();
            text = text.replace(re, "$1<span class=\"ajs-smallcaps\">$2</span>$3");
            $(this).html(text);
        });

        return this;
      };

})(jQuery);
