document.querySelector('form').addEventListener('submit', submitForm)

form.addEventListener('submit', (e) => {
  e.preventDefault()

  validateInputs()
})
//https://www.w3schools.com/js/js_validation.asp

function submitForm(e) {
  e.preventDefault()
  const firstName = e.target.elements.firstName.value
  const lastName = e.target.elements.lastName.value
  const email = e.target.elements.email.value

  // const regUser = document.getElementById('firstName').value
  // localStorage.setItem('id', regUser)
  // return false

  const registration = {
    firstname: firstName,
    lastname: lastName,
    email: email,
  }

  fetch('https://testapi.io/api/Romas/resource/todojs', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(registration),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      //   document.querySelector('.posts').innerHTML = ''
      //   getPosts()

      window.location.replace('../todo-wnd/todoapp.html')
    })
    .catch((error) => console.log(error))
}
///////////////////BANDYMAS SU FUNKCIJA//
// function auth(event) {
//   event.preventDefault()

//   var firstname = document.getElementById('firstName').value
//   var lastname = document.getElementById('lastName').value
//   var email = document.getElementById('email').value

//   if (
//     firstname === 'jonas' &&
//     lastname === 'kurmelis' &&
//     email === 'admin@gmail.com'
//   ) {
//     window.location.replace('../todo-wnd.todoapp.html')
//   } else {
//     alert('Invalid information')
//     return
//   }
// }
//////////////////////////////////////////////////
