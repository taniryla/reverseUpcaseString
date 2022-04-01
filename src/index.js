import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
/*-----------------------------------------------------------------
Challenge: 07-reverseUpcaseString
Difficulty: Basic
Prompt:
- Write a function called reverseUpcaseString that accepts a single string argument, then returns the string with its characters in reverse order and converts all characters to uppercase.
Examples:
reverseUpcaseString("SEI Rocks!"); //=> "!SKCOR IES" 
-----------------------------------------------------------------*/
// Your solution for 07-reverseUpcaseString here:

</div>
`;

function reverseUpcaseString(str) {
  return str.split("").reverse().join("").toUpperCase();
}
