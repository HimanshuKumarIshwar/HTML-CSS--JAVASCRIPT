const btn1El =document.getElementById('btn1');
const btn2El =document.getElementById('btn2');
const btn3El =document.getElementById('btn3');
const btn4El =document.getElementById('btn4');



const ans1El = document.getElementById('ans1');
const ans2El = document.getElementById('ans2');
const ans3El = document.getElementById('ans3');
const ans4El = document.getElementById('ans4');


btn1El.addEventListener('click',()=> {
    ans1El.classList.toggle('dis');
})
btn2El.addEventListener('click',()=> {
    ans2El.classList.toggle('dis');
})
btn3El.addEventListener('click',()=> {
    ans3El.classList.toggle('dis');
})

btn4El.addEventListener('click',()=> {
    ans4El.classList.toggle('dis');
})






