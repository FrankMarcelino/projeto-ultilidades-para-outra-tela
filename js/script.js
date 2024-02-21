// relogio
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(() =>{
  let tempo = new Date()
  let horasAtual = tempo.getHours()
  let minutosAtual = tempo.getMinutes()
  let segundosAtual = tempo.getSeconds()

  if (horasAtual < 10) horasAtual = '0'  +  horasAtual
  if (minutosAtual < 10) minutosAtual = '0' + minutosAtual
  if (segundosAtual < 10) segundosAtual = '0' + segundosAtual

  horas.textContent = horasAtual
  minutos.textContent = minutosAtual
  segundos.textContent = segundosAtual

} )

// // botao modo escuro

const darkModeToggle = document.getElementById('dark-mode');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }
});

// // calculadora



function insert(num) {
    document.querySelector('.resultado').innerHTML += num    
   
}

function apagar() {
    let tela = document.querySelector('.resultado').innerHTML
    document.querySelector('.resultado').innerHTML = tela.substring(0, tela.length -1)
}


function limpar() {
    document.querySelector('.resultado').innerHTML = ""
}

function calcular() {
    let tela = document.querySelector('.resultado').innerHTML
    if (tela) {
        document.querySelector('.resultado').innerHTML = eval(tela)
    }
}

// to-do-list


// seleção de elementos
const todoForm = document.querySelector('#lista-tarefas-forms')
const todoInput = document.querySelector('#form-input')
const todoList = document.querySelector('#lista-tarefas')
const editForm = document.querySelector('#edita-form')
const editInput = document.querySelector('#edit-input')
const cancelEditbtn = document.querySelector('#btn-cancelar')

console.log(todoForm)

let oldInputValue
// funções
const saveTodo = (text) => {

    const todo = document.createElement('div')
    todo.classList.add('tarefas')

    const todoTitle = document.createElement('h3')
    todoTitle.innerText = text
    todo.appendChild(todoTitle)
    


    const doneBtn = document.createElement('button')
    doneBtn.classList.add('tarefa-finalizada')
    doneBtn.innerText = '✔️'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement('button')
    editBtn.classList.add('tarefa-edita')
    editBtn.innerText = '✏️'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('tarefa-remove')
    deleteBtn.innerText = '❌'
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)
    todoInput.value = ''
    todoInput.focus()
}

const toggleForms = () => {
    editForm.classList.toggle('hide')
    todoForm.classList.toggle('hide')
    todoList.classList.toggle('hide')
}

const updateTodo = (text) => {

    const todos = document.querySelectorAll('#lista-tarefas')

    todos.forEach((todo) => {

        let todoTitle = todo.querySelector('h3')

        console.log(todoTitle)

        if(todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text
        }
    })
} 

// eventos
todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputValue = todoInput.value

    if(inputValue) {
        saveTodo(inputValue)
    }
})

document.addEventListener('click', (elemento) => {
    const targetElemento = elemento.target
    const parentElemento = targetElemento.closest('div')

    let todoTitle

    if(parentElemento && parentElemento.querySelector('h3')) {
        todoTitle = parentElemento.querySelector('h3').innerText
    }

    if(targetElemento.classList.contains('tarefa-finalizada')){
        parentElemento.classList.toggle('feito')
    }

    if(targetElemento.classList.contains('tarefa-edita')){
        toggleForms()

        editInput.value = todoTitle
        oldInputValue = todoTitle
    }

    if(targetElemento.classList.contains('tarefa-remove')){
        parentElemento.remove()
    }
})

cancelEditbtn.addEventListener('clcik', (elemento) => {
    elemento.preventDefault()

    toggleForms()
})

editForm.addEventListener('submit', (elemento) => {
    elemento.preventDefault()

    const editInputValue = editInput.value

    if(editInputValue) {

        updateTodo(editInputValue)
    }

    toggleForms()
})
