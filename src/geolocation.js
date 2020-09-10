window.addEventListener('DOMContentLoaded', () => {
  var locator = document.getElementById('locator-btn');
  var output = document.getElementById('lat-long');

  locator.addEventListener('click', getLocation);
  console.log('hello')

  function getLocation() {
    console.log('hello')
    if(navigator.geolocation) {
      console.log('hello')
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      output.innerHTML="Geolocation is not supported by this browser";
      output.classList.remove('hidden')
    }
  }
  
  function showPosition(position) {
    console.log('hello there')
    document.getElementById('lat').innerHTML = position.coords.latitude;
    document.getElementById('long').innerHTML = position.coords.longitude;
    output.classList.remove('hidden')
    document.getElementById('geolocation-info').classList.remove('hidden')
  }
})
