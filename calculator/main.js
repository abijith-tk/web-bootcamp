function add(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    document.getElementById("result").textContent = num1 + num2
}

function subtract(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    document.getElementById("result").textContent = num1 - num2 
}

function multiply(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    document.getElementById("result").textContent = num1 * num2
}

function divide(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    document.getElementById("result").textContent = num1 / num2
}