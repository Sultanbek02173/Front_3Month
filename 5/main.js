let button = document.getElementById('button');
let input = document.getElementById('input');
let div = document.getElementById('div');

button.onclick = () => {
    let color =  input.value;

    div.style.backgroundColor = color;
}