let inputEl = document.getElementById("screen")
// for numbers..
let w = true
// for delete btn..
let x = true

function display(value){
    if(x){
        inputEl.textContent += value;
    }


}
function AC(){
    w = true
    x = true
    inputEl.textContent = "";
}

function del(){
    if (x){
        let text = inputEl.textContent
        inputEl.textContent = text.slice(0, -1)
    }
}

function operator(value){
    x = true
    inputEl.textContent += value;
}



function calc(){
    let text = inputEl.textContent
    if (eval(text) != undefined){
        inputEl.textContent = eval(text);
        x = false
        w = false
    }else{
        x = false
        w = false
        inputEl.textContent = "Enter Your Equation!"
    }

}
