// Complete the solution so that it splits the string into pairs of 2 characters.
// If the string contains an odd number of characters then it should replace
// the missing second character of the final pair with an underscore ('_').

// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// BETTER SHORTER SOLUTION
function solution(str){
  const arr = [];
  for (let i = 0; i < str.length; i += 2){ // increment by two
    const second = str[i+1] || '_'; // second will be '_' if length odd
    arr.push(str[i] + second);
  }
  return arr;
}


// MY SOLUTION
function solution(str){
  const arr = str.split('');
  let result = [];
  let index = 0;

  if (arr.length % 2 === 0) {
    while (index < arr.length) {
      result.push(arr.slice(index, index + 2).join(''));
      index += 2;
    }
  } else {
    while (index < arr.length - 1) {
      result.push(arr.slice(index, index + 2).join(''));
      index += 2;
    }
    result.push(arr[arr.length - 1] + "_");
  }

  return result;
}
