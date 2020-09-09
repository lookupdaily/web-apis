window.addEventListener('DOMContentLoaded', () => {
  var element = document.getElementById('item-full-screen')

  element.addEventListener('click', function() {
    if(element.requestFullscreen) {
      element.requestFullscreen();
      element.classList.add('full-screen')
      document.getElementById('full-screen-toggle').textContent = 'Exit full screen'
    }
  })
})
