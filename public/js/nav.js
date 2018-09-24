$(document).ready(function() {
    var pathname = window.location.pathname;
    var activeList = $('#sidebar a[href="'+pathname+'"]').parent()
    activeList.addClass('active');
    if(activeList.parent().hasClass("collapse")){
        activeList.parent().collapse("show");
    }
});