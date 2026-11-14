let box = document.getElementById("greybox")

function operate(name){
    // console.log(name)
    box.value += name
}
// operate(9)

function total(name){
    box.value = eval(box.value)
}

function clearBox(name){
    box.value = ""
}