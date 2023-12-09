let input = document.querySelector("input")
let btn = document.getElementsByClassName("btn")
let clear = document.getElementById('clear')
let pop = document.getElementById('pop')
let calc = document.getElementById('calc')

let body = document.querySelector("body")
let reload = document.getElementById('reload')

let backgrounds = ["url('images/smile.jpg')", "url('images/smiles.jpg')", "url('images/car.jpg')", "url('images/squid.jpg')", "url('images/squid1.jpg')", "url('images/moon.jpg')", "url('images/card.jpg')", "url('images/fangs.jpg')", "url('images/smoke.jpg')", "url('images/wolf.jpg')", "url('images/smile2.jpg')", "url('images/stones.jpg')", "url('images/vlad.jpg')", "url('images/cat.jpg')"]

let display = []

//console.log(btn);

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
        display.push(btn[i].innerHTML)
        input.value = display.join('')
    })
}

clear.addEventListener("click", function() {
    display = []
    input.value = display.join('')
})

calc.addEventListener("click", function() {
    display = [eval(display.join(''))]
    input.value = display.join('')
})

pop.addEventListener("click", function() {
       display.pop()
       input.value = display.join('')
})

let bgValue = 0;

reload.addEventListener("click", function() {

    bgValue +=  1
   
   for (let i = 0; i < backgrounds.length; i++) {
       if(bgValue === backgrounds.length) {
           bgValue = 0
       }
   }
     
   body.style.background =    backgrounds[bgValue]   
   body.style.backgroundSize= "cover"
   body.style.backgroundPosition= "center"     
   body.style.backgroundRepeat= "no-repeat"

})

reload.addEventListener("dblclick", function() {
    body.style.background= "white"
})
