const contextMenuBtn = document.getElementById('context-menu-button');
const contextMenu = document.querySelector('#context-menu-display');

function displayAtMousePointer(event) {
    'use strict';

    let xCoord = event.clientX;
    let yCoord = event.clientY;    
    
    contextMenu.style.top = `${yCoord}px`;
    contextMenu.style.left = `${xCoord}px`;
}

function showContextMenu() {
    'use strict';

    if(contextMenu.classList.contains('d-none')) {
        contextMenu.classList.remove('d-none');
    }
    else {
        contextMenu.classList.add('d-none')
    }
};

contextMenuBtn.addEventListener('contextmenu', (ev) => {
    'use strict';
    ev.preventDefault();
    showContextMenu();
    displayAtMousePointer(event);
    return false;
});

document.addEventListener('click', () => {
    contextMenu.classList.add('d-none');
} )
