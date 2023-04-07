// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentDayz = $("#currentDay");
currentDayz.text(dayjs().format('ddd,MMM D'));
var currentHour= dayjs().format('H')

$(function () {
  $("button").click(function(){
    var id = $(this).parent().attr('id')
    localStorage.setItem(id, $(this).siblings("textarea").val())
  })

  for (let i = 09; i < 18; i++) {
    var x= localStorage.getItem(`hour-${i}`)
    $(`#hour-${i}`).children("textarea").val(x)
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});

// var allDivs = $("#container-lg px-5");
// for (let i = 0; i < allDivs.length; i++){
//   for (let u= 9; u< 18; u++){
//     allDivs.children[i]= u;
//   }

$('#container-lg px-5').each(function () {
  for (let i = 09; i < 18; i++) {
  var a = $(this).attr('id')= i;
  if (currentHour > a){
    $(this).attr('class')='row time-block future'
  }
  if (currentHour = a){
    $(this).attr('class')='row time-block present'
  }
  else {
    $(this).attr('class')='row time-block past'
  }
  }
})

// $('.container-lg').each(function () {
//   var a = $(this).attr('id');
//   console.log("a = ", a);
// }
