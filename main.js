function time(){

//initization and declartion of variables
let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
let duration = "AM";
let greetings = "Good Morning";

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