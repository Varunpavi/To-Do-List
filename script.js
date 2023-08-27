const todolist = document.getElementById('todo');
const addList = document.getElementById('additem');
const mylist = document.getElementById('mylist');
const noTasksMessage=document.getElementById('notaskmessage');
addList.addEventListener('click', function(e) {
    e.preventDefault();
    
    const newListItem = document.createElement('li');
  
        newListItem.textContent = todolist.value;
        if(todolist.value.length > 0){
        newListItem.classList.add('task');
        mylist.appendChild(newListItem);
        todolist.value = ''; 
        }


    const tododiv = document.createElement('div');
    tododiv.classList.add('btns');
    newListItem.appendChild(tododiv);

   // Check button
   const checkButton = document.createElement('button');
   checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
   checkButton.classList.add('check_btn');
   tododiv.appendChild(checkButton);

    //edit button
    // const editButton = document.createElement('button');
    // editButton.innerHTML='<i class="fa-regular fa-pen-to-square"></i>';
    // editButton.classList.add('edit_btn');
    // tododiv.appendChild(editButton);
    

    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML='<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add('trash_btn');
    tododiv.appendChild(deleteButton);

 
    checkButton.addEventListener('click', function() {
        newListItem.classList.toggle('checked');
    });


        
    deleteButton.addEventListener('click' ,function(){
        newListItem.classList.add('removing');

        setTimeout(function(){
        newListItem.remove();
        
        }, 3000);

    });

    
});
