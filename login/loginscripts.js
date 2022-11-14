// document.querySelector('form').addEventListener('submit', submitForm)

// function submitForm(e) {
//     e.preventDefault()
//     const firstName = e.target.elements.firstName.value
//     const lastName = e.target.elements.lastName.value
//     const email = e.target.elements.email.value

//     const registration = {
//       firstname: firstName,
//       lastname: lastName,
//       email: email,
//     }

//     fetch('https://testapi.io/api/Romas/resource/todojs', {
//       method: 'POST',
//       headers: { 'Content-type': 'application/json' },
//       body: JSON.stringify(registration),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data)
//         //   document.querySelector('.posts').innerHTML = ''
//         //   getPosts()

//         window.location.replace('../todo-wnd/todoapp.html')
//       })
//       .catch((error) => console.log(error))
//   }
//GET METODAS

function getUsers() {
  fetch('https://testapi.io/api/Romas/resource/todojs')
    .then((res) => res.json())
    .then(
      (data) => console.log(data),
      // {
      //   //   showUserName(data.data)
      // }
    )
    .catch((error) => console.log(error))
}

// function showUserName (data){
//     console.log(data);

//     data.forEach(post) => {
//         const containerEl = document.createElement('div');

//     const nameEl = document.createElement('h3')
//     nameEl.textContent=post.lastname
// }

function showUserName(data) {
  console.log(data)

  data.forEach((post) => {
    const containerEl = document.createElement('div')
    containerEl.id = 'post_id_' + post.id
    containerEl.style.border = '1px solid black'
    containerEl.style.padding = '5px'
    containerEl.style.margin = '5px'

    const titleEl = document.createElement('h2')
    titleEl.textContent = post.Title
    containerEl.append(titleEl)

    document.querySelector('.posts').append(containerEl)
  })
}

getUsers()

//ALGORITMAS STEP BY STEP///////

///1// HTML forma>> /"Firstname", "lastName", "submit"/>>> HTML tag>>>

///2// DB  base >> /"firstname", "lastname", "id"/>>> SUKURIAM FUNKCIJA "userUnic">>>

///3// FUNKCIJA "userUnic"  >> Algoritmas tikrina ar vykdant "login" db yra toks vardas ir pavarde su vienodu ID >>
//jei toks irasas yra "userUnic" funkcijai leidziama persijungti i todo.app, jei n4ra ALERT lentele

///>>>///
/// ToDoList page rodomas sarasas visu irasu su filtru atitinkanciu "userUnic" funkcijos kriterijus
///>>>// Tas pats fragmentas atkartojamas regitracijos formoje,perjungiant i ToDoList paga
///>>>// "userUnic" funkcijos info (vardas ir pavarde ) papildomai isvedami ToDoList page, kaip, prisijungusio asmens duomenys
