var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var btnElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_to_do')) || []

function renderTodos() {
    listElement.innerHTML = ''
    
    for (todo of todos) {
        var createElement = document.createElement('li')
        var createText = document.createTextNode(todo)

        var linkElement = document.createElement('a')
        var textLink = document.createTextNode('Excluir')

        var pos = todos.indexOf(todo)

        linkElement.setAttribute('onclick', 'removeTodo('+ pos +')')


        linkElement.setAttribute('href', '#')
        linkElement.appendChild(textLink)

        createElement.appendChild(createText)
        createElement.appendChild(linkElement)
        listElement.appendChild(createElement)
    }
}

renderTodos()


btnElement.onclick = addTodo

function addTodo() {
    var inputText = inputElement.value

    todos.push(inputText)
    console.log(todos)

    inputElement.value = ''
    renderTodos()
    saveLocalStorage()
}

function removeTodo(pos) {
    todos.splice(pos, 1)
    renderTodos()
    saveLocalStorage()
}

function saveLocalStorage() {
    localStorage.setItem('list_to_do', JSON.stringify(todos))
}