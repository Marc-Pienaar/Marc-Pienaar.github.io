$(document).ready(function () {
    var currentActiveTab = '#home'; // Initial active tab
    $('.tabContent').hide();
    $('#home').show();
    $('#tabs li a:first').addClass('active');

    $('#tabs a').click(function (e) {
        e.preventDefault();
        var tab = $(this).attr('href');
        $('.active').removeClass('active');
        $(this).addClass('active');
        $('.tabContent').hide();
        $(tab).fadeIn();
        currentActiveTab = tab; // Store current active tab
    });
});
