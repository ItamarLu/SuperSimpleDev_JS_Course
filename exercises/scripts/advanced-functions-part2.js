// 12j, 12k
const multiply = (num1, num2) => num1 * num2;

console.log(multiply(2, 3));
console.log(multiply(7, 10));

// 12i
function countPosite(nums) {
  let count = 0;
  nums.forEach(value => (value > 0) ? count++ : false);
  console.log(count);
}

countPosite([1, -3, 5]);
countPosite([-2, 3, -5, 7, 10]);

// 12m
function addNum(array, num) {
  console.log(array.map(value => value + num));
}

addNum([1, 2, 3], 2);
addNum([-2, -1, 0, 99], 2);

// 12n
function removeEgg(foods) {
  console.log(foods.filter(value => value != 'egg'));
}

removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']);

// 12o
function removeEgg2(foods) {
  count = 0;
  console.log(foods.filter(value => {
    if (value === 'egg' && count < 2) {
      count++;
      return value != 'egg';
    } else {
      return true;
    }
  }));
}

removeEgg2(['egg', 'apple', 'egg', 'egg', 'ham']);

// 12p and 12q
function loading() {
  document.querySelector('.js-start-btn')
  .innerHTML = 'loading...';
  setTimeout(() => {
    document.querySelector('.js-start-btn')
    .innerHTML = 'Finished!';
  }, 2000);
}

document.querySelector('.js-start-btn').addEventListener('click', () => loading());

