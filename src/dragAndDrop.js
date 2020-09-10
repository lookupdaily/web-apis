window.addEventListener('DOMContentLoaded', () => {
    var dragElement = document.getElementById('item');
    dragElement.addEventListener('dragstart', handleDragStart)
    
    var dropZone = document.getElementById('target');
    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('drop', handleDrop);

    function handleDragStart(event) {
        event.dataTransfer.setData("application/my-app", event.target.id);
        event.dataTransfer.dropEffect = "move";
        dropZone.classList.remove('hidden');
        console.log('hello')     
    }
    
    function handleDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }
    
    function handleDrop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData("application/my-app");
        event.target.appendChild(document.getElementById(data));
        document.getElementById('drop-text').classList.add('hidden');
        document.getElementById('drag-drop-info').classList.remove('hidden');
        dropZone.removeEventListener('drop', handleDrop);
    }
    
})

//TODO reset original positions using nav button
//TODO drag and drop files: https://jsbin.com/hiqasek/edit?html,js,output

