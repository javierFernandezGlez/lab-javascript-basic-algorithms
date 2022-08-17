//Iteration 1

let hacker1 = "Tony";
let firstMessage = "The driver's name is ";
firstMessage += hacker1;
console.log(firstMessage);

let hacker2 = "Fernando";
let secondMessage = "The navigator's name is ";
secondMessage += hacker2;
console.log(secondMessage);

//Iteration 2

let length1 = hacker1.length;
let length2 = hacker2.length;

let message = "";

if(length1 > length2) {
  message += "The driver has the longest name, it has " + length1 + " characters.";
}
else if(length1 < length2) {
  message += "It seems that the navigator has the longest name, it has " + length2 + " characters."
}
else {
  message += "Wow, you both have equally long names, " + length1 + " characters!";
}

console.log(message);

//Iteration 3

let name3 = "";

for(let i = 0; i < length1; i++) {
  let char = hacker1[i].toUpperCase();
  
  if(i < length1 - 1) {
    name3 += char + " ";
  }
  else {
    name3 += char;
  }
}

console.log(name3);

let name4 = "";

for(let i = length2 - 1; i >= 0; i--) {
  name4 += hacker2[i];
}

console.log(name4);

let comparer = hacker1.localeCompare(hacker2);

if(comparer === -1) {
  console.log("The driver's name goes first.")
}
else if(comparer === 1) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?");
}

//Bonus 1

let firstParagraph = "Aenean imperdiet quam malesuada, pellentesque sapien at, tempus lacus. Curabitur vel pellentesque risus. Cras elementum, massa vel laoreet elementum, arcu nunc dapibus metus, porttitor tincidunt ligula elit eget ex. Aenean at blandit mauris, a accumsan eros. Aliquam imperdiet libero in diam commodo, vel tincidunt velit ultricies. Nulla congue augue purus, sed scelerisque augue tristique a. Ut pulvinar volutpat metus vel pellentesque. Maecenas venenatis libero at erat cursus, nec posuere velit consequat. Sed ac mauris ac elit aliquam ornare vel ut odio. Donec lacus magna, lobortis nec lectus et, efficitur efficitur leo. Sed scelerisque interdum dictum. Curabitur facilisis mi quis gravida iaculis."

let secondParagraph = "Aliquam sit amet ex pellentesque, venenatis dolor sed, hendrerit risus. Fusce fermentum maximus tellus, eu convallis ex bibendum ut. Duis imperdiet condimentum accumsan. Ut ultrices tempus orci eu elementum. Aenean eleifend sit amet sem vel consequat. Praesent sit amet nunc bibendum dolor sagittis consectetur. Fusce convallis imperdiet dapibus. Aliquam erat volutpat. Phasellus dictum non tortor et gravida. Nulla facilisi. Curabitur eleifend mollis neque, non egestas purus scelerisque sed."

let thirdParagraph = "Nulla eget vulputate odio. Cras et placerat tellus, id molestie dui. Vestibulum consectetur metus lacus, quis gravida lacus feugiat in. Nunc justo dolor, sollicitudin convallis vestibulum ac, sollicitudin nec sem. Ut euismod pretium libero eu maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean venenatis arcu ex. Pellentesque nibh ante, tincidunt id egestas et, accumsan ac justo. Vivamus blandit sit amet dolor tempor molestie. Proin vitae laoreet dui. Vivamus a eros at tortor maximus vulputate. Vestibulum feugiat, leo quis pellentesque dictum, risus dui ornare urna, a hendrerit libero sem ut nunc. Nulla ut metus sed nunc malesuada interdum."

function wordCount(paragraph) {
  let n = paragraph.length;
  let count = 1;
  
  for(let i = 0; i < n; i++) {
    if(paragraph[i] === " ") {
      count++;
    }
  }
  return count;
}

console.log(wordCount(firstParagraph) + wordCount(secondParagraph) + wordCount(thirdParagraph));

function etCount(paragraph) {
  let n = paragraph.length;
  let count = 0;
  let index = 0;
  
  while(index < n) {
    let word = "";
    while(paragraph[index] !== " " && paragraph[index] !== "," && paragraph[index] !== ".") {
      let char = paragraph[index].toLowerCase();
      word += char;
      index++;
    }
    if(word === "et") {
      count++;
    }
    index++;
  }
  return count;
}

console.log(etCount(thirdParagraph) + etCount(firstParagraph) + etCount(secondParagraph));

//Bonus 2

let str = "A man, a plan, a canal, Panama!";

function isLetter(char) {
    return char.toUpperCase() !== char.toLowerCase();
}

function isPalindrome(s) {
    let left = 0;
    const n = s.length - 1;
    let right = n;
    
    while(left < right) {
        let leftChar = s[left];
        let rightChar = s[right];
        
        if(!isLetter(leftChar)) {
            left++;
            continue;
        }
        
        if(!isLetter(rightChar)) {
            right--;
            continue;
        }
        
        if(leftChar.toLowerCase() !== rightChar.toLowerCase()) {
            console.log(leftChar.toLowerCase());
            console.log(rightChar.toLowerCase());
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}
console.log(isPalindrome(str));
