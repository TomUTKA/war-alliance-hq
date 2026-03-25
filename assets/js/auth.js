
const WAR_PASSWORD = "WAR590";
function unlockSite(){
  const value = document.getElementById("password").value;
  const err = document.getElementById("error");
  if(value === WAR_PASSWORD){
    sessionStorage.setItem("war590_auth","ok");
    window.location.href = "home.html";
  } else {
    err.textContent = "Wrong password.";
  }
}
function guardPage(){
  if(sessionStorage.getItem("war590_auth") !== "ok"){
    window.location.href = "index.html";
  }
}
