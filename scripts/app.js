
// toggle black content boxes visibility
$('.blackbox2').hide();
$('.projects-stack').show('slow');

$('.about-btn').click(function () {
    $('.about-stack').toggle('slow');
    $('.contact-stack').hide('slow');
    $('.projects-stack').hide('slow');

});

$('.contact-btn').click(function () {
    $('.contact-stack').toggle('slow');
    $('.about-stack').hide('slow');
    $('.projects-stack').hide('slow');
});

$('.projects-btn').click(function () {
    $('.projects-stack').toggle('slow');
    $('.contact-stack').hide('slow');
    $('.about-stack').hide('slow');
}); 

/*
$('ol.links > .btn').click(function() {
    if ($('this').prop("")
    $(this).css("color", "red");
});*/
