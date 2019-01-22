// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
const sportsTeams = ['Giants', 'Warriors', 'Lakers', 'Knicks']

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/

//higher order function for arr problems
function higherOrderFunction1(arr, cb){
  console.log(cb(arr))
}


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return arr.length;
}
higherOrderFunction1(items, getLength);


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  const lastItem = arr.length - 1;
  return arr[lastItem];
}
higherOrderFunction1(items, last);

//higher order function for Number problems
function higherOrderFunction2(x, y, cb){
  console.log(cb(x, y))
}

function sumNums(x, y) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return x + y;
}
higherOrderFunction2(4, 9, sumNums);



function multiplyNums(x, y) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return x * y
}
higherOrderFunction2(4, 3, multiplyNums);

//Higher Order Function to check list;
function higherOrderFunction3(item,list,cb){
  console.log(cb(item, list))
}

function contains(item,list) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for(let i = 0; i < list.length; i++){
    if(item.toLowerCase() === list[i].toLowerCase()){
      return true;
    }
  }
  return false;
}

higherOrderFunction3('yo-yo',items, contains)
higherOrderFunction3('giants',sportsTeams, contains)


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
