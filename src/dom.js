window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('toggle-bg').addEventListener('click', toggleBackground)
  document.getElementById('reset-bg').addEventListener('click', resetBackground)
})

function toggleBackground() {
  colours = ['AliceBlue', 'FloralWhite', 'HoneyDew', 'LavenderBlush', 'Linen', 'MintCream', 'MistyRose', 'OldLace', 'WhiteSmoke'];
  var colour = colours[Math.floor(Math.random() * colours.length)];

  document.querySelector('body').style.backgroundColor = colour;
}

function resetBackground() {
  document.querySelector('body').style.backgroundColor = 'GhostWhite';
}

