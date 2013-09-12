// the first of announcement block adjust
$('.index-announcement-block:first').addClass('first-announcement-block');

jQuery(function($) {
    $.ajaxSetup({
        cache: true
    });

    $('.share-button')
    .each(function() {
        $(this).attr('rel', 'nofollow');
    })
    .bind('click', function() {
        window.open($(this).attr('href'), $(this).attr('title'), 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
        return false;
    });
});


