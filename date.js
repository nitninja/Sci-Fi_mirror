//function updateTime(){

//Date year - month - day
//var myDate = new Date();
//var year = myDate.getFullYear();
//var month = myDate.getMonth();
//var day = myDate.getDay();
//var daym = myDate.getDate();
//var dayarray = new Array ('Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
//var montharray = new Array ('January','Febuary','March','April','May','June','July','August','September','October','November','December');
//Date year - month - day

// Hour - Minute - Second
//var myTime = new Date();
//var hour = myTime.getHours();
//var minute = myTime.getMinutes();
//var second = myTime.getSeconds();
//hour = checkTime(hour);
//minute = checkTime(minute);
//second = checkTime(second);
// now is 24 hour clock

// current spliced togethor
//var currentDate =daym + ' ' + montharray[month] + ' ' + year;
//var currentTime = setTimeout(updateTime, 500);


//get date div
//var myClock = document.getElementById('dateDisplay');
//day of today
// var today=document.getElementById('dayDisplay').innerHTML=dayarray[day];

//get time div
//var myWatch = document.getElementById('timeDisplay').innerHTML =dayarray[day] + ' ' +hour + ':' + minute;

//current date as string to div
//myClock.innerHTML = currentDate;


//}
//function checkTime(i){
//    if (i < 10) {i = "0" + i};
//    return i;
//}
function updateTime(){

//Date year - month - day
var myDate = new Date();
var year = myDate.getFullYear();
var month = myDate.getMonth();
var day = myDate.getDay();
var daym = myDate.getDate();
var dayarray = new Array ('Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
var montharray = new Array ('January','Febuary','March','April','May','June','July','August','September','October','November','December');
//Date year - month - day

// Hour - Minute - Second
var myTime = new Date();
var hour = myTime.getHours();
var minute = myTime.getMinutes();
var second = myTime.getSeconds();
hour = checkTime(hour);
minute = checkTime(minute);
second = checkTime(second);
// now is 24 hour clock

// current spliced togethor
var currentDate =daym + ' ' + montharray[month] + ' ' + year;
// current 24hr spliced togethor
var currentTime = setTimeout(updateTime, 500);


//get date div 
var myClock = document.getElementById('dateDisplay');
//day of today
var today=document.getElementById('dayDisplay').innerHTML=dayarray[day];

//get time div
var myWatch = document.getElementById('timeDisplay').innerHTML = '' + dayarray[day] + ' ' +hour + ':' + minute;

//current date as string to div
myClock.innerHTML = currentDate;

}
function checkTime(i){
    if (i < 10) {i = "0" + i};
    return i;
}
