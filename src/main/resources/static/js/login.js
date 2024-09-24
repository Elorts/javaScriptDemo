var submitBtn = document.querySelector("#submitBtn")
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

// GETMAPPING
//username.addEventListener("blur", () => {
//   // console.log("We have a blur event");
//   var username = document.querySelector("#username")
//   var password = document.querySelector("#password")
//   fetch(`http://localhost:8080/users/exists?username=${username.value}&password=${password.value}`)
//    .then((response) => response.json())
//    .then((data) => {
//        console.log(data)
//    })
//})

// POSTMAPPING
username.addEventListener("blur", () => {
   var username = document.querySelector("#username")
   var password = document.querySelector("#password")
   var user = {
                 "username": username.value,
                 "password": password.value
               }
   fetch(`http://localhost:8080/users/exists`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
   })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    }                      )
})