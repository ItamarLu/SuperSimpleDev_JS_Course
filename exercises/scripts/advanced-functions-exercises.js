/* 12a and 12b
const add = function() {
  console.log(2+3);
};

add();
add();

function runTwice(fun) {
  fun();
  fun();
}

runTwice(function() {
  console.log('12b');
})
runTwice(add);
*/


function loading() {
  document.querySelector('.js-start-btn')
  .innerHTML = 'loading...';
  setTimeout(finished, 2000);
}
function finished() {
  document.querySelector('.js-start-btn')
  .innerHTML = 'Finished!';
}

let intervalId;
function added() {
  document.querySelector('.js-added-p')
  .innerHTML = 'Added';
  clearTimeout(intervalId);
  intervalId = setTimeout(remove, 2000);
  console.log(intervalId);
}
function remove() {
  document.querySelector('.js-added-p')
    .innerHTML = '';
}
