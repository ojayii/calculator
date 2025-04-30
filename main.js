let input = document.querySelector("input")
let numberButtons = document.getElementsByClassName("btn")
let clear = document.getElementById('clear')
let pop = document.getElementById('pop')
let calc = document.getElementById('calc')
let body = document.querySelector("body")
let reload = document.getElementById('reload')

let backgrounds = ["white", "url('images/smile.jpg')", "url('images/smiles.jpg')", "url('images/car.jpg')", "url('images/squid.jpg')", "url('images/squid1.jpg')", "url('images/moon.jpg')", "url('images/card.jpg')", "url('images/fangs.jpg')", "url('images/smoke.jpg')", "url('images/wolf.jpg')", "url('images/smile2.jpg')", "url('images/stones.jpg')", "url('images/vlad.jpg')", "url('images/cat.jpg')"]
let display = []
let bgValue = JSON.parse(localStorage.getItem("bgVal")) || 0;

updateBg(bgValue);

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", function () {
        display.push(numberButtons[i].innerHTML)
        input.value = display.join('')
    })
}

calc.addEventListener("click", function () {
    try {
        display = [eval(display.join(''))]
        input.value = display.join('')
    } catch (error) {
        display = [];
        input.value = "Syntax Error";
        console.log(error);
    }
})

clear.addEventListener("click", function () {
    display = []
    input.value = display.join('')
})

pop.addEventListener("click", function () {
    display.pop()
    input.value = display.join('')
})

reload.addEventListener("click", function () {
    bgValue = (bgValue + 1) % backgrounds.length;
    updateBg(bgValue)
    storeBg(bgValue);
})

reload.addEventListener("dblclick", function () {
    bgValue = (bgValue - 3 + backgrounds.length) % backgrounds.length;
    updateBg(bgValue)
    storeBg(bgValue);
})

function storeBg(value) {
    localStorage.setItem("bgVal", JSON.stringify(value));
}

function updateBg(bgValue) {
    body.style.background = backgrounds[bgValue];
    body.style.backgroundSize = "cover"
    body.style.backgroundPosition = "center"
    body.style.backgroundRepeat = "no-repeat"
}