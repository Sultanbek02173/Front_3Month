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
            div.append(element);
            if ((i + 1) % 3 == 1){
                element.setAttribute('class', 'red');
            }
            else if ((i + 1) % 3 == 2){
                element.setAttribute('class', 'yellow')
            }
            else if ((i + 1) % 3 == 0){
                element.setAttribute('class', 'green')
            }
        }
    }
}
