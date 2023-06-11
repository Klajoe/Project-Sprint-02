$(document).ready(function() {
    // API key for accessing the YouTube Data API
    var apiKey = "AIzaSyAjukXlF88QE6xJU0saPNgdglbeb0c5-P4";

    // When a button with class "watch-btn" is clicked
    $(".watch-btn").click(function(e) {
        e.preventDefault();  // Prevent the default action of the button

        // Get the movie ID from the clicked button's data attribute
        var movieId = $(this).attr("data-movie-id"); 

        // Retrieve movie information from a JSON file using Ajax
        $.ajax({
            url: "movies.json",
            dataType: "json",
            success: function(data) {
                // Extract the movie information based on the movie ID
                var movieInfo = data.movies[movieId - 1]; 

                // Create HTML elements to display the movie information
                var image = $("<img>").attr("src", movieInfo.image);
                var title = $("<h2>").text(movieInfo.title);
                var genre = $("<span>").addClass("movie-type").text(movieInfo.genre);
                var description = $("<p>").text(movieInfo.description);

                // Clear the existing movie content
                $(".movie-content").empty();

                // Append the movie information elements to the movie content container
                $(".movie-content").append(image, title, genre, description);

                // Perform a GET request to search for YouTube videos related to the movie
                $.get("https://www.googleapis.com/youtube/v3/search", {
                    part: 'snippet',
                    maxResults: 1,
                    q: movieInfo.title + " trailer",  // Search query for movie trailer
                    key: apiKey  // Use the YouTube Data API key
                }, function(data) {
                    // Iterate over the retrieved video items
                    data.items.forEach(function(item){
                        // Create a video container div and embed the YouTube video using iframe
                        var videoDiv = $("<div></div>");
                        videoDiv.append("<iframe src='https://www.youtube.com/embed/" + item.id.videoId + "'></iframe>");
                        $(".movie-content").append(videoDiv);
                    });
                });
            },
            error: function() {
                console.log("Error loading movie information.");
            }
        });
    });
});
