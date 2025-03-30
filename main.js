const button = document.querySelector(".b-1")
console.log(button)
 
const span = document.querySelector(".s3")
console.log(span)

let num1 =0

button.addEventListener("click",() => {
    console.log("hello")
    num1 = num1 + 1
    span.textContent= num1
})


const button2 = document.querySelector(".b-2")
console.log(button2)

const span2 = document.querySelector(".s2")
console.log(span2)

let num2 = 0

button2.addEventListener("click", () => {
    num2 = num2 + 1
    span2.textContent= num2
})

const button3 = document.querySelector(".b-3")

button3.addEventListener("click",() => {
    num1=0
    num2=0
    span.textContent =0
    span2.textContent=0
})