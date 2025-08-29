// Show welcome alert on page load
window.onload = function () {
  alert("Welcome to the simple web page!");
};

// Function to change text when button is clicked
function changeText() {
  document.getElementById("message").innerText = "You clicked the button!";
}
