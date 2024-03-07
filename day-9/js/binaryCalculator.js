const result = document.getElementById('res');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btnSum = document.getElementById('btnSum');
const btnSup = document.getElementById('btnSup');
const btnMul = document.getElementById('btnMul');
const btnDiv = document.getElementById('btnDiv');
const btnClr = document.getElementById('btnClr');
const btnEql = document.getElementById('btnEql');

btn0.addEventListener('click', () => {
    result.innerHTML += btn0.innerHTML;
});

btn1.addEventListener('click', () => {
    result.innerHTML += btn1.innerHTML;
});

btnSum.addEventListener('click', () => {
    if (result.innerHTML === '') {
        return;
    } else {
        result.innerHTML += btnSum.innerHTML;
    }
});

btnSup.addEventListener('click', () => {
    result.innerHTML += btnSup.innerHTML;
});

btnMul.addEventListener('click', () => {
    result.innerHTML += btnMul.innerHTML;
});

btnDiv.addEventListener('click', () => {
    result.innerHTML += btnDiv.innerHTML;
});

btnClr.addEventListener('click', () => {
    result.innerHTML = '';
});

btnEql.addEventListener('click', () => {
    const cal = result.innerHTML
        .split(/(\d+)([\+\-\*\/])(\d+)/g)
        .filter((e) => e != '');
    const [op1, operator, op2] = cal;
    switch (true) {
        case operator === '+':
            result.innerHTML = (
                parseInt(op1, 2) + parseInt(op2, 2)
            ).toString(2);
            break;
        case operator === '-':
            result.innerHTML = (
                parseInt(op1, 2) - parseInt(op2, 2)
            ).toString(2);
            break;
        case operator === '*':
            result.innerHTML = (
                parseInt(op1, 2) * parseInt(op2, 2)
            ).toString(2);
            break;
        case operator === '/':
            result.innerHTML = Math.floor(
                parseInt(op1, 2) / parseInt(op2, 2),
            ).toString(2);
            break;
    }
});
