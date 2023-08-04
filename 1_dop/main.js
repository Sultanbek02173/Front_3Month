let conf = confirm('Есть 18?');

if (conf == true){
    let prom = prompt("Как вас зовут?")
    alert(`Добро пожаловать, ${prom}!`)
}
else{
    alert('Вы не подходите')
}