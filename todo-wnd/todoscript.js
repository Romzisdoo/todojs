document.getElementById('reguser').innerHTML = localStorage.getItem('id')
console.log('TEST', localStorage.getItem('id'))
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

function showUserName(data) {
  console.log(data)

  data.forEach((post) => {
    // const containerEl = document.createElement('div')
    // containerEl.id = 'post_id_' + post.id
    // containerEl.style.border = '1px solid black'
    // containerEl.style.padding = '5px'
    // containerEl.style.margin = '5px'

    const nameEl = document.createElement('h2')
    nameEl.textContent = post.lastname
    containerEl.append(nameEl)

    // document.querySelector('.posts').append(containerEl)
    document.body.append(containerEl)
  })
}

getUsers()
