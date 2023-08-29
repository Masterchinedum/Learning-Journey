//multiline string
let multilineString = `This is a multiline string`;
console.log(multilineString);

//3a. Create the text 'my name is: ' as a string.
let myName = 'my name is: ';
console.log(myName);

//3b. Create the text 'Chinedu' as a string.
let myName2 = 'Chinedu';
console.log(myName2);

//3c. Concatenate the two strings from 3a and 3b to create the string 'my name is: Chinedu'
let myName3 = myName + myName2;
console.log(myName3);

//3d. Use document.body.innerHTML = ...; to display the string 'my name is: Chinedu' on the web page
document.body.innerHTML = myName3;
