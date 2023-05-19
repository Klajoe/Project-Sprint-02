$(document).ready(function() {
    $("#datepicker").datepicker();

    $('#submit').click(function() {
        var username = $('#username').val();
        var moviename = $('#moviename').val();
        var comment = $('#comment').val();
        var date = $('#datepicker').val();

        if (username !== '' && moviename !== '' && comment !== '') {
            var commentHTML = '<div class="comment">' +
                '<div class="username">' + username + '</div>' +
                '<div class="moviename">' + moviename + '</div>' +
                '<div class="date">' + date + '</div>' +
                '<div class="content">' + comment + '</div>' +
                '</div>';

            $('.comments-container').prepend(commentHTML);

            // İlgili alanları temizle
            $('#username').val('');
            $('#moviename').val('');
            $('#comment').val('');
            $('#datepicker').val('');
        }
    });
});