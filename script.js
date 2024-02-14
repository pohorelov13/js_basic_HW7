
let flag = true
let result = "Дякую за тестування, приходьте ще";
while (flag) {
    const a = getUserNumber();
    const b = getUserNumber("Введіть інше число:");
    const choice = getUserNumber("Введіть 1, якщо хочете протестувати цікаву функцію\nВведіть 2, " +
        "якщо хочете протестувати дуже просту і читабельну функцію,\n Введіть 3, якщо хочете протестувати звичайну функцію\n" +
        "Введіть 0 для виходу");
    if (choice === 0) {
        flag = false;
        break;
    }

    switch (choice) {
        case 1 : {
            result = doInterestingFunction(a, b);
        }
            break;
        case 2: {
            result = doVerySimpleAndReadableFunction(a, b);
        }
            break;
        case 3: {
            result = doBoringFunction(a, b);
        }
            break;
        default:
            result = "Ви обрали помилкову команду"
    }
    alert(result);
}


function doInterestingFunction(a, b) {
    if (!checkIsNumber(a, b)) return "Потрібно вводити число...";
    if (isEven(a)) {
        if (isEven(b)) {
            return a * b;
        } else return b;
    } else {
        if (!isEven(b)) {
            return a + b;
        } else return a;
    }
}

function doBoringFunction(a, b) {
    if (!checkIsNumber(a, b)) return "Потрібно вводити число...";
    if (isEven(a) && isEven(b)) {
        return a * b;
    } else if (!isEven(a) && !isEven(b)) {
        return a + b;
    } else {
        if (isEven(a)) {
            return b;
        } else return a;
    }
}

function doVerySimpleAndReadableFunction(a, b) {
    if (checkIsNumber(a, b)) return "Потрібно вводити число...";
    return a % 2 ? b % 2 ? a + b : a : b % 2 ? b : a * b;
    // return (a % 2) ? (b % 2 ? a + b : a) : (b % 2 ? b : a * b);
    // return !isEven(a) ? (!isEven(b) ? a + b : a) : (!isEven(b) ? b : a * b);
}

function getUserNumber(messageForUser) {
    if (typeof messageForUser === "undefined") messageForUser = "Введіть число";
    return +prompt(messageForUser);
}

function isEven(number) {
    return number % 2 === 0;
}

function checkIsNumber(...numbers) {
    for (const number of numbers) {
        if (typeof number !== "number" || isNaN(number)) return false;
    }
    return true;
}
