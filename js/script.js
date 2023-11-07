

// define variables
let formSubmit = document.querySelector('#formSubmit')
let input = document.querySelector('#todo')
let submitBtn = document.querySelector('#submitBtn')
let todoList = document.querySelector('#todoList')
let message = document.querySelector('#messages')

let todos = []

formSubmit.addEventListener('submit',function(e){
    e.preventDefault();
    
    if (!input.value) {
     // validate
    formValidation(input.value)
    } else {
        todos.push(input.value);
    input.value = '';
    CreateTodo() 
    }
   

   
    
})


// Create New Todo 
function CreateTodo() {
    todoList.innerHTML = '';
    todos.map((todo_item ,index)=> {
        todoList.innerHTML += (`
        <tr>
            <td>${index+1}</td>
            <td>${todo_item}</td>
            <td>
                <button class="btn btn-sm btn-primary me-1 update">Update</button>
                <button class="btn btn-sm btn-danger delete" >Delete</button></td>
        </tr>`);

        
        destroy()
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

// todo list delete
let destroy = () => {
    let deleteBtn = document.querySelectorAll('.delete');
    let deleteItemsArr = Array.from(deleteBtn);
    deleteItemsArr.map((deleteItem,index) => {
        deleteItem.addEventListener('click',function(){
            todos.splice(index,1)
            CreateTodo()
        })
    })
}



