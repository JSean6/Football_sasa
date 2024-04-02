const toggleButton = document.getElementsByClassName('toggle-btn')[0]
const navBarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navBarLinks.classList.toggle('active')
})

function sendMail() {
  var params = {
    from_name1  : document.getElementById("fname").value,
    from_name2  : document.getElementById("lname").value,
    email_id : document.getElementById("email_id").value,
    message : document.getElementById("message").value,
  }
  emailjs.send("service_6k7bfym", "template_2ori7rc", params).then(function (res) {
    alert("success!" + res.status);
  })
}