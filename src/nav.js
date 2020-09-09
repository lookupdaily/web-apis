window.addEventListener('DOMContentLoaded', () => {
  var navDragandDrop = document.getElementById('nav-drag');

  navDragandDrop.addEventListener('click', function() {
    document.getElementById('article-drag-drop').classList.toggle('hidden');
  });

})