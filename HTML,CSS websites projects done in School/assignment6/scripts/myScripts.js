function calculateWage(){
    // declaring and initializing variables that I will be using
    let hours = 0;
    let rate = 0;
    let wage = 0;
// getting the hours from the form
    hours = document.getElementById("hours").value;

 // getting the rate from the form
    rate = document.getElementById("payrate").value;

// calculating the wage
    if(hours<=40){
        wage = hours * rate;
    }
    else{// elses are optional but are useful if you want ot use the opposite conition hour>40
    let overTimeHours= hours-40; //hours is greater than 40 hours (it is in this branch)
    // setting hours back to 40 to multiply that value with the regular 40 hours
    hours=40;
    
    //the firstpart of the equation is the 40 hours at regular rate
    //then the second part of the equation is the overtime hours
    //at the rate of 1 and 1/2
    wage=(hours*rate)+(overTimeHours*(rate*1.5));    

}
// setting the wage back to the form through the last textbox
    document.getElementById("wage").value = wage;
}

function calculateLunch(){
    //declaring and initializing variables that I will be using
    let entree=0.0;
    let drink=0.0;
    let options=0.0;
    let total=0.0;

    //getting the values from the main entree options
    if(document.getElementById("hamburgerEntree").checked)
        entree=parseFloat(document.getElementById("hamburgerEntree").value);
    else if (document.getElementById("pizzaEntree").checked)
        entree=parseFloat(document.getElementById("pizzaEntree").value);
    else if (document.getElementById("hotdogEntree").checked)
        entree=parseFloat(document.getElementById("hotdogEntree").value);
    
    //getting the values from the drinks

    if(document.getElementById("fountainDrink").checked)
        drink = parseFloat(document.getElementById("fountainDrink").value);
    else if (document.getElementById("water").checked)
        drink = parseFloat(document.getElementById("water").value);
    else if (document.getElementById("none").checked)
        drink = parseFloat(document.getElementById("none").value);

    // getting the values from the options

    if(document.getElementById("fries").checked)
        options = parseFloat(document.getElementById("fries").value);
    if (document.getElementById("onionRings").checked)
        options = parseFloat(document.getElementById("onionRings").value);
    if (document.getElementById("cheeseSticks").checked)
        options = parseFloat(document.getElementById("cheeseSticks").value);

    // calculates the total
    total = entree + drink + options;

    // displaying the total to the form through the last paragraph within the division with an id

    document.getElementById("lunchAmount").innerText = "$" + total.toFixed(2);

    // It is also possible to change cascading style using javascript—choose a color that matches your css
    document.getElementById("lunchAmount").style.backgroundColor = "gold";
    document.getElementById("lunchAmount").style.color = "black";
    }

function calculateTacos(){
        // Declaring and initializing the variables that I will be using
        let bacon = 0.0;
        let potato = 0.0;
        let ham = 0.0;
        let total = 0.0;

        if(document.getElementById("baconandegg").value>0){
            bacon = 0.99;
        if(document.getElementById("addBacon1").checked)
            bacon = bacon + parseFloat(document.getElementById("addBacon1").value);
        if(document.getElementById("addBeans1").checked)
            bacon = bacon + parseFloat(document.getElementById("addBeans1").value);
        if(document.getElementById("addCheese1").checked)
            bacon = bacon + parseFloat(document.getElementById("addCheese1").value);
         bacon = bacon * parseFloat(document.getElementById("baconandegg").value);
            }

        if(document.getElementById("potatoandegg").value>0){
            potato = 0.99;
        if(document.getElementById("addBacon2").checked)
            potato = potato + parseFloat(document.getElementById("addBacon2").value);
        if(document.getElementById("addBeans2").checked)
            potato = potato + parseFloat(document.getElementById("addBeans2").value);
        if(document.getElementById("addCheese2").checked)
            potato = potato + parseFloat(document.getElementById("addCheese2").value);
        potato = potato * parseFloat(document.getElementById("potatoandegg").value);
        }

        if(document.getElementById("hamandegg").value>0){
            ham = 0.99;
        if(document.getElementById("addBacon3").checked)
            ham = ham + parseFloat(document.getElementById("addBacon3").value);
        if(document.getElementById("addBeans3").checked)
            ham = ham + parseFloat(document.getElementById("addBeans3").value);
        if(document.getElementById("addCheese3").checked)
            ham = ham + parseFloat(document.getElementById("addCheese3").value);
        ham = ham * parseFloat(document.getElementById("hamandegg").value);
        }  
        total = bacon + potato + ham;

        // setting the total to the form through the last paragraph with an id tag
            document.getElementById("tacoTotal").innerText = "$" + total.toFixed(2); 
       }