const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
  const task = todoInput.value.trim();
  if (task !== '') {
    addTask(task);
    todoInput.value = '';
  }
});

const checkbox = document.createElement('input');
  checkbox.type='checkbox';

function addTask(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;


  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });
  
  const checkbox =document.createElement('checkbox');
  checkbox.textContent ='';
  checkbox.className = '';
  checkbox.addEventListener('click',() =>{

  });
  

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}
