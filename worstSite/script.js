window.addEventListener("DOMContentLoaded", () => {
    let body = document.querySelector("body")
    let search = document.querySelector("#search")
    let mail = document.querySelector("#mail")
    let valid = document.querySelector("#valid")
    let lucky = document.querySelector("#lucky")
    let advertising = document.querySelector("#advertising")
    let click = document.querySelector("#click")
    let about = document.querySelector("#about")
    let privacy = document.querySelector("#privacy")
    let terms = document.querySelector("#terms")
    let settings = document.querySelector("#settings")
    let signIn = document.querySelector("#signIn")

    search.addEventListener("click", () =>{
        Swal.fire(
            'Tout doux le loup !',
            'Prend ton temps un peu',
            'Calm down man'
          )
    })
    lucky.addEventListener("click", () => {
        body.style.backgroundColor = "green"
        lucky.value = "Feeling Good"
    })

    lucky.addEventListener("dblclick", () => {
        body.style.backgroundColor = "red"
        lucky.value = "Feeling Bad"
    })

    valid.addEventListener("click", () => {
        Swal.fire({
            icon: 'error',
            title: 'Cette barre de recherche ne sert a&#768; rien',
            text: 'PARTEZ DE CE SITE'
          })
    })

    signIn.addEventListener("click", () => {
        Swal.fire(
            'Bah non ?',
            "Trace ta route, il n'a rien a&#768; ici",
            'question'
          )
    })

})