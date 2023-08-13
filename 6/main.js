let input = document.getElementById("input");
let button = document.getElementById("button");
let div = document.getElementById("div")
let count;
let element;

input.addEventListener('change', (event) =>{
        count = input.value;
})

button.onclick = () =>{
    for (i = 0; i < count; i++){
        if (i < 10){
            element = document.createElement('div');
            div.append(element)
        }
    }
}
