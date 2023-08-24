let input = document.getElementById("input");
let btn = document.getElementById("button");
let divError = document.getElementById("textError")

let regax = /@/;
let login = /.com/;
let beforeReg = /\w\w\w+\b@/;
let betweenWord = /@\b\w\w\w+\b.com/;

btn.onclick = () =>{
    divError.innerHTML = "";
    if (regax.test(input.value) === true && login.test(input.value) === true && beforeReg.test(input.value) === true && betweenWord.test(input.value) === true){
        alert("hello")
        input.classList.replace("inputAfter", "inputBl");
    }
    else{
        let div = document.createElement("p");
        div.innerHTML = "<p>Не корректный формат почты</p>";
        div.style.cssText = "color: red;"
        divError.append(div);
        input.classList.replace("inputBl", "inputAfter");
    }

}