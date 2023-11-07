
// define variables
let formSubmit = document.querySelector('#formSubmit')
let input = document.querySelector('#todo')
let submitBtn = document.querySelector('#submitBtn')
let todoList = document.querySelector('#todoList')
let message = document.querySelector('#messages')

let todos = []
let updateIndex;

formSubmit.addEventListener('submit',function(e){
    e.preventDefault();
    
    if (!input.value) {
        formValidation(input.value)
    } else {
        if(submitBtn.innerHTML == 'Create'){
            CreateTodo()
        }else{
            UpdateTodo()
        };
        
    }
})


// Read  Todo 
function ShowTodo() {
    todoList.innerHTML = '';
    todos.map((todo_item ,index)=> {
        todoList.innerHTML += (`
        <tr>
            <td>${index+1}</td>
            <td>${todo_item}</td>
            <td>
                <button class="btn btn-sm btn-primary me-1 edit">Edit</button>
                <button class="btn btn-sm btn-danger delete" >Delete</button></td>
        </tr>`);
        editTodo()
        destroyTodo()
    })
    
}

// form validation
let formValidation = (request) =>{
    if (!request) {
        message.innerHTML = '<div class="alert alert-danger">Faka Dewa Jbe Na!!</div>';
        Clear()
    }
}

// message clear
function Clear(){
    setTimeout(function() {
        message.innerHTML = '';
    },1000)
}

// Create todo List
let CreateTodo = () =>{
    todos.push(input.value);
    input.value = '';
    ShowTodo() 
    message.innerHTML = '<div class="alert alert-success">Dhonnobad Todo Create Hoice !!!</div>';
    Clear() 
}

// Edit todo list
let editTodo = () => {
    let editBtn = document.querySelectorAll('.edit');
    let editItemsArr = Array.from(editBtn);
    
    editItemsArr.map((editItem,index) => {
        editItem.addEventListener('click',function(){
            submitBtn.innerHTML = 'Update';
            input.value = todos[index]
            updateIndex = index;
        })
    })
}


// update Todo List
let UpdateTodo = () => {
    todos[updateIndex] = input.value
    ShowTodo()
    message.innerHTML = '<div class="alert alert-success">Dhonnobad Todo Update Hoice !!!</div>';
    Clear()
    submitBtn.innerHTML = 'Create';
    input.value = ''
}

// todo list delete
let destroyTodo = () => {
    let deleteBtn = document.querySelectorAll('.delete');
    let deleteItemsArr = Array.from(deleteBtn);

    deleteItemsArr.map((deleteItem,index) => {
        deleteItem.addEventListener('click',function(){
            todos.splice(index,1)
            ShowTodo()
            message.innerHTML = '<div class="alert alert-danger"> Todo Delete Kora Hoice !!!</div>';
             Clear() 
        })
    })
}



