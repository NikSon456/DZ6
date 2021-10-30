let in1 = document.querySelector('#in1');
let in2 = document.querySelector('#in2');
let in3 = document.querySelector('#in3');
let div1 = document.querySelector('#div1');
let div2 = document.querySelector('#div2');
let div3 = document.querySelector('#div3');
in1.onclick = function(){
    div1.innerHTML = in1.value
}
in2.onclick = function(){
    div2.innerHTML = in2.value
}
in3.onclick = function(){
    div3.innerHTML = in3.value
}

let btn = document.querySelector('#btn');
let answ = document.querySelector('#answer')
let text = "Спасибо за нажатие"
btn.onclick = function(){
    answer.innerHTML = text
}
let btn1 = document.querySelector('#btn2')
let textpole = document.querySelector('#textpole')
let textans = "Нажали"
btn1.onclick = function(){
    textpole.innerHTML = textans
}