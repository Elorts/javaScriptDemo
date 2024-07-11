var submitBtn = document.querySelector("#submitBtn")
var username = document.querySelector("#username")
var users = []

submitBtn.addEventListener('click', () => {
    var username = document.querySelector("#username")
    var password = document.querySelector("#password")

    if (username.value == '' || password.value == '') {
        alert("Please enter username and password")
    } else {
        alert("All good!")
        var user = {
            "username" : username.value,
            "password" : password.value
        }

        users.push(user);
    }
})

username.addEventListener("blur", () => {
   // console.log("We have a blur event");
   fetch("http://localhost:8080/users/exists")
    .then((response) => {
        console.log(response)
    })
})