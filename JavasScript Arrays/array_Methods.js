var colors = ["red","orange","yellow"];
colors.push("green");

// ["red","orange","yellow","green"]

colors.pop();

// ["red","orange","yellow"]

// pop() returns the removed statement

var col = colors.pop();
// col = yellow

colors.unshift("infrared");

colors.shift();

// shift() also returns removed element

var colo = colors.shift();

var friends = ["charlie","Liz","David","Mattias","Liz"];

friends.indexOf("David"); //2

friends.indexOf("Liz"); // 1, not 4

// returns -1 if element isn't present



var fruits = ['Banana','Orange','Lemon','Apple','Mango'];

var citrus = fruits.slice(1,3);
// citrus = ['Orange','Lemon']

// You can use slice() to copy an entire array

var nums = [1,2,3];
var otherNums = nums.slice();