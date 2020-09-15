window.addEventListener('DOMContentLoaded', () => {
  var btnFetch = document.getElementById('fetch-activity');
  btnFetch.addEventListener('click', fetchCatFact);
  var isFactVisible = false;

  function fetchCatFact() {
    fetch('https://www.boredapi.com/api/activity')
    .then(response => response.json())
    .then(data => {
      const activity = data.activity;
      document.getElementById('activity').innerHTML = activity;
    })
    .then(makeFactVisible());
  };
  
  function makeFactVisible() {
    if(!isFactVisible) {
      document.getElementById('activity').classList.remove('hidden');
      isFactVisible = false;
    }
  }
})


