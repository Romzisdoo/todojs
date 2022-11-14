function getUsers() {
  fetch('https://testapi.io/api/Romas/resource/todojs')
    .then((res) => res.json())
    .then((data) => {
      createPostsHTML(data.data)
    })
    .catch((error) => console.log(error))
}

function createPostsHTML(data) {
  console.log(data)

  data.forEach((elementuser) => {
    const containerEl = document.createElement('div')

    containerEl.id = 'todo_id_' + elementuser.id
    containerEl.style.border = '1px solid black'
    containerEl.style.padding = '5px'
    containerEl.style.margin = '5px'

    const firstNameEl = document.createElement('h3')
    firstNameEl.textContent = elementuser.firstname
    containerEl.append(firstNameEl)

    const lastNameEl = document.createElement('h2')
    lastNameEl.textContent = elementuser.lastname
    containerEl.append(lastNameEl)

    const todoTypeEl = document.createElement('h4')
    todoTypeEl.textContent = elementuser.todo_type
    containerEl.append(todoTypeEl)

    const todoContent = document.createElement('p')
    todoContent.textContent = elementuser.todo_content
    containerEl.append(todoContent)

    const todoStatus = document.createElement('h5')
    todoStatus.textContent = elementuser.todo_status
    containerEl.append(todoStatus)

    const todoDate = document.createElement('h4')
    todoDate.textContent = elementuser.todo_end_date
    containerEl.append(todoDate)

    containerEl.append(firstNameEl)
    const editButtonEl = document.createElement('button')

    editButtonEl.addEventListener('click', openEditModal)
    editButtonEl.textContent = 'Edit'
    containerEl.append(editButtonEl)

    document.body.append(containerEl)
  })
}

function openEditModal(e) {
  modal.style.display = 'block'
  console.log(e.target.parentElement.id)

  const idValue = e.target.parentElement.id.substring(8)

  const typeValue = document.querySelector(`#${e.target.parentElement.id} h4`)
    .textContent

  const contentValue = document.querySelector(`#${e.target.parentElement.id} p`)
    .textContent

  const statusValue = document.querySelector(`#${e.target.parentElement.id} h5`)
    .textContent

  const dateValue = document.querySelector(
    `#${e.target.parentElement.id} h4:nth-of-type(2)`,
  ).textContent

  console.log(idValue, typeValue, contentValue, statusValue, dateValue)

  console.log(document.querySelector('.editPostForm').elements)

  document.querySelector('.editPostForm').elements.id.value = idValue
  document.querySelector('.editPostForm').elements.todoType.value = typeValue
  document.querySelector(
    '.editPostForm',
  ).elements.todoContent.value = contentValue
  document.querySelector('.editPostForm').elements.todoEndDate.value = dateValue
  document.querySelector(
    '.editPostForm',
  ).elements.todoStatus.value = statusValue
}

getUsers()

///KOPIJUOJAMA IR ADAPTUOJAMA CREATE FORM | PRADZIA

// document
//   .querySelector('editPostForm')
//   .addEventListener('submit', submitEditForm)

// function submitEditForm(e) {
//   e.preventDefault()

//   const id = e.target.elements.id.value

//   const todoType = e.target.elements.todoType.value
//   const todoContent = e.target.elements.todoContent.value
//   const todoEndDate = e.target.elements.todoEndDate.value
//   const todoStatus = e.target.elements.todoStatus.value

//   const registration = {
//     id: id,

//     todo_type: todoType,
//     todo_content: todoContent,
//     todo_end_date: todoEndDate,
//     todo_status: todoStatus,
//   }

//   fetch(`https://testapi.io/api/Romas/resource/todojs/${id}`, {
//     method: 'PUT',
//     headers: { 'Content-type': 'application/json' },

//     body: JSON.stringify(registration),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console
//         .log(data)

//         .catch((error) => console.log(error))
//     })
// }

/////KOPIJUOJAMA IR ADAPTUOJAMA CREAT FORM /PABAIGA

// Get the modal
var modal = document.getElementById('myModal')

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0]

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}
