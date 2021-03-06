// Build an application that uses jQuery to do the following:

// Contains a form with two inputs for a title and rating along with a button to submit the form.
// When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
// When the button to remove is clicked, remove each title and rating from the DOM.

$('#submit').on('click', function (e) {
    e.preventDefault();

    let $movie = $('#movie').val();
    let $rating = $('#rating').val();

    if ($movie.length < 2) {
        alert('Titles need to be at least 2 characters!');
    } else {
        $('ul').append(`<li> ${$movie} - ${$rating} <button class = 'remove'> Remove </button></li>`)
        $('#movie').val('');
        $('#rating').val('');

    }

})

$('.container').on('click', '.remove', function () {
    $(this).parent().remove();
})

