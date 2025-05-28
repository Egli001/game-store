// Run the code after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // === Registration Form Logic ===
  const regForm = document.getElementById("registerForm");

  // If the registration form exists on the page
  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent form from submitting normally

      // Get and trim input values from the form
      const username = document.getElementById("regUsername").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPassword").value;
      const confirmPassword = document.getElementById("regConfirmPassword").value;

      // Check if passwords match
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      // Retrieve existing users from localStorage or use an empty array
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Check if the username is already taken
      if (users.some(user => user.username === username)) {
        alert("Username already exists. Please choose another.");
        return;
      }

      // Add the new user to the users array
      users.push({ username, email, password });

      // Save updated users array back to localStorage
      localStorage.setItem("users", JSON.stringify(users));

      alert("Registration successful! Please log in.");

      // Redirect to login page after successful registration
      window.location.href = "index.html";
    });
  }

  // === Login Form Logic ===
  const loginForm = document.getElementById("loginForm");

  // If the login form exists on the page
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent default form submission

      // Get and trim input values from the form
      const username = document.getElementById("loginUsername").value.trim();
      const password = document.getElementById("loginPassword").value;

      // Retrieve users from localStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Find user with matching credentials
      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
      alert("Login successful!");
      localStorage.setItem("loggedInUser", JSON.stringify(user)); // Save user to localStorage
      window.location.href = "SUNDIAL_Front_Page.html";
    } else {
        alert("Invalid username or password.");
      }
    });
  }

    // === Logout Button Logic ===
  const logoutButton = document.getElementById("logoutBtn");

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("loggedInUser"); // Remove the logged in user
      alert("You have been logged out.");
      window.location.href = "../index.html"; // Redirect to login or landing page
    });
  }

});
