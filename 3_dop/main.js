let prom = prompt("Введите число: ", '')

function posit_negativ_num(num) {
    switch (true) {
        case num === null || num === '': {
            return "Вы ничего не вели!"
        }
        case num == 0: {
            return "Ноль не положительное и не отрицательное!"
        }
        case num > 0: {
            return "Это положительное число!"
        }
        case num < 0: {
            return "Это отрицательное число!"
        }
        default :{
            return "Введите число!"
        }
    }
}

alert(posit_negativ_num(prom))