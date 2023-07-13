console.log(100);
console.log(20, "This is a string", true);

const x = 100;

//
console.log(x);

console.error("alert");

console.warn("warning");
//Use group and groupend to group
console.group("Key Values");
console.table({ name: "zain", email: "zain.sync@gmail.com" });
console.groupEnd();

const styles = "padding : 10px; background-color: black; color: green;";

console.log("%cThis is stylised text", styles);

// Navigate to end or start hold cmd and arror keys
// Navigate to end of word or beginning hold optioon and arrow keys
// Duplicate line from to above or below hold Options shift and arrow keys
// Options + Arrow keys to move faster between words
// Shift + Options and arrow keys to highlight faster
// Move a line of code above or below Options + Arrow
// cmd + d select all similar words
// Hold option + click to do above
// cmd + shift + o search a file
// cmd + option + f search in file
