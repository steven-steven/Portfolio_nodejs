$(document).ready(function() {
    var pathname = window.location.pathname;
    $('.nav > li > a[href="'+pathname+'"]').addClass('active');
});