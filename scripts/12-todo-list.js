const todoList = [{
  name:'make dinner',
  dueDate:'2022-12-22'
  },{
  name: 'wash dishes',
  dueDate:'2022-12-22'
  }];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });
  /* 
    for (let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      // const name = todoObject.name; --- this has a shortcut
      // const dueDate = todoObject.dueDate; --- Also this
      const {name, dueDate} = todoObject;
      const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button">Delete</button>
        `;
    todoListHTML += html;
  } */
  
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
  
  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name, --- has shortcut
    // dueDate: dueDate
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
}

document.querySelector('.js-name-input').addEventListener('keydown', (event) => {
    (event.key === 'Enter') ? addTodo() : false;
  });

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  })