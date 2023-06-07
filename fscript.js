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
                
                // Create the IMDb button
                var imdbButton = $("<button>").text("Trailer").addClass("imdb-btn");

                // Clear the movie content
                $(".movie-content").empty();

                // Append the elements to the movie content
                $(".movie-content").append(image, title, genre, description, imdbButton);

                // Click event handler for IMDb button
                imdbButton.one("click", function() {
                    var imdbUrl = getImdbUrl(movieInfo.imdbId);
                    if (imdbUrl) {
                        // Open the IMDb link in a new tab
                        window.open(imdbUrl, "_blank");
                    } else {
                        console.log("IMDb URL not found for movie ID: " + movieInfo.imdbId);
                    }
                });
            },
            error: function() {
                console.log("Error loading movie information.");
            }
            
        });
    });

    // Function to get IMDb URL based on movie ID
    function getImdbUrl(imdbId) {
        switch (imdbId) {
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