//TODO event should overwrite previous saved event

renderSavedEvents();

function renderSavedEvents(){
    var savedEvents = JSON.parse(localStorage.getItem("saved"));
    console.log(savedEvents);
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

var saveBtn = $('.saveBtn i');
var currentTime = moment().hour();

//puts the current date in the header
var today = moment();
$('#currentDay').text(today.format("dddd, Do MMMM YYYY"));

//targets all rows and checks the current time against each
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
    console.log(eventText);
    console.log(hourOfEvent);

    var savedEvents = JSON.parse(localStorage.getItem("saved")) || [];
    console.log('before', savedEvents);
    var saved = {
        hour: hourOfEvent,
        text: eventText
    }
    savedEvents.push(saved);
    console.log('after', savedEvents);
    localStorage.setItem("saved", JSON.stringify(savedEvents));
}

//on click event for save button, calls save function
saveBtn.on("click", saveEvent);