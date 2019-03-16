// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
var i = 0;

var int = setInterval(() => {
  if (i < 5) {
    console.log("Hello World");
    i++;
  } else {
    console.log("Done");
    clearInterval(int);
  }
}, 1000);
