
function reverseString(str) {
  
  return str.split("").reverse().join("");
  // console.log(strArray);
  // return strArray.reverse().join("");
  // console.log(strArray);
}

console.log(reverseString("Geromy Cunningham"));

function reverseString(str) {
    var strArray = str.split("");
    // console.log("splitting the string");
    // console.log(strArray);
    strArray.reverse();
    // console.log("after reverse");
    // console.log(strArray);
    var reverseStr = strArray.join("");
    // console.log("after join");
    // console.log(reverseStr);
    
    return reverseStr;
}