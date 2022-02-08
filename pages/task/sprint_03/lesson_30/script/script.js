document.addEventListener("DOMContentLoaded", () => {
    let str = "Привет";
    let str2 = 'Одинарные кавычки тоже подойдут';
    let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;
    console.log('кавычки');
    console.log(phrase);

    let name = "Иван";
    console.log( `выражение, ${name}!` ); // Привет, Иван!
    console.log( `результат: ${1 + 2}` ); // результат: 3

    console.log('typeof - section');
    console.log(typeof undefined); // "undefined"
    console.log(typeof 0); // "number"
    console.log(typeof 10n); // "bigint"
    console.log(typeof true); // "boolean"
    console.log(typeof "foo"); // "string"
    console.log(typeof Symbol("id")); // "symbol"
    console.log(typeof Math); // "object"  (1)
    console.log(typeof null); // "object"  (2)
    console.log(typeof alert); // "function"  (3)

    console.log('Type conversion - section');
    console.log( Number("   123   ") ); // 123
    console.log( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
    console.log( Number(true) );        // 1
    console.log( Number(false) );       // 0

    let mainHeading = document.querySelector('h1');
    mainHeading.style.color = 'green';
});

function changeColor () {
    let mainHeading = document.querySelector('h1');
    mainHeading.style.color = 'red';
}






