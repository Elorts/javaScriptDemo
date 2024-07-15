var usernameTextbox = document.querySelector("#username")
var eyeIcons = document.querySelectorAll(".fa-face-grin-wide")

eyeIcons.forEach( (eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        if (eyeIcon.classList.contains("fa-face-grin-wide")) {
            eyeIcon.classList.replace("fa-face-grin-wide", "fa-face-smile-beam")
            if (eyeIcon.getAttribute("id") === "passwordEyeIcon") {
                document.querySelector("#password").type = "text"
            } else {
                document.querySelector("#confirmPassword").type = "text"
            }
        } else {
            eyeIcon.classList.replace("fa-face-smile-beam", "fa-face-grin-wide")
            if (eyeIcon.getAttribute("id") === "passwordEyeIcon") {
                      document.querySelector("#password").type = "password"
                  } else {
                      document.querySelector("#confirmPassword").type = "password"
                  }


            console.log(eyeIcon.getAttribute("id"))
        }
    })
})

console.log(eyeIcons)

//var myPromise = new Promise( (resolve, reject) => {
//    let i = 1;
//
//    if (i === 1) {
//        resolve("hey, i === 1!!! Yahoo!!")
//    } else {
//        reject(" i not equal to 1")
//    }
//})
//
//myPromise.then((message) => {
//    console.log(message)
//}).catch((message) => {
//    console.log(message)
//})

usernameTextbox.addEventListener("blur", () => {
    var user = {
        "username": usernameTextbox.value
    }

    fetch("/users/exists", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then((rE) => rE.json())
    .then((dataToPostExists) => {
        if (dataToPostExists === true) {
           console.log("Oops, this username already exists")
           usernameTextbox.focus()
           usernameTextbox.select()
           showErrorAnimation().then((message) => {
                // animation is completed at this point
                console.log("We're now in the callback function")
                console.log(message);
                usernameTextbox.style.backgroundColor = `rgb(255, 255, 255)`
           })
        }

    })







})


// ***************** callback example
//function showErrorAnimation(callback) {
//    // perform the error animation code
//    console.log("We're in the showErrorAnimation function")
//    var i = 0
//
//    var animationInterval = setInterval(() => {
//        i++
//        usernameTextbox.style.backgroundColor = `rgb(${i}, 0, 0)`
//        if (i >= 255) {
//            clearInterval(animationInterval);
//            console.log("Done executing animation code")
//            callback()
//        }
//    }, 1)
//}


function showErrorAnimation() {
    return new Promise((resolve, reject) => {

        console.log("We're in the showErrorAnimation function")
        var i = 0

        var animationInterval = setInterval(() => {
            i++
            usernameTextbox.style.backgroundColor = `rgb(${i}, 0, 0)`
            if (i >= 255) {
                clearInterval(animationInterval);
                resolve("Done executing animation code")

            }
        }, 1)
    })
}