const WAR_PASSWORD = "WAR590";
const WAR_STORAGE_KEY = "war590_access_granted";

function isAuthenticated() {
  return localStorage.getItem(WAR_STORAGE_KEY) === "true";
}

function requireAuth() {
  if (!isAuthenticated()) {
    window.location.href = "index.html";
  }
}

function handleLogin(event) {
  event.preventDefault();
  const input = document.getElementById("password");
  const error = document.getElementById("error");
  if (!input) return;

  if (input.value === WAR_PASSWORD) {
    localStorage.setItem(WAR_STORAGE_KEY, "true");
    window.location.href = "home.html";
  } else {
    if (error) error.textContent = "Wrong password. Try again.";
    input.value = "";
    input.focus();
  }
}

function logout() {
  localStorage.removeItem(WAR_STORAGE_KEY);
  window.location.href = "index.html";
}
