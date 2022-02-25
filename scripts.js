const food = document.getElementById('food');
const pan = document.getElementById('pan');
let score = 0;

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

        // hide and show input for high score
        score = 0;
    } else if (panLeft < -20) {
        score = score + 1;
        console.log(score);
    }
}, 10);

let randomFunc = setInterval(function () {
    max = 1500
    min = 580
    let randomNumber = Math.floor(Math.random() *(max-min))+min;
    console.log(randomNumber);
    pan.style.setProperty("--start_length",`${randomNumber}px`);
    console.log(`${randomNumber}px`)
}, 2000)


document.addEventListener('keydown', function(event) {
    jump();
});