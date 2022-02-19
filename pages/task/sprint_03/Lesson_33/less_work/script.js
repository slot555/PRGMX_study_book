console.log('hello');

function checkAnswer(userAnsw, correctAnsw) {
    if ( Number(userAnsw) === correctAnsw) {
        alert('Ответ Верный');
        return 1;
    } else {
        alert('Ответ Неверный');
        return 0;
    }
}

function askQuestion(question, answ) {
    let userAnsw = prompt(question);
    return checkAnswer(userAnsw, answ);
}

let correctAnswers = 0,
    incorrectAnswers = 5;
const qustion1 = 'Сколько будет 2 + 2?',
    answ1 = 4,
    qustion2 = 'Сколько будет 2 * 2?',
    answ2 = 4,
    qustion3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?',
    answ3 = 1,
    qustion4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?',
    answ4 = 12,
    qustion5 = 'Сколько будет 2 + 2 * 2?',
    answ5 = 6;

correctAnswers += askQuestion(qustion1, answ1);
correctAnswers += askQuestion(qustion2, answ2);
correctAnswers += askQuestion(qustion3, answ3);
correctAnswers += askQuestion(qustion4, answ4);
correctAnswers += askQuestion(qustion5, answ5);

incorrectAnswers -= correctAnswers;
alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);
