const  btnEl = document.getElementById('btn');
const heightEl = document.getElementById('height');
const weightEl = document.getElementById('weight');
const bmiEl = document.getElementById('bmi-result');
const weightConditionEl = document.getElementById('weight-condition');
function calulateBMI(){
    

    const heightValue = heightEl.value / 100;
    const weightValue = weightEl.value;
    


   const bmiValue = weightValue / (heightValue* heightValue)

bmiEl.value = bmiValue;
   
if(bmiValue < 18.5){
weightConditionEl.innerText = "Under Weight";
} else if(bmiValue>= 18.5 && bmiValue <= 24.9){
    weightConditionEl.innerText = "Normal Weight";
}
else if(bmiValue >= 25 && bmiValue <= 29.9){
    weightConditionEl.innerText = "Over Weight";
}


else if(bmiValue >= 30){
    weightConditionEl.innerText = "Obesity";
}








}



btn.addEventListener('click', calulateBMI);