let prom = prompt("Введите число: ")

for(i = 0; i < prom; i++){
    switch(true){
        case i % 2 == 0 :{
            document.write(`<h1>${i}</h1>`)
        }
    }
}