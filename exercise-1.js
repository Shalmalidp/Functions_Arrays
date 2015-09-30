///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.
var num1, num2;

var sum=function(num1,num2)
{
  return num1 +num2;
}




// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

var avg = function(num1, num2, num3){
return ((num1+num2+num3) / 3);
}



// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length
var myStr = "Hi my name is Shalmali";
var getLength = function(myStr){
  return myStr.length;
};

//calling the function
getLength(myStr);


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

var greaterThan= function(num1,num2){
  if (num1 > num2)
    { return false;
}else
    {
      return true;
    }
};

//CALLING THE FUNCTION WITH PARAMETERS
greaterThan(5,7);
greaterThan(89,90);



// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

var greet = function(name){
return(' Hello ' + name);
};

greet("Tim");
greet("JD");


// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

var madlib = function(wrd1,wrd2,wrd3,wrd4){

return("quick brown " + wrd1 + " "+ " like the fox"+ " " +wrd2 + " "+"jumps over " + wrd3 + " "+ "like" +" "+wrd4+" "+"did over the fence");

}

madlib("JD","Tim","Max","Spencer");



///////////////////////////////////////////////////////
///////////////////////////////////////////////////////