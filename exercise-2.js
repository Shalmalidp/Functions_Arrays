// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1,num2){
    if (num1 > num2)
    { return num1;
}else
    {
      return num2;
    }
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1,num2,num3){
    if (num1 > num2)
          { 
            if (num1>num3){ 
                return("number 1 is greater of the three " + num1);
              }else
                {
                  return("number 3 is  greater of the three " +num3);
                }
          }else {
            return ("number 2 is greater of the three " +num2);
          }
};


//CALLING THE FUNCTION.
maxOfThree(45,67,2);

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
if((char==='a')||(char==='e')||(char==='i')||(char==='o')||(char==='u'))
      {
        return  true;
      }
      else
      {
        return false;
      }; 
}

isVowel('a');
isVowel('p');

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------c

var myarray=[];
var newarray=[];
var str;

function rovarspraket(phrase){
    myarray= phrase.split("");
    myarray.forEach(function(i){
        if ((i==="a")||(i==="e")||(i==="i")||(i==="o")||(i==="u")){
        newarray.push(i);
          }
          else { 
                  i = '#' + i + '@' ;
                  newarray.push(i);
                }
 } )//end } for forEach
str = newarray.join([separator = ',']);
return str;
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------
var myarray=[];
var str1;

function reverse(str){
  myarray=(str.split("").reverse(""));
  str1 = myarray.join([separator = ',']);
   return str1;
}
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
//NOT SURE WITH THIS CODE

var words=[];
// var initialword,longest,nextword;

function findLongestWord(words){
  var intialword = words.reduce(function(longest,nextword){
      if (nextword.length > longest.length)
          {
            return nextword;
          }//if loop
          else
          {
            return longest;
          }

  });//for each loop and function within.
return initialword.length;
}

//ERROR :Uncaught TypeError: Cannot read property 'length' of undefined(…)

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
obj longwords={};

function filterLongWords(words, i){
    words.filter(function(longwords.length > i))
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}