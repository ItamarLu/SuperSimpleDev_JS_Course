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