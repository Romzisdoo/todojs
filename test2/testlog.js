function loginFormSubmit() {
  var farmerID = document.getElementById('username-field').value
  localStorage.setItem('id', farmerID)
  return false
}
