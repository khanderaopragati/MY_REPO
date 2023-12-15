// data types  1. premative   2. non premative
// the premative data types : single value holder in java script include Number, string, boolean,
 // undefined,  null, symbol. 
// non premative data types : object 

// number: whole number or decimal number
let amount=8783.7647

// type of operator(): is used to get data type of data.
console.log(typeof(amount));

// string data type ""
let city="mumbai"
console.log(typeof(city));


// boolean: true/false
let isfavmovie=true;
console.log(typeof(isfavmovie));

// undefined:
let a;
console.log(typeof(a));

let b = undefined;
console.log(b);
console.log(typeof(b));

// null
let c=null;
console.log(typeof(c));

// bigint
let cash = 9986594;
document.write(cash);
console.log(cash);

// array []: array is used to store multiple values in single variable. we can list heterogeneous data 
// of different datatypes. 

var studentnames = ["pragati" , "angel" , "nilesh", "400", "test()"];  //heterogeneous array
document.write(studentnames);
console.log(studentnames);
function test(){
    return "amravati";
}

let colors=['orange', 'red', 'green', 'white', 'black'];  //homogeneous array
document.write(colors);

let colors2 = ["red", "green", "blue", "yellow", "white"]
document.write("<br>", colors2[4])

// length operator: it will give length of array
console.log(colors2. length);

// object: {key : value}
let student = {name: "pooja", age:"22", city: "pune"}
let emp={}; //empty object
console.log(student.city);


let student2 = [
    {name:"pragati", age:"26", city:"akot"},
    {name:"nilesh", age:"34", city:"amravati"},
    {name:"angel", age:"1.2", city:"nagpur"}
]
console.log(student2[0]);
console.log(student2[0].age);
console.log(student2[2].city);
console.log(student2.length);

// let / var / const difference
// let keyword have block level scope and var keyword have function level scope. 


//redeclairation of of variable is possible with var not with let keyword.
// let a1 = 12;
//  let a1 = 22;
//  console.log(a1);

var b1 = 45;
var b1 = 74;
console.log(b1);

//hoisting : hoisting is possible with var keyword and not possible wit let / const keyword. 
//t = 60;
//let t;

t = 60;
var t;
console.log(t);

//reassigning value is possible with keyword var and let but not possible with const.
let d = 60;
    d = 38;
    console.log(d);

    var p = 67;
        p = 75;
        console.log(p);

        // const g = 90;
        //     g = 55;
        //     console.log(g);