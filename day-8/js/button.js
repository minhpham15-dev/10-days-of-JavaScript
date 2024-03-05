const btn = document.getElementById('btn');

let count = 0;
const inc = () => {
    count++;
    btn.innerHTML = count;
};
