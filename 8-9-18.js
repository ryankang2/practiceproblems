/*
find cube: determine whether each number in an array is the square root of the next
for example: 
input:
  [2, 4, 16, 256]
  ,
  
 output:
   true
*/

function cubeSequence( numbers ) {
  for(var i = numbers.length - 1; i > 0; i--){
    if(numbers[i] !== numbers[i-1]*numbers[i-1]){
      return false;
    }
  }
  return true;
}

/*
make change: return an object, given a particular number less than 1 dollar, what 
change would be required to equal it
input:
  88
output:
  {
    25: 3,
    10: 1,
    5: 1,
    1: 3
  }
*/

function makeChange( amount ) {
  var obj = {
    25: 0,
    10: 0,
    5: 0, 
    1: 0,
  };
  while(amount >= 25){
    amount = amount -25;
    obj["25"]++;
  }
  while(amount >= 10){
    amount = amount - 10;
    obj["10"]++;
  }
  while(amount >= 5){
    amount = amount - 5;
    obj["5"]++;
  }
  while(amount >= 1){
    amount = amount - 1;
    obj["1"]++;
  }
  return obj;
  
}

/*
detect haiku:  given an array with strings, 
and the strings with words (syllables separated by hyphens), determine if the array
is in the form of a haiku (5-7-5)
for example: 
  
input: 
  ['oh we love to code'],
  ['mak-ing our dreams rea-li-ty'],
  ['show me the mo-ney']
output: 
  true
*/
function detectHaiku( lines ) {
  console.log(lines);
  var counter = 0;
  var j =0;
  for(var i = 0; i < lines.length; i++){
     console.log(lines[i])

    //5 syllables or 4 hyphens+spaces
    if(i%2 === 0){
      for(j = 0; j < lines[i].length; j++){
        if(lines[i][j] == " " || lines[i][j] == "-"){
          counter++;
        }
      }
      console.log(counter);
      if(counter != 4){
        return false;
      }
      counter = 0;
    }
    //7 syllables or 6 hypens+spaces
    else{
        for(j = 0; j < lines[i].length; j++){
          if(lines[i][j] == " " || lines[i][j] == "-"){
            counter++;
          }
         }
      console.log(counter);
        if(counter != 6){
          return false;
        }
      counter = 0;
    }
  }
  return true;
}