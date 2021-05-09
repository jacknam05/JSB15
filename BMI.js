document.getElementById('button').addEventListener("click", on_click)
function on_click(){
    let x = document.getElementById('Height').value;
    let y = document.getElementById('Weight').value;
    let bmi = x/(y*y);
    console.log(bmi)
    check_Bmi(bmi);
}

function check_Bmi(BMI){
    if(BMI < 18.5) {
        document.getElementById('text').innerHTML = "Your BMI is :" + BMI
        document.getElementById('Line_2').innerHTML = "You BMI is low "
    } else if(BMI > 18.5 && BMI <=24.9 ) {
        document.getElementById('text').innerHTML = "Your BMI is :" + BMI
        document.getElementById('Line_2').innerHTML = "Your BMI is normal "
    } else if(BMI >= 25 && BMI <=29.9) {
        document.getElementById('text').innerHTML = "Your BMI is :" + BMI
        document.getElementById('Line_2').innerHTML = "You BMI is fat"
    } else if (BMI >= 30 && BMI <= 39.9) {
        document.getElementById('text').innerHTML = "Your BMI is :" + BMI
        document.getElementById('Line_2').innerHTML = "You are too fat"
    } else {
        document.getElementById('text').innerHTML = "Your BMI is :" + BMI
        document.getElementById('Line_2').innerHTML = "You are being extremely alert"
    }
}
