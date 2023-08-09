let select = document.getElementById('select');
let input = document.getElementById('input');
let div = document.getElementById('div');

select.addEventListener('change', (event) =>{
    div.style.backgroundColor = select.value;
})

input.addEventListener('change', (event) =>{
    div.style.backgroundColor = input.value; 
})
