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