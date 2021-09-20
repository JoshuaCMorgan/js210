//Run the following code.

let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}

//You'll see that it raises an error:

//TypeError: tweet.length is not a function

//Check the documentation of both TypeError and length, 
//in order to find out what causes the error.

// This is because it is a string property, not a string method. 
// And JS is expecting a number but getting somethign else.