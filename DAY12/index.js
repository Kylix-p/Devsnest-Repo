const input = document.querySelector('input')
const btn = document.querySelector('.ADD')
const todolist = document.querySelector('.todolist')
const todos = {

}
var arr = [" ", "  ", "   ", "     ", "      ", "       "]

btn.addEventListener('click', () => {

    textel();
    // checker();
    // deleteU();

    input.value = ""
})
document.querySelector('input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        textel();
        // checker();
        // deleteU();

        input.value = ""


    }
});

function textel() {
    const container = document.createElement('div');
    container.className= "newcontainer"
    const newtodo = document.createElement('div');
    newtodo.className = "todo"
    let delbutton = document.createElement('button');
    delbutton.className = "tododel"
    let checkbutton = document.createElement('button');
    checkbutton.className = "todocheck"
    container.appendChild(checkbutton)
    container.appendChild(delbutton)

    checker(checkbutton);
    deleteU(delbutton,newtodo);
    if (input.value != "" && input.value[0] != " ") {
        if (input.value[1] == " ") {

            newtodo.innerHTML = input.value;
            delbutton.innerHTML = "Delete"
            checkbutton.innerHTML = "Done"
            // newtodo.appendChild(checkbutton)
            todolist.appendChild(newtodo)
            newtodo.appendChild(container)
            localStorage.setItem("todo", todolist.appendChild(newtodo))
        } else {
            newtodo.innerHTML = input.value;
            delbutton.innerHTML = "Delete"
            checkbutton.innerHTML = "Done"
            // newtodo.appendChild(checkbutton)
            todolist.appendChild(newtodo)
            newtodo.appendChild(container)
            localStorage.setItem("todo", todolist.appendChild(newtodo))
        }
    }
}

function checker(btn) {
//     const checkEl = todolist.querySelectorAll(".todocheck");
//     checkEl((checkbutton) =>
//         checkbutton.addEventListener("click", () => {
//             console.log(checkbutton.classList.toggle("checkclicked"));
//         }))
btn.addEventListener("click", ()=>
{
  console.log(btn.classList.toggle("checkclicked"));  
})
}

function deleteU(btn,newtodo) {
    // const deleteEl = todolist.querySelectorAll(".tododel");
    // let newtodo = todolist.querySelector(".todo");
    
    btn.addEventListener("click", () => {
            
            newtodo.classList.replace("todo" ,"deleteclick")
            console.log("DELETED");
        })
}