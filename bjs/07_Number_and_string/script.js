let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');

// Кнопки Цифры с 0 до 9
document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
});

document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
});

document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
});

document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
});

document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
});

document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
});

document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
});

document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
});

document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
});

document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
});
// СБРОС из окна ввода
document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
});

// Кнопка Суммы
document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
});

// Кнопка Разницы
document.getElementById('btn_diff').addEventListener('click', function () {
    lastOperand += parseInt(inputWindow.value);
    operation = 'diff';
    inputWindow.value = '';
});

// Кнопка Умножения
document.getElementById('btn_mult').addEventListener('click', function () {
    lastOperand += parseInt(inputWindow.value);
    operation = 'mult';
    inputWindow.value = '';
});

// Кнопка Деления
document.getElementById('btn_sep').addEventListener('click', function () {
    lastOperand += parseInt(inputWindow.value);
    operation = 'sep';
    inputWindow.value = '';
});

// Кнопка Квадратного корня
document.getElementById('btn_sqrt').addEventListener('click', function () {
    lastOperand += parseInt(inputWindow.value);
    operation = 'sqrt';
    inputWindow.value = '';
});



// Операция сложения
document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation === 'sum'){
        const result = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }   
});

// Операция разницы
document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation === 'diff'){
        const result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
});

// Операция умножения
document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation === 'mult'){
        const result = lastOperand * parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
});

// Операция деления
document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation === 'sep'){
        const result = lastOperand / parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }   
});

// Извлечение квадратного корня
document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation === 'sqrt'){
        const result = lastOperand;
        operation = null;
        lastOperand = 0;
        inputWindow.value = Math.sqrt(result);
    }   
});

// СБРОС из окна ввода
document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
});

