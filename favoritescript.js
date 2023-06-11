$(document).ready(function() {
    // Click event handler for movie buttons
    $(".watch-btn").click(function(e) {
        e.preventDefault(); // Prevent the default button behavior
        
        var movieId = $(this).attr("data-movie-id"); // Get the movie ID from the data-movie-id attribute

        // Make an AJAX request to retrieve the movie information from the JSON file
        $.ajax({
            url: "movies.json",
            dataType: "json",
            success: function(data) {
                var movieInfo = data.movies[movieId - 1]; // Get the movie info based on the movie ID

                // Create HTML elements to display the movie information
                var image = $("<img>").attr("src", movieInfo.image);
                var title = $("<h2>").text(movieInfo.title);
                var genre = $("<span>").addClass("movie-type").text(movieInfo.genre);
                var description = $("<p>").text(movieInfo.description);
                
                // Create the youtube button
                var youtubeButton = $("<button>").text("Trailer").addClass("youtube-btn");

                // Clear the movie content
                $(".movie-content").empty();

                // Append the elements to the movie content
                $(".movie-content").append(image, title, genre, description, youtubeButton);

                // Click event handler for youtube button
                youtubeButton.one("click", function() {
                    var youtubeUrl = getyoutubeUrl(movieInfo.youtubeId);
                    if (youtubeUrl) {
                        // Open the youtube link in a new tab
                        window.open(youtubeUrl, "_blank");
                    } else {
                        console.log("youtube URL not found for movie ID: " + movieInfo.youtubeId);
                    }
                });
            },
            error: function() {
                console.log("Error loading movie information.");
            }
            
        });
    });

    // Function to get youtube URL based on movie ID
    function getyoutubeUrl(youtubeId) {
        switch (youtubeId) {
            case "1":
                return "https://www.youtube.com/watch?v=neY2xVmOfUM";
            case "2":
                return "https://www.youtube.com/watch?v=EXeTwQWrcwY";
            case "3":
                return "https://www.youtube.com/watch?v=NCCFleJPTAU";
            case "4":
                return "https://www.youtube.com/watch?v=XGk2EfbD_Ps";
            default:
                return "";
        }
    }
});
