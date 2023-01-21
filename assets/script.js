//Function to check local storage for events and render onto page
renderSavedEvents();

function renderSavedEvents(){
    var savedEvents = JSON.parse(localStorage.getItem("saved"));
    if (savedEvents !== null){
        $('.time-block').each(function(){
            var timeblockHour = (parseInt($(this).attr("id")));
            for (var i=0; i<savedEvents.length; i++){
                if (savedEvents[i].hour == timeblockHour){
                    $(this).children('.description').children('textarea').val(savedEvents[i].text);
                }
            }
        })
    }
}

//puts the current date in the header
var today = moment();
$('#currentDay').text(today.format("dddd, Do MMMM YYYY"));

//targets all rows and checks the current time against each
var currentTime = moment().hour();
$('.time-block').each(function(){
    var timeblockHour = (parseInt($(this).attr("id")));
    if (timeblockHour === currentTime){
        $(this).children('.description').addClass("present");
    } else if (timeblockHour < currentTime){
        $(this).children('.description').addClass("past");
    } else if (timeblockHour > currentTime){
        $(this).children('.description').addClass("future");
    }
})

//function for saving text to local storage
function saveEvent(event){
    var eventText = $(event.target).parent().siblings('.description').children('textarea').val();
    var hourOfEvent = $(event.target).parent().parent().attr("id");
    var savedEvents = JSON.parse(localStorage.getItem("saved")) || [];
    var saved = {
        hour: hourOfEvent,
        text: eventText
    }
    //checks saved events for an event at the same hour, removes it
    for (var i=0; i<savedEvents.length; i++){
        if (savedEvents[i].hour == saved.hour){
            savedEvents.splice(i, 1);
            break;
        }
    }
    savedEvents.push(saved);
    localStorage.setItem("saved", JSON.stringify(savedEvents));
}

//on click event for save button, calls save function
$('.saveBtn i').on("click", saveEvent);