// declare variable for today's date using moment.js
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// display current day and date
// make function available after document is loaded
$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".describe").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-section").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local storage if any
    $("#hour8 .describe").val(localStorage.getItem("hour8"));
    $("#hour9 .describe").val(localStorage.getItem("hour9"));
    $("#hour10 .describe").val(localStorage.getItem("hour10"));
    $("#hour11 .describe").val(localStorage.getItem("hour11"));
    $("#hour12 .describe").val(localStorage.getItem("hour12"));
    $("#hour13 .describe").val(localStorage.getItem("hour13"));
    $("#hour14 .describe").val(localStorage.getItem("hour14"));
    $("#hour15 .describe").val(localStorage.getItem("hour15"));
    $("#hour16 .describe").val(localStorage.getItem("hour16"));
    $("#hour17 .describe").val(localStorage.getItem("hour17"));

    timeTracker();
})