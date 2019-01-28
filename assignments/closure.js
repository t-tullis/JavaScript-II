// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function name(first,last){
  const fullName = `${first} ${last}`;
  console.log(`My full name is: ${fullName}`);

  function time(time){
    const currentTime = time;
    console.log(`The current time is ${time}`);

    function together(){
      console.log(`My name is ${fullName} and the time is ${time}`);
    }
    together();
  }
  time('2:12PM');
}
name('Terrell', 'Tullis');

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let startCounter = 0;
  // Return a function that when invoked increments and returns a counter variable.
  console.log(startCounter);
  const newCounter = () =>{
    return ++startCounter;
  }
  console.log(newCounter());
  console.log(newCounter());
  console.log(newCounter());
  console.log(newCounter());
  console.log(newCounter());
  console.log(newCounter());
};
counter();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
