let prom = prompt("Введите число: ", '')

function chet_neChet(num) {
    number = num 
    switch (true) {
        case number === null || number === "": {
            return "Вы ничего не ввели!"
        }
        case number % 2 === 0: {
            return "Число четное!"
        }
        case number % 2 === 1: {
            return "Число не четное!"
        }
        default: {
            return "Введите число!"
        }
        
    }
}   

alert(chet_neChet(prom))