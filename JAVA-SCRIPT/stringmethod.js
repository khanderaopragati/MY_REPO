// string length():
let text = "pragati rajkumar khanderao";
console.log(text.length);

// string slice(): substring is similar to slice.
let text1 = " i like pineapple";
console.log(text1.slice(1,9));          //start index inclusive and end index exclusive
console.log(text1.slice(6,-4));        //6 inclusive and -4 is exclusive
console.log(text1.substring(7,-3));     //negative index will treated as 0.
console.log(text1.substring(4,8));      //end index will consider here as a length
console.log(text1.substr(4,2));         

// the replace method does not change the string it is called on.
// the replace method returns a new string.
// the replace method replaces only the first match.
// if you want to replace all matches, use a regular expression with the /flag set.
// example:
var details = "mumbai is metrocity. I like mumbai.";
console.log(details.replace("mumbai","pune"));
console.log(details.replace(/mumbai/g,"nagpur"));     //to replace all values
console.log(details.replace(/mumbai/ig,"amravati"));
console.log(details.replaceAll("mumbai","nashik"));

// string uppercase: given data converts into capital letters.
console.log(details.toUpperCase());

// string lowercase: given data converts into small letters.
console.log(details.toLowerCase());

// string concate
let a = "pragati";
    b = "khanderao";
    let surname = a.concat(" ",b);
    console.log(surname);

//string trim method: it neglects all the starting and ending space. 
let text2 = "   hello      world ";
let text3 =  text2.trim();
console.log(text3);

//start trim: it neglects all starting space.
let text4 = text2.trimStart();
console.log(text4);

//end trim: it neglects all ending spaces.
let text5 = text2.trimEnd();
console.log(text5);

// string split : it splits data.
let mybirthdate = "02/05/1997";
var year = mybirthdate.split("/");
console.log(year[2]);