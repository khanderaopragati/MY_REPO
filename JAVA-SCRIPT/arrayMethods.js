// array length: it gives length of array
const fruits = ["banana", "orange", "apple", "mango"];
let size = fruits.length;
console.log(size);


// array toString: converts number into string.
let arr = [100, 200, 300];
let arr1 = arr.toString();
console.log(arr1);

// array pop method: it will delete last element from the array. pop method will return the deleted item.
let = color = ["green","black","yellow","white"];
let popReturnValue = color.pop();
console.log(popReturnValue);        //deleted item will return
console.log(color);                 //remaining items will return.

// array push method: push method will add elements at the last of the array.
const animals = ["bear","tiger","dog","cat"];
let pushedReturnValue = animals.push("deer","buffelo");
console.log(pushedReturnValue);             //it will return length of original array.
console.log(animals);                       //it will return array with added items.

const fruits2 = ["banana", "orange", "apple", "mango"];
let pushedreturnvalue= fruits2.push("papaya", "kiwi");
console.log(pushedreturnvalue);
console.log(fruits2);


// array shift: it will delete first item of array and will give that item return back.
const fruits3 = ["banana", "orange", "apple", "mango"];
let shiftRetunValue= fruits3.shift();
console.log(shiftRetunValue);           //it will return removed items.
console.log(fruits3);

//array unshift: it will add new items to the starting of the array.
const fruits4 = ["banana", "orange", "apple", "mango"];
let unshiftReturnValue= fruits4.unshift("pineapple");
console.log(unshiftReturnValue);
console.log(fruits4);

// array delete: it deletes the item whos index passes to it.
const fruits5 = ["banana", "orange", "apple", "mango"];
delete fruits5[2];
console.log(fruits5);

// array splice : fruits6.splice(2, 1, "kiwi", "pineapple"): it will delete one item from 2nd index and
// add items passes to it at deleated place.
const fruits6 = ["banana", "orange", "apple", "mango"];
fruits6.splice(2, 1, "kiwi", "pineapple");
console.log(fruits6);

//array slice : //starting index including and last index non-including.
const fruits7 = ["banana", "orange", "apple", "mango"];
console.log(fruits7.slice(0,3));


// Number methods :
let a = 745487;
let b = toString;
