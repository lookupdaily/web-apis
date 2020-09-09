"use strict";

window.addEventListener('DOMContentLoaded', () => {
    var element = document.getElementById('item1');
    element.addEventListener('dragstart', handleDragStart)
})

function handleDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}