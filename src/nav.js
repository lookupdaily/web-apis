window.addEventListener('DOMContentLoaded', () => {
  var linksDOM = document.querySelectorAll('.link-dom');
  var navDrag = document.getElementById('nav-link-drag');
  var navFullScreen = document.getElementById('nav-link-full-screen');
  var navGeolocation = document.getElementById('nav-link-geolocation');
  var navAudio = document.getElementById('nav-link-audio');
  var navFetch = document.getElementById('nav-link-fetch');
  var navStorage = document.getElementById('nav-link-webstorage');
  console.log(navStorage)

  linksDOM.forEach(link => {
    link.addEventListener('click', function() {
      toggleNav('dom')
    })
  })

  navDrag.addEventListener('click', function() {
    toggleNav('drag');
  })

  navFullScreen.addEventListener('click', function() {
    toggleNav('full-screen');
  })

  navGeolocation.addEventListener('click', function() {
    toggleNav('geolocation');
  })
  
  navAudio.addEventListener('click', function() {
    toggleNav('audio');
  })

  navFetch.addEventListener('click', function() {
    toggleNav('fetch');
  })

  navStorage.addEventListener('click', function() {
    toggleNav('webstorage');
  })
})

function toggleNav(section) {
  document.getElementById(`article-${section}`).classList.toggle('hidden');
  document.getElementById(`nav-item-${section}`).classList.toggle('active-page');
}