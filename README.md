# TO-DO-LIST-APP-PROJRCT:
Project 2: To-Do List App
• Technologies Used: HTML5, CSS3 and JavaScript
• Tool: Visual Studio Code
Description:
• Developed a user-friendly task management app to add, edit, delete, and mark tasks as completed
• Implemented dynamic DOM manipulation using JavaScript to update tasks in real time
• Designed a responsive UI for smooth usage on desktop and mobile devices.
• Focused on clean code structure and user interactions.

1.TO-DO-LIST.HTML:
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>To-Do List</title>
  <link rel="stylesheet" href="to-do-list.css" />
</head>
<body>
  <div class="todo-container">
    <h1>My To-Do List</h1>
    <div class="input-section">
      <input type="text" id="todo-input" placeholder="Add a new task..." />
      <button id="add-btn">Add</button>
      
    </div>
    <ul id="todo-list"></ul>
    
    
  </div>
  <script src="to-do-list.js"></script>
</body>
</html>

2.TO-DO-LIST.CSS:
body {
    font-family: Arial, sans-serif;
    background: #252121;
    display: flex;
    justify-content: center;
    padding-top: 50px;
  }
  
  .todo-container {
    background: rgb(243, 5, 5);
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    width: 100%;
    max-width: 400px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .input-section {
    display: flex;
  }
  
  #todo-input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
  }
  
  #add-btn {
    padding: 10px;
    font-size: 16px;
    background-color: #00b894;
    color: rgb(5, 248, 46);
    border: none;
    cursor: pointer;
  }
  
  #add-btn:hover {
    background-color: #019875;
  }
  
  #todo-list {
    list-style: none;
    padding: 0;
    margin-top: 20px;
  }
  
  li {
    background: #898492;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  li.completed {
    text-decoration: line-through;
    color: gray;
  }
  
  .delete-btn {
    background: #d63031;
    color: yellow;
    border: none;
    padding: 5px 8px;
    cursor: pointer;
    border-radius: 5px;
  }


  3.TO-DO-LIST.JS:
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
