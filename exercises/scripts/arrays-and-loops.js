/* 11a >>> 11f

const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);

function getLastValue(array) {
  const lastIndex = array.length - 1;
  console.log (array[lastIndex]);
}


getLastValue([1, 20, 22, 24, 5]);
getLastValue(['hi', 'hello', 'good']);

function arraySwap(array) {
  const lastIndex = array.length - 1;
  const firstValue = array[0];
  const lastValue = array[lastIndex];
  array[0] = lastValue;
  array[lastIndex] = firstValue;
  console.log(array);
}

arraySwap([1, 20, 22, 24, 5]);
arraySwap(['hi', 'hello', 'good']);

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i += 2;
}

let i2 = 5;
while (i2 >= 0) {
  console.log(i2);
  i2--;
}
*/

/* It wasn't in the exercise, but this code reverses an array

const arrayOne = [1,2,3];
let arrayTwo = [];
const aOL = arrayOne.length;

for (let i = aOL - 1; i >= 0; i--) {
  arrayTwo.push(arrayOne[i]);
}

console.log(arrayTwo);
*/

/* 11g >>> 11j

const arrayOne = [1,2,3];
let arrayTwo = [];

for (let i = 0; i < arrayOne.length; i++) {
  arrayTwo.push(arrayOne[i]+1);
}
console.log(arrayTwo);

function addOne(array) {
  arrayScope = [];
  for (let i = 0; i < array.length; i++) {
    arrayScope.push(array[i]+1);
  }
  console.log(arrayScope);
}

addOne([1,2,3]);
addOne([-2,-1,0,99]);

function addNum(array, num) {
  arrayScope = [];
  for (let i = 0; i < array.length; i++) {
    arrayScope.push(array[i]+num);
  }
  console.log(arrayScope);
}

addNum([1,2,3],2);
addNum([1,2,3],3);
addNum([-2,-1,0,99],2);

function addArrays(array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i]+array2[i]);
  }
  console.log(newArray);
}

addArrays([1,1,2],[1,1,3]);
addArrays([1,2,3],[4,5,6]);

function countPositive(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    (nums[i]>0) ? count++ : count;
  }
  console.log(count);
}

countPositive([1,-3,5]);
countPositive([-2,3,-5,7,10]);
*/

function minMax(nums) {
  const count = {
    min: nums[0],
    max: nums[0]
  };

  for (let i = 0; i < nums.length; i++) {
    (nums[i] > count.max) ? count.max = nums[i] : count.max; 
    (nums[i] < count.min) ? count.min = nums[i] : count.min; 
  }

  console.log(count);
}

minMax([1,-3,5]);
minMax([-2,3,-5,7,10]);
minMax([]);
minMax([3]);

function countWords(words) {
  const word = ['apple', 'grape', 'apple']
  const count = {};

  for (let i = 0; i < words.length; i++) {
    
  }
}