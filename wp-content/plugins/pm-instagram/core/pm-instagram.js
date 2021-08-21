"use strict";

(function ($) {
    $(window).on('load', function () {
        if ($('#pm_instagram_feed_container').length) {
            let container = $('#pm_instagram_feed_container'),
                user_name = container.attr('data-username'),
                items_number = container.attr('data-itemsNumber'),
                columns = container.attr('data-columns'),
                margin = container.attr('data-margin');

            $.instagramFeed({
                'username': user_name,
                'container': "#pm_instagram_feed_container",
                'display_profile': false,
                'display_biography': false,
                'display_gallery': true,
                'styling': true,
                'items': items_number,
                'items_per_row': columns,
                'margin': margin
            });
        }
    });
})(jQuery);
