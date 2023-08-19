/* 11o, 11p and 11q
function searchArray(array) {
  let num = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'search') {
      num = i;
      break; 
    }  
  }
  console.log(num)
}

searchArray(['hello', 'world', 'search', 'good']);
searchArray(['not', 'found']);
searchArray(['hello', 'world', 'search', 'good', 'search']);
*/
/* 11r >>> 11u
const foods = ['egg', 'apple', 'egg', 'egg', 'ham']
function removeEgg(foods) {
  const newArray = [];
  let index = 0;
  for (let i = 0; i < (foods.reverse()).length; i++) {
    if (foods[i] === 'egg' && index < 2) {
      index++;
      continue;
    }
    newArray.push(foods[i]);
  }
  return(newArray.reverse());
}

console.log(removeEgg(foods));
console.log(foods);
*/
/* 11v
for (let i = 1; i <= 20; i++) {
  
  
  if (i%3 === 0 && i%5 === 0) {
    console.log('FizzBuzz');
    continue;
  } else if (i%3 === 0) {
    console.log('Fizz');
    continue;
  } else if (i%5 === 0) {
    console.log('Buzz');
    continue;
  }
  console.log(i);
}
*/

function searchArray(array, name) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === name) {
      return true; 
    }  
  }
  return false;
}

function unique(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++)  {
    if (searchArray(newArray, array[i])) {
      continue;
    } else {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
}

unique(['green', 'red', 'blue', 'red']);
unique(['red', 'green', 'green', 'red']);