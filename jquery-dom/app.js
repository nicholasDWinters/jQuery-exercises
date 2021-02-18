$(function () {
    console.log("Let's get ready to party with jQuery!");
});

$('article').find('img').addClass('image-center');

$('article').find('p').last().remove();

$('#title').css('font-size', `${Math.floor(Math.random() * 100) + 1}px`);

$('<li>').text('ADDED LIST ITEM').appendTo('ol');

$('aside').children().remove();

$('<p>').text("I APOLOGIZE FOR THE LIST'S EXISTENCE, THAT WAS DUMB").appendTo('aside');

$('.form-control').on('change', function () {
    let $red = $('input').eq(0).val();
    let $blue = $('input').eq(1).val();
    let $green = $('input').eq(2).val();

    $('body').css('background-color', `rgb(${$red}, ${$green}, ${$blue})`);
})

$('img').on('click', function () {
    $(this).remove();
})
