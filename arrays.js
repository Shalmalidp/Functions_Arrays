// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

// ---------------------------
// 1. Find largest number
// ---------------------------
function findLargestNumber(numbers){
  var largestNumber = numbers.reduce(function(largest, current) {
    if (current > largest) {
      return current;
    }
    else {
      return largest;
    };
  }); //starts at the first number automatically 
  return largestNumber;
};

// ---------------------------
// 2. Find longest string
// ---------------------------
function findLongestString(strings) {
  var longString = strings.reduce(function(longest, current){
    if (current.length > longest.length) {
      return current;
    }
    else {
      return longest;
    };
  });
  return longString;
};

// ---------------------------
// 3. Find even numbers
// ---------------------------
function evenNumbers(numbers){
  var evenNum = numbers.forEach(function(currentNum){
  if(currentNum%2==0)
  { console.log(currentNum + " Even "); //CONSOLE .LOG PRINTS OUTPUT NOT THE RETURN FUNCTION
    return (currentNum + " Even ");
  }
  else
        { 
          console.log(currentNum + " Not Even");
          return (currentNum + " Not Even");
        };
})
return evenNum;
};

// ---------------------------
// 4. Find odd numbers
// ---------------------------
function oddNumbers(numbers){
  var oddNum = numbers.forEach(function(currentNum){
  if(currentNum%2 !==0)
  { console.log(currentNum + " ODD "); //CONSOLE .LOG PRINTS OUTPUT NOT THE RETURN FUNCTION
    return (currentNum + " odd ");
  }
  else
        { 
          console.log(currentNum + " Even");
          return (currentNum + " Even");
        };
})
return evenNum;
};

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------



// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
var joinArray = numbers;
joinArray.push.apply(numbers , strings);


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------
var myjslist = instructors.filter(function(subject)
              {
                  return subject.teaches =='JavaScript';
              });


