// Included Some Required elements from DOM
let taskList = document.querySelector('ul')
const inputBox = document.getElementById('task-input')

// Function to add task
function addTask() {
    if (inputBox.value === ``) {
        alert("Write Something in the input box")
    }
    else {
        let task = document.createElement('li')
        task.innerHTML = `<div class="unchecked"><i class="fa fa-check"></i></div>
                            <p> ${inputBox.value} </p>
                            <span class="cross"><i class="fa fa-plus"></i></span>`

        taskList.appendChild(task)
        setData()
        if (document.querySelector('li') != null) {
            let taskButtons = document.querySelector('.task-btn-container')
            taskButtons.style.display = 'flex'
        }
    }
}

// Function to mark task as done and remove the task using cross button
// when user will click on the task 'checked class will be toggled'
// when user will click the cross icon whole list item will be removed
taskList.addEventListener("click", (element) => {
    if (element.target.tagName == 'DIV' || element.target.classList.contains('fa-check') || element.target.tagName == 'P') {
        if (element.target.classList.contains('fa-check')) {
            const s = element.target.parentElement
            s.parentElement.classList.toggle('checked')
        }
        element.target.parentElement.classList.toggle('checked')
        setData()
    }

    else if (element.target.tagName == 'SPAN' || element.target.classList.contains('fa-plus')) {
        if (element.target.classList.contains('fa-plus')) {
            const l = element.target.parentElement
            l.parentElement.remove()
        }
        element.target.parentElement.remove()
        setData()
        if (document.querySelector('li') == null) {
            let taskButtons = document.querySelector('.task-btn-container')
            taskButtons.style.display = 'none'
        }
    }
}, false)

// Function to mark all tasks as done
function markAll() {
    let li = document.querySelectorAll('li')
    li.forEach((item) => {
        item.classList.add('checked')
    })
    setData()
}

// Function to remove all tasks
function removeAll() {
    let li = document.querySelectorAll('li')
    li.forEach((item) => {
        item.remove()
    })
    document.querySelector('.task-btn-container').style.display = 'none'
    setData()
}

// Function to Save the Data
function setData(){
    localStorage.setItem("data", taskList.innerHTML)
}

function getData(){
    taskList.innerHTML = localStorage.getItem("data")
    if (document.querySelector('li') != null) {
        let taskButtons = document.querySelector('.task-btn-container')
        taskButtons.style.display = 'flex'
    }
}

getData()
