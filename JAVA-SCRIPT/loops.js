console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

let x = 10;
// x = x + 1;
// console.log(x);

x = x - 1;
console.log(x);

for(let a=1; a<10; a++)
console.log(a);

let color = ["black", "white", "green", "yellow", "blue", "pink"];
let color1=[];
for(let r=0; r<color.length; r++){
    if(color[r] != "green"){
        color1.push(color[r])
    }
}
console.log(color1);

let animal = ["bear", "dog", "cat", "monkey", "donkey", "girrafe", "cow"];
let animal1 = [];
for (let r=0; r<animal.length; r++){
if (animal[r] != "monkey"){
    animal1.push(animal[r])
}
}
console.log(animal1);

let flowers = ["hibiscus", "rose", "lily", "jasmin", "sunflower", "mogra"]
let flowers1 = []
for (let r=0; r<flowers.length; r++){
if (flowers[r] != "sunflower"){
flowers1.push(flowers[r])
}
}
console.log(flowers1);

let birds = ["peacock", "sparrow", "crow", "pigeon", "duck"]
let birds1 = []
for (let r=0; r<birds.length; r++){
    if (birds[r] =="sparrow"){
        birds1.push(birds[r])
    } 
}
console.log(birds1);


let alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"]
let alpha1 = []
for(let r=5; r<alpha.length; r++){
    if (alpha[r] != "J"){
        alpha1.push(alpha[r])
    }
}
console.log(alpha1);

// for of loop is for Array
// for in is for Object

// for of loop
let color2 = ["pink", "green", "yellow", "white", "black", "gray"]
let clr = []
 for(let x of color2){
    clr.push(x)
 }
 console.log(clr);

 let color3 = ["pink", "green", "yellow", "white", "black", "gray", "purple", "red", "brown"]
 let clr2 = []
 for (let r = 2; r <color3.length; r++){
    if(color3[r] != "white" && color3[r] != "purple" && color3[r] != "red" ){
        clr2.push(color3[r])
    }
 }
 console.log(clr2);

//  for in loop
let stud = {
    name: "Pragati",
    mob: "5454367",
    city: "nagpur",
    age: "26"
}
for(let a in stud){
  //   console.log(a);
    console.log(stud[a]);
}

//convert string into number
let v = "674857"
let r = parseInt(v);
console.log(r);


//converts number into string
let v1 = [74873]
let r1 = toString(v1)
console.log(v1);

let a = {
    employees:[
        { "name":"John", "lastname":"doe"},
        { "name":"Anna", "lastname":"smith"},
        { "name":"Peter", "lastname":"jone"}
    ],
    city:"pune",
    no : [575,565,7],
    status:true
}
let r2 = JSON.stringify(a);
console.log(r2);

//ARROW FUNCTION
//  ARROW FUNCTION REDUCES THE SIZE OF THE CODE.    
//the retutn statement and the function brackets are optional for single-line function.
//it increses the readability of code.
function test(){
    return "pragati"
}

test = function(){
    return "pragati"
}

test = () =>{
    return "pragati"
}

test = () => "pragati"


let z = ["my", "name", "is", "pragati", "rajkumar", "khanderao", "from", "akot"]
let z1 = [];
// for (let r=0; r<z.length; r++){
//     if (z[r] != "khanderao"){
//         z1.push(z[r])
//     }
// }
// console.log(z1);


// for (let r = 0; r<z.length; r++){
//     if (z[r] ==  "rajkumar"){
//         z1.push(z[r])
//     }
// }
// console.log(z1);


// for (let x of z){
//     z1.push(x)
// }
// console.log(z1);

// for (let r = 2; r<z.length; r++){
//     if (z[r] != "name" && z[r] != "pragati" && z[r] != "from"){
//         z1.push(z[r])
//     }
// }
// console.log(z1);


let info={
    name : "Pragati",
    address : "nagpur",
    mobile : "33875",
    pin : "543549859",
}
for (let a in info){
  //  console.log(a);
console.log(info[a]);}
