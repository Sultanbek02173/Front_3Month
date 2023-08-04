let prom = prompt("Введите число: ")

for(i = 0; i < prom; i++){
    switch(true){
        case i % 2 == 1 :{
            document.write(`<h1>${i}</h1>`)
        }
    }
}