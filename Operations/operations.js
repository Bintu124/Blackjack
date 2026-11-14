let num1 = 8
let num2 = 2

let value1 = document.getElementById('num1').textContent = num1
let value2 = document.getElementById('num2').textContent = num2
let output = document.getElementById('sum')

function adding() {
    let sum = value1 + value2
    output.textContent = "Sum: " + sum
}

function subtracting() {
    let sum = value1 - value2
    output.textContent = "Sum: " + sum
}

function dividing() {
    let sum = value1 / value2
    output.textContent = "Sum: " + sum
}

function multiplying() {
    let sum = value1 * value2
    output.textContent = "Sum: " + sum
}