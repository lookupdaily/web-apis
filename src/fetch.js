window.addEventListener('DOMContentLoaded', () => {
  var btnFetch = document.getElementById('fetch-fact');
  btnFetch.addEventListener('click', fetchCatFact);
  var isFactVisible = false;

  function fetchCatFact() {
    fetch('https://cat-fact.herokuapp.com/facts')
    .then(response => response.json())
    .then(data => {
      const randomIndex = Math.floor(Math.random() * data.all.length);
      const fact = data.all[randomIndex]
      document.getElementById('cat-fact').innerHTML = fact.text;
    })
    .then(makeFactVisible());
  };
  
  function makeFactVisible() {
    if(!isFactVisible) {
      document.getElementById('cat-fact').classList.remove('hidden');
      isFactVisible = false;
    }
  }
})


