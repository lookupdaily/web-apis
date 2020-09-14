window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('toggle-bg').addEventListener('click', toggleBackground)
})

function toggleBackground() {
  colours = ['AliceBlue', 'FloralWhite', 'GhostWhite', 'HoneyDew', 'LavenderBlush', 'Linen', 'MintCream', 'MistyRose', 'OldLace', 'WhiteSmoke'];
  var colour = colours[Math.floor(Math.random() * colours.length)];

  document.querySelector('body').style.backgroundColor = colour;
}

