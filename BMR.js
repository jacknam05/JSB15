document.getElementById('button').addEventListener("click", on_click)
function on_click(){
    let x = document.getElementById('Weight').value;
    let y = document.getElementById('Size').value;
    let z = document.getElementById('Age').value;
    let bmr = (66.47+(13.75*x)+(5.003*y)-(6.755*z));
    console.log(bmr)
    check_Bmi(bmr);
}

function check_Bmi(BMI){
        document.getElementById('text').innerHTML = "Your BMI is :" + BMI
}