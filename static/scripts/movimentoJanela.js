const elemento = document.getElementById('window');
let acompanhando = false;

elemento.addEventListener('mousedown', function() {
    acompanhando = true;
});

document.addEventListener('mouseup', function() {
    acompanhando = false;
});

document.addEventListener('mousemove', function(event) {
if (acompanhando) {
    elemento.style.left = event.clientX - (elemento.offsetWidth / 2) + 'px';
    elemento.style.top = event.clientY - (elemento.offsetHeight / 2) + 'px';
}
});