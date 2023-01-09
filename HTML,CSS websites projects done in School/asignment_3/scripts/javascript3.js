
function f1(){
    let console= document.querySelector("#console").value ;
    let YP = document.querySelector("#YP").value;

    alert("You play on " +console+" and you have played for "+YP+"!")
    
}
function f2(){
    let TT= document.querySelector("#TT").value ;
    let TB = document.querySelector("#TB").value;

    alert("You have " +TT+ " . Your favriote tool brand is "+TB+"!")
}
function f3(){ 
    let CA= document.querySelector("#CA").value ;
    

alert("You selected " +CA+ " !")
}

function current_date(){
    document.getElementById("current_date").innerHTML= Date();
    
}
function display_name(){
    let fname = "Done by Ruben";
    document.write(fname);
    let lname = " Rosa";
    document.write(lname);
}
