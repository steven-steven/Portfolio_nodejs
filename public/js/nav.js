// $(document).ready(function() {
//     var pathname = window.location.pathname;
//     var activeList = $('#sidebar a[href="'+pathname+'"]').parent()
//     activeList.addClass('active');
//     if(activeList.parent().hasClass("collapse")){
//         activeList.parent().collapse("show");
//     }
// });

$(document).ready(function() {
    $('.myNavBar.sidebar').sidebar('setting', 'dimPage', false);
    $('.myNavBar.sidebar').sidebar({
        transition: 'overlay'
    });
    $('a.myMenu').click(()=>{
        $('.myNavBar.sidebar')
            .sidebar('toggle')
        ;
    });
    $('#toggleNavButton').click(()=>{
        $('.myNavBar.sidebar')
            .sidebar('toggle')
        ;
    });

    $('.ui.dropdown')
        .dropdown()
    ;

    // $('.ui .item').on('click', function() {
    //     $('.ui .item').removeClass('active');
    //     $(this).addClass('active');
    // });   
    var pathname = window.location.pathname;
    $('.ui .item[href="'+pathname+'"]').addClass('active');

    $('.ui.sticky')
        .sticky({
            offset: 80,
            context: '#mainColumn'
        })
    ;

    //tabs (experiences)
    $('.pointing.menu .item').tab();
    $('.tabular.menu .item').tab();
});