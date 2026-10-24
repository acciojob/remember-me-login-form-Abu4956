//your JS code here. If required.

const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");

const USER_KEY = "savedUsername";
const PASS_KEY = "savedPassword";

// Show existing-user button if credentials are saved
function updateExistingButton() {
  const savedUsername = localStorage.getItem(USER_KEY);
  const savedPassword = localStorage.getItem(PASS_KEY);

  existing.hidden = !(savedUsername && savedPassword);
}

updateExistingButton();

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const user = username.value;

  alert(`Logged in as ${user}`);

  if (checkbox.checked) {
    localStorage.setItem(USER_KEY, user);
    localStorage.setItem(PASS_KEY, password.value);
  } else {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(PASS_KEY);
  }

  updateExistingButton();
});

// Login using saved credentials
existing.addEventListener("click", function () {
  const savedUsername = localStorage.getItem(USER_KEY);

  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});
