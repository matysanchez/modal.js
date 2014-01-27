/*
 * modal.js
 * http://github.com/hangnest/modal.js
 *
 * @author Matías Sanchez - GitHub: @matysanchez
 * @version 0.1
 * @license MIT
 */

(function($) {
    // Here we are, this is a really tiny and powerful plugin
    $.fn.modal = function(options) {
        var settings = $.extend({
            showElement: $($(this).attr("modalToShow")),
            closeButton: $(".close"),
            action: null,
            subFunction: null
        }, options );

        // Open in a manual way
        if(settings.action === "open") {
            settings.showElement.fadeIn();
        }

        // Close in a manual way
        if(settings.action === "close") {
            settings.showElement.fadeOut();
        }

        // This plugin is only for click events
        this.click(function() {
            // If we click on the close button, the modal closes
            $(settings.closeButton, settings.showElement).click(function() {
                settings.showElement.fadeOut();
            });

            // If there is not action set, show me the modal
            if(!settings.action) settings.showElement.fadeIn();

            // When press ESC, close the modal
            $(document).keyup(function(e) {
                if (e.keyCode == 27)
                    settings.showElement.fadeOut();
            });

            // If we have a function to run; run that function, like ajax calls
            if(settings.subFunction) settings.subFunction();
        });
    };
}(jQuery));