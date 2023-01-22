// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  let hour9 = $('#9');
  let hour10 = $('#10');
  let hour11 = $('#11');
  let hour12 = $('#12');
  let hour1 = $('#1');
  let hour2 = $('#2');
  let hour3 = $('#3');
  let hour4 = $('#4');
  let hour5 = $("#5")
  //   let time = moment();

  function setPlanner() {
    $("#currentDay").text(dayjs().format("dddd, MMMM, D YYYY"));
    $("time-block").each(function () {
      let id = $(this).attr("id");
      let schedule = localStorage.getItem(id);
      if (schedule !== null) {
        $(this).children('.schedule').val(schedule);
      }

    });

  }


  //import dayjs from 'dayjs' // ES 2015
  dayjs().format()




  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //


  setPlanner();
  var saveButton = $(".saveBtn");
  console.log(saveButton);

  saveButton.on('click', function () {
    let storage = $(".localstorage")
    let time = $(this).parent().attr('id');
    let schedule = $(this).siblings('.description').val();
    localStorage.setItem(time, schedule);
    storage.text("Appointment Added to localStorage ✔")
  });

  var schedule = $(".description");
  for (i = 0; i < schedule.length; i++) {
    console.log(schedule);

    schedule[i].value = localStorage.getItem("hour-" + (i+9))
    console.log("hour-" + i)
  }





  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});



function pastPresentFuture() {
  //   hour = time.hours();
  hour = dayjs().hour ()
  console.log(hour)
  var timeblock = $('.time-block')
  for (i = 0; i < timeblock.length; i++) {

    console.log($(timeblock[i]).attr("id"))
    let thisHour = parseInt($(timeblock[i]).attr("id").replace("hour-", ""));
    console.log({ thisHour, hour })

    if (thisHour > hour) {
      $(timeblock[i]).addClass('future');
    }
    else if (thisHour === hour) {
      $(timeblock[i]).addClass('present');

    }
    else {
      $(timeblock[i]).addClass('past');

    }
  }
}
pastPresentFuture();




// Appointment Added to localStorage ✔