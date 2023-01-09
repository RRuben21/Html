 function myGreeting(){
 // this is a comment, comments are ignored
        // the line below displays the date in the web page
        document.write("<p>"+Date().toString()+"</p>");

        // bellow greeting and time and variables
        // the keyword let declares variables(there are rules for variable names)
        let greating;
        let time= new Date().getHours();
        if (time<10){
            greeting="Good Morning!"
        } else if (time<20){
            greeting= "Good Afternoon!";
        } else {
            greeting= "Good Evening!";
        }
        document.write("<p>"+greeting+"</p>");
 }
 function function2(){
    let name= document.querySelector("#name").value ;
    let favcolor = document.querySelector("#favcolor").value;

    alert("Hello, " +name+" my favorite color is "+favcolor+" too! Wow!");
 }