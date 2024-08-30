const elemento = document.getElementById('window');
    const resizeHandle = document.querySelector('.resize-handle');

    let isResizing = false;

    resizeHandle.addEventListener('mousedown', function(e) {
        isResizing = true;
        e.preventDefault(); // Previne a seleção de texto ao redimensionar
    });

    document.addEventListener('mousemove', function(e) {
        if (isResizing) {
            const newWidth = e.clientX - elemento.getBoundingClientRect().left;
            const newHeight = e.clientY - elemento.getBoundingClientRect().top;

            elemento.style.width = newWidth + 'px';
            elemento.style.height = newHeight + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        isResizing = false;
    });