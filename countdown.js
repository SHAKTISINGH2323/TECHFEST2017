$(function(){

    $('.countdown').countdown('2017/11/10', function(event) {
        $(this).html(event.strftime('%w Weeks %d Days %H H : %M M : %S S'));
    });
    console.log("Website creator : Shakti Singh , Shubham Kushwah and Aayush kumar");
});
