'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed'),
    headerButton = document.querySelector('.header-button'),
    todoСontainer = document.querySelector('.todo-container'),
    todoItem = document.querySelector('.todo-item');

    let todoData = [];

    if(localStorage.getItem('todo')){
        todoData = JSON.parse(localStorage.getItem('todo'));
        render();
    }

    const showText = function(){
        localStorage.getItem
    }

    function render(){
        todoList.textContent = '';
        todoCompleted.textContent = '';

        todoData.forEach(function(item, i){
            const li = document.createElement('li');
            li.classList.add('todo-item');

            li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>';

            if(item.completed){
                todoCompleted.append(li);
            } else {
                todoList.append(li);
            }
            const todoComplete = li.querySelector('.todo-complete');
            todoComplete.addEventListener('click', function(){
                item.completed = !item.completed;
                localStorage.setItem('todo', JSON.stringify(todoData));
                render();
            })
            
            const todoDelete = li.querySelector('.todo-remove');
            todoDelete.addEventListener('click', function(){
                todoData.splice(i, 1);
                localStorage.setItem('todo', JSON.stringify(todoData));
                render();
            }) 
        });
    }

    todoControl.addEventListener('submit', function(event){
        event.preventDefault();
        
        const newTodo = {
            value: headerInput.value,
            completed: false
        };
        
        todoData.push(newTodo);
        headerInput.value = '';

        localStorage.setItem('todo', JSON.stringify(todoData));
        render();
        
    });
    headerInput.addEventListener('input', function(){
        
        function emptyValue (){
            if( headerInput.value !== ''){
                headerButton.removeAttribute('disabled');
            }
        }
        emptyValue();
    });
    
    render();
    
    headerButton.setAttribute('disabled', 'true');
   
   
    
   
    