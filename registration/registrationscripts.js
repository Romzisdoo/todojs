document.querySelector('form').addEventListener('submit', submitForm)

///////////Papildomai///////////////////////////////////////>>>>>>VALIDAVIMAS

//https://www.w3schools.com/js/js_validation.asp
///////////////////////////////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function submitForm(e) {
  e.preventDefault()
  const firstName = e.target.elements.firstName.value
  const lastName = e.target.elements.lastName.value
  const email = e.target.elements.email.value

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

      /////////////////////NUKREIPIMAS I PUSLAPI
      window.location.replace('../todo-wnd/todoapp.html')
    })

    .catch((error) => console.log(error))
}
