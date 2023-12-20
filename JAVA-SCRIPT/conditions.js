function conditions(){
// if 
var marks = 90;

if (marks > 75) {
    console.log("distinction");
}
}


function multipleConditions(){
// if/else
var marks = 75
if (marks > 35) {
    console.log("pass");
}
else {
    console.log("fail");
}


// else/if
if (marks >= 75) {
    console.log("distinction");
}
else if (marks >= 60 && marks < 75) {
    console.log("first class");
}
else if (marks >= 50 && marks < 60) {
    console.log("second class");
}
else if (marks >= 35 && marks < 50) {
    console.log("pass");
}
else {
    console.log("fail");
}


let points = 45;
if (points <= 100 && points >75){
    console.log("raja");
}
 else if (points <= 75 && points > 50){
    console.log("rani");
}
else if (points<=50 && points >=25){
    console.log("police");
}
else {
    console.log("chor");
}


// ternory operator condition ? T : F
marks > 35 ? console.log("pass") : console.log("fail");
marks > 85 ? console.log("pass") : console.log("fail");;


// switch 
let amount = 70;
switch (amount) {
    case 50:
        console.log("you have 50 rupees");
        break;
    case 60:
        console.log("you have 60 rupees");
        break;
    case 70:
        console.log("you have 70 rupees");
        break;
    case 80:
        console.log("you have 80 rupees");
        break;
    case 100:
        console.log("you have 100 rupees");
        break;
        default:
    console.log("you dont have money");
    break;
}
}




function logicalOperators(){
let b = 80;           //(=) )assignment operator
if (b == "80"); {     //(==) equality operator : it will cheak only value not datatype.
console.log("b has 80");
}

if (b === 80);         //(===)equality operator : it will check values as well as datatypes.
console.log("abcdefgh");

if(b>20){
    console.log("hcssfds");
}

if(b>=20){
    console.log("hjhjfds");
}

if(b<=20){
    console.log("hbhjfds");
}

if (b != 20) {          //!=  is not equal to
    console.log("cbnks");
}

let c = false;
if (c){
    console.log("hsgfgu");
}

if (!c) {       //true
    console.log("!!!!");

}

let d = 90;
if (d){
    console.log("shjgdh");
}

if (!d){
console.log(kjdkashd);
}


let e  = null
if(e) {
    console.log("sgdysu");
}


// &&       (T && T >>T ; T && F >>F; F && T >>F)
let mark = 50;
if (mark == 50 && mark>35 && mark>45){
    console.log("pass");
}

// ||(or)     T||F >> T ; F||T >>T ; F||F >>F
let x =50;
let y = 20;
if (x == 50 || y > 10 || y!= 20){
    console.log("bkclc");
}

let aa = 18;
let bb = 60;
if (aa >= 18 && bb <= 60){
    console.log("abcd");
}
}



// parameterless function
function test(){
    console.log("fun calling");
}

// parameterised function
function userName(username) {
    console.log(username);
}
function userPassword(userpass){
    console.log(userpass);
}

let a = 8;
let b = 2;

function multiplication(){
    var res = a*b;
    multiplication2(res)
}
function multiplication2(result){
let res1 = 10*result;
console.log(res1);
}