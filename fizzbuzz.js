//step 1 write a for loop starting at 1, stopping at 100, and incrementing by 1
//step 2 write an if statement that checks if the current number modulos 3 equals zero, and if the current number modulos 5 equals zero. if they are then print "fizzbuzz"
// step 3 else if the current number modulos 3 equals zero, print "Fizz"
// step 4 else if the current number modulos 5 equals zero, print "buzz"
// else just print the current number

for (var i=0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 ==0) {
        console.log("FizzBuzz")
    }
    else if (i % 3 == 0) {
        console.log("Fizz")
    }
    else if (i % 5 == 0) {
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}