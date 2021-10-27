function time(){

//initization and declartion of variables
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
let duration = "AM";

//to rerun code every sec
//using a in-built fuction
setTimeout(time,1000);//why 1000? 1sec = 1000 ms//this setTimeout function works on millisec parameter.

if(h>12){
    h = h - 12;//to make 12hr format.
    duration = "PM";
}
if(h==0){
    h =12;
}

//for 2 digit
h = (h<10)? "0" + h : h;
m = (m<10)? "0" + m : m;
s = (s<10)? "0" + s : s;


//for greetings;
//print the time
document.getElementById("digital-clock").innerHTML = h + ":"+ m + ":" + s + "  "+ duration;

}

time();


function greeting(){
    var date = new Date();
    var hr = date.getHours();

    let msg = "Good Morning";

    if(hr>=4 || hr<12){
        msg = "Good Morning!!";
    }
    if(hr>=12 || hr<16){
        msg = "Good Afternoon..";
    }
    if(hr>=16 || hr<19){
        msg = "Good Evening!";
    }
    if(hr>=19 || hr<4){
        msg = "Good Night!!";
    }
    document.getElementById("digital-greet").innerHTML = msg;
}

greeting();