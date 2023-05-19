$(document).ready(function() {
    $("#datepicker").datepicker();

    $('#submit').click(function(e) {
        e.preventDefault();

        var username = $('#username').val();
        var moviename = $('#moviename').val();
        var comment = $('#comment').val();
        var date = $('#datepicker').val();

        if (username === '' || moviename === '' || comment === '') {
            alert('Please fill in all the required fields.');
            return;
        }

        var commentHTML = '<div class="comment">' +
            '<div class="username">' + username + '</div>' +
            '<div class="moviename">' + moviename + '</div>' +
            '<div class="date">' + date + '</div>' +
            '<div class="content">' + comment + '</div>' +
            '</div>';

        $('.comments-container').prepend(commentHTML);

        // Clear the input fields
        $('#username').val('');
        $('#moviename').val('');
        $('#comment').val('');
        $('#datepicker').val('');
    });
});