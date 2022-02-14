const fryingPan = document.getElementById('frying');

function jump() {
    fryingPan.classList.add('jump');
}


document.addEventListener('keydown', function(event) {
    jump();
});