// console.log(input.value.length);
const input = document.querySelector(".input")
const numbers = document.querySelector(".numbers")
input.addEventListener("keydown", (keydown) => {
    numbers.innerHTML = input.value.length + 1
    console.log(input.value.length + 1)
    
})