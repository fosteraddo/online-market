const signupbtn = document.querySelector(".signup-page")
const login = document.querySelector("#login")
const signup = document.querySelector("#signup")
// const submit = document.querySelector(".submit")
const submit = document.querySelector("#submit")

signupbtn.addEventListener("click", (e) => {
    login.style.display = "none"
    signup.style.display = "block"
})

const form = document.querySelector("#myForm")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nameInput = document.querySelector("#name")
    const emailInput = document.querySelector("#email")
    const password = document.querySelector("#password")

    nameInput.addEventListener("input", (e) => {
        console.log(e.target.value)
        

    })
    console.log(nameInput.value)
    console.log(emailInput.value)
    if (nameInput.value === "") {
        alert("Please enter your name.");
      }
    // form.submit()
})



// submit.addEventListener("click", (e) => {
//     myForm.addEventListener("submit", () => {
//         e.preventDefault()
//     const name = name.value
//     console.log(name)
//     })
// })
