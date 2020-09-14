window.addEventListener('DOMContentLoaded', () => {
  var btnSessionStorage = document.getElementById('submit-session-storage');
  var btnLocalStorage = document.getElementById('submit-local-storage');

  btnSessionStorage.addEventListener('click', saveSessionStorage);
  // btnLocalStorage.addEventListener('click', saveLocalStorage);

  setTitle();
  console.log(sessionStorage.pageTitle)
})

function saveSessionStorage() {
  sessionStorage.pageTitle = document.getElementById('input-pg-title').value;
  setTitle();
}

function setTitle() {
  if(sessionStorage.pageTitle) {
    document.getElementById('pgTitle').innerHTML = sessionStorage.pageTitle;
  }
}