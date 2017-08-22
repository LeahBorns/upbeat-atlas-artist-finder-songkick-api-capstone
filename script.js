$(document).ready(function () {
    $.ajax({
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
    });
})
