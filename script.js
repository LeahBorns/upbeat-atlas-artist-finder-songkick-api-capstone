$(document).ready(function () {

    //step 1 get the input from the user
    $("#searchBar").submit(function (event) {

        //force javacript to handle the submission
        event.preventDefault();

        //get the value from the input box
        let userSearch = $("#text-box").val();

        //use the value to call the getResults function defined below
        DataFromUser(userSearch);
    });

    //step2 using the input from the user make the API call to get the JSON response

    function DataFromUser(SearchArtist) {
        $.getJSON("http://api.songkick.com/api/3.0/events.json?location=clientip&apikey=ibjKuqIpOmtRftG3&jsoncallback=?",
            function (receiveData) {
                // data is JSON response object
                console.log(receiveData);
                //if there are no results it will empty the list
                if (receiveData.resultsPage.results.length == 0) {
                    alert("Sorry, artist not found");
                }
                //else there are results, call the display search results
                displayResults(receiveData.resultsPage.results.event);
            })
        $('#searchBar').prop('hidden', false);
    };
})

//step3 using the JSON response, populate the relevant part of your HTML with the variable inside the JSON

function displayResults(artistArray) {

    console.log(artistArray);

    //create an empty variable to store a new list item for each result
    let buildHtmlResults = "";

    $.each(artistArray, function (artistArrayKey, artistArrayValue) {
        buildHtmlResults += "<li>";
        buildHtmlResults += "<div class='event-details-start-date' >" + artistArrayValue.start.date + "</div>";
        buildHtmlResults += "<div class='event-details-venue' >" + artistArrayValue.venue.displayName + "</div>";
        buildHtmlResults += "<div class='event-details-city' >" + artistArrayValue.location.city + "</div>";
        buildHtmlResults += "<div class='event-details-button-wrapper' >";
        buildHtmlResults += "<a href='" + artistArrayValue.uri + "' class='event-details-button' target='_blank'>Details</a>";
        buildHtmlResults += "</div>";
        buildHtmlResults += "</li>";
    });

    //use the html output to show it in the index.html
    $('#search-results ul').html(buildHtmlResults);
};


/*$.ajax({
    type: "GET",
    url: "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=AzyGvxmzSHkVQzP80eYbcPgvtlufG7gw",
    async: true,
    dataType: "json",
    success: function (json) {
        console.log(json);
        // Parse the response.
        // Do other things.
    },
    error: function (xhr, status, err) {
        // This time, we do not end up here!
    }
});*/
