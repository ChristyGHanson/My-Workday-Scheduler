// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.

// Activate the time/date library.
var dateTimeNow = dayjs();


$(function () {
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
  //
  // TODO: Add code to display the current date in the header of the page.
});

// Pseudocode starts here:
// Q: How do I get the current day to display?
// A: I need to use the Day.js library. I plug in this Day.js library into my HTML file.

//  Q: Style.css color code. lines 33-36. What did we learn in JS that would be a conditional statement that would change each of these things? 
//  A: Use If-else statement to change the past, present and future colors. 
// Comparisons in code. 9am compare it to 12pm. (==)
// Day.js is always going to track it for me. I have to compare the time blocks.
//  If true, it's past, then do something with that class of past to change colors. 

// when i click the save button... --> 

//refreshing and event persist is going to be the hard part.
// I have to learn to store the data I entered into the form. 
// I have to store it in local storage.
// If I hit refresh in the browser, the data must reappear and stay put. It will not disappear. 
// I could use a for-loop or just store it. 

