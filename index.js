
let result = document.getElementById("output");

function display(num) {
    result.value += num;  
}

function Calculate() {  
        result.value = eval(result.value);    
}

function Clear() {
     result.value = "";
}

function Del() {
    result.value = result.value.slice(0, -1);
}