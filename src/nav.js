window.addEventListener('DOMContentLoaded', () => {
  var navDragandDrop = document.getElementById('nav-link-drag');
  var navFullScreen = document.getElementById('nav-link-full-screen');

  navDragandDrop.addEventListener('click', function() {
    document.getElementById('article-drag-drop').classList.toggle('hidden');
    document.getElementById('nav-item-drag').classList.toggle('active-page');
  });

  navFullScreen.addEventListener('click', function() {
    document.getElementById('article-full-screen').classList.toggle('hidden');
    document.getElementById('nav-item-full-screen').classList.toggle('active-page');
  })

})