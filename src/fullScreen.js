window.addEventListener('DOMContentLoaded', () => {
  var element = document.getElementById('item-full-screen')
  element.addEventListener('click', toggleFullScreen)

  function toggleFullScreen() {
    if(!document.fullscreenElement) {
      element.requestFullscreen();
      element.classList.add('full-screen')
      document.getElementById('full-screen-toggle').textContent = 'Exit full screen'
    } else {
      if(document.exitFullscreen) {
        document.exitFullscreen()
        element.classList.remove('full-screen')
      document.getElementById('full-screen-toggle').textContent = 'Make me full screen'
      }
    }
  }
 })
