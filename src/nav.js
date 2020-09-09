window.addEventListener('DOMContentLoaded', () => {
  var navDragandDrop = document.getElementById('nav-link-drag');

  navDragandDrop.addEventListener('click', function() {
    document.getElementById('article-drag-drop').classList.toggle('hidden');
    document.getElementById('nav-item-drag').classList.toggle('active-page');
  });

})