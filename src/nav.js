window.addEventListener('DOMContentLoaded', () => {
  var navDrag = document.getElementById('nav-link-drag');
  var navFullScreen = document.getElementById('nav-link-full-screen');
  var navGeolocation = document.getElementById('nav-link-geolocation');
  var navAudio = document.getElementById('nav-link-audio');

  navDrag.addEventListener('click', function() {
    toggleNav('drag');
  });

  navFullScreen.addEventListener('click', function() {
    toggleNav('full-screen');
  });

  navGeolocation.addEventListener('click', function() {
    toggleNav('geolocation');
  });

  navAudio.addEventListener('click', function() {
    toggleNav('audio')
  })
})

function toggleNav(section) {
  document.getElementById(`article-${section}`).classList.toggle('hidden');
  document.getElementById(`nav-item-${section}`).classList.toggle('active-page');
}