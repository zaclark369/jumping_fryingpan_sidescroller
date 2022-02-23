const food = document.getElementById('food');
const pan = document.getElementById('pan');

function jump() {
    if (food.classList != "jump") {
    food.classList.add("jump");

    setTimeout(function () {
        food.classList.remove("jump");
    }, 300);
}
}

let isCooking = setInterval(function () {
    // get the food y position
    let foodTop = parseInt(window.getComputedStyle(food).getPropertyValue("top"));

    // get the pan x position
    let panLeft = parseInt(
        window.getComputedStyle(pan).getPropertyValue('left')
    );

    // detect collisions
    if (panLeft < 50 && panLeft > 0 && foodTop >= 140) {
        // collision
        alert("Your Cooked!");
    }
}, 10);


document.addEventListener('keydown', function(event) {
    jump();
});