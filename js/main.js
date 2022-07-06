const container = document.getElementById('container');

for (let i = 0; i <= 100; i++) {
    container.innerHTML += `<div class="box">${i}</div>`;
}