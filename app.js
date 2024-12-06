const addNew = document.getElementById("addNew")
const form = document.getElementById("form")

addNew.addEventListener("click", ()=>{
    form.classList.toggle("visible")
})

const catInput1 = document.getElementById("catInput1")
const catInput2 = document.getElementById("catInput2")
const submit = document.getElementById("submit")
submit.addEventListener("click", (event)=>{
    event.preventDefault()
})