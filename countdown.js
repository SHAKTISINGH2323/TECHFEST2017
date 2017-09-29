$(function(){

    $('#countdown').countdown('2015/01/01', function(event) {
        $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
    });



});
