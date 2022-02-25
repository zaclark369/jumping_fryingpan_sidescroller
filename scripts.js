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
        document.getElementById('scoreboard').innerHTML = score;
    }
}, 10);

let randomFunc = setInterval(function () {
    max = 1500
    min = 580
    // random setting of pan off the right of the screen allows for it to move at different speeds trying to complete journey in 2 secs

    let randomNumber = Math.floor(Math.random() *(max-min))+min;
    console.log(randomNumber);
    pan.style.setProperty("--start_length",`${randomNumber}px`);
    console.log(`${randomNumber}px`)
}, 2000)


document.addEventListener('keydown', function(event) {
    jump();
});