// Initialize the slide index to show the first slide
var slideIndex = 1;
showDivs(slideIndex);

// Function to increment or decrement the slide index
function plusDivs(n) {
  showDivs(slideIndex += n);
}

// Function to display the appropriate slide based on index
function showDivs(n) {
  var i;
  // Get all elements with class "recomended_game"
  var x = document.getElementsByClassName("recomended_game");
  
  // Loop back to the first slide if index exceeds number of slides
  if (n > x.length) {slideIndex = 1}
  
  // Go to the last slide if index is less than 1
  if (n < 1) {slideIndex = x.length}
  
  // Hide all slides
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  
  // Show the current slide
  x[slideIndex - 1].style.display = "block";  
}

// Function to open the sidebar
function w3_open() {
  // Move the main content to the right
  document.getElementById("main").style.marginLeft = "25%";
  // Set sidebar width and display it
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
  // Hide the menu open button
  document.getElementById("openNav").style.display = 'none';
}

// Function to close the sidebar
function w3_close() {
  // Reset the main content margin
  document.getElementById("main").style.marginLeft = "0%";
  // Hide the sidebar
  document.getElementById("mySidebar").style.display = "none";
  // Show the menu open button
  document.getElementById("openNav").style.display = "inline-block";
}



