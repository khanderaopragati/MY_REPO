
//for each
let a = [
    {
        name: "pragati", city: "nagpur"
    },
    {
        name: "pooja", city: "mumbai"
    },
    {
        name: "poonam", city: "pune"
    }
]
let names = []
// for (let index=0; index<a.length; index++){
//     names.push(a[index].name)
// }
// console.log(names);


// a.forEach(element => {
//    names.push(element .name) 
// });
// console.log(names);

let n1 = a.map(element => {
    return element.name
});
console.log(n1);



let a1 = [
    {
        name: "pragati", city: "nagpur"
    },
    {
        name: "pooja", city: "mumbai"
    },
    {
        name: "poonam", city: "pune"
    },
    {
        name: "neha", city: "akot"
    },
    {
        name: "nikita", city: "akola"
    },
    {
        name: "preeti", city: "amravati"
    }
]
let names1 = [];
for (let index = 0; index < a1.length; index++){
    if (a1[index].name =="neha"){
        continue;
    }
    names1.push(a1[index].name)
}
console.log(names1);

let ele = a1.find(ele =>{
    return ele.name == "nikita"
})
console.log(ele);