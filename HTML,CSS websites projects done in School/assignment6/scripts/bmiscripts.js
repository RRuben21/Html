// this javascript takes the inputed values and then does the calculation for the BMI output
let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let weight = document.getElementById('weight-input').value;
    let height = document.getElementById('height-input').value;
    let finalbmi = (weight / (height * height) * 703);
    document.getElementById('bmi-output').value = finalbmi;

   
//this is to display the BMI Index
var output =  Math.round(finalbmi*100)/100

if (output<18.5)
    document.getElementById("comment").innerText = "Underweight";
else   if (output>=18.5 && output<=25)
    document.getElementById("comment").innerText = "Normal";
else   if (output>=25 && output<=30)
    document.getElementById("comment").innerText = "Overweight";
else   if (output>30)
    document.getElementById("comment").innerText = "Obese";
   

})




//footer 
function display_name(){
    let fname = "Done by Ruben";
    document.write(fname);
    let lname = " Rosa";
    document.write(lname);
}
function gettime(){
    document.write("<p>"+Date().toString()+"</p>")
}

