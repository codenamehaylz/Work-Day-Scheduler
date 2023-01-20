var saveBtn = $('.saveBtn i');
var currentTime = moment().hour();
console.log(currentTime);

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

function saveText(){

}

//on click event for save button, calls save function
saveBtn.on("click", function(){
    console.log("You clicked the save button");
})










//! CREATING TIMEBLOCKS DYNAMICALLY


//function to create timeblocks
// var createTimeblock = function(){
//     var timeblock = $('<div class=row time-block"><div class="col col-1 hour">' + hour + '</div><div class="col col-10"><textarea>I am text</textarea></div><button class="col col-1 saveBtn"><i class="fa fa-save"></i></button>');
//     if (hour === currentTime)
//     container.append(timeblock);
// }

//for loop creates timeblocks for each hour from 9am-5pm
// for (var i=9; i<18; i++){
//     var hour = moment(i, 'H').format('hA');
//     console.log(hour);
//     createTimeblock();
// }

