///Rasom event listeneri, pasiimant forma 'form' kaip elementas
document.querySelector('form').addEventListener('submit', submitForm)

///Apsirasom "submitForm"
function submitForm(e) {
  e.preventDefault()
  const firstName = e.target.elements.firstName.value
  const lastName = e.target.elements.lastName.value
  const email = e.target.elements.email.value

  const todoType = e.target.elements.todoType.value
  const todoContent = e.target.elements.todoContent.value
  const todoEndDate = e.target.elements.todoEndDate.value
  const todoStatus = e.target.elements.todoStatus.value

  ///////////////>>>>>>>>>>>>>>>>>>>>>>
  ///Susikuriam atskira "registration" metoda skirta "body: JSON.stringify(registration),"
  ////pagal db lenteles stulpeliu pavadinimus
  const registration = {
    firstname: firstName,
    lastname: lastName,
    email: email,
    todo_type: todoType,
    todo_content: todoContent,
    todo_end_date: todoEndDate,
    todo_status: todoStatus,
  }
  /////////////////>>>>>>>>>>>>>>>>>>>>>>>>>>

  ///////////////IRASOM I DUOMENU BAZE
  fetch('https://testapi.io/api/Romas/resource/todojs', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    ////Body siunciam objekta "const registration" paversta i eilute
    body: JSON.stringify(registration),
  })
    /////Nors duomenu neskaitom, kaip su GET metodu bet palaukiam,
    ///kol db apdoroja uzklausa, kad zinotume ar sekmingai apdorota//
    //// su "then" gauname responsa is db
    // verciam ji is jason i js objekta su json metodu

    .then((res) => res.json())
    /// ir dar karta laukiam duomenu, kol jie bus apdoroti
    .then((data) => {
      /// gaves duomenis issiloginami duomenys
      console.log(data)
      //   document.querySelector('.posts').innerHTML = ''
      //   getPosts()
      /////////////////////NUKREIPIMAS I PUSLAPI
      // window.location.replace('../todo-wnd/todoapp.html')
    })

    ///////////handlinimo klaida
    .catch((error) => console.log(error))
}
