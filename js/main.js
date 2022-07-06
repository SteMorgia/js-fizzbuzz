const container = document.getElementById('container');

for (let i = 1; i <= 100; i++) {
    let contenuto = i;
    let classe = "";
    if ( i % 3 == 0) {
        contenuto  = "buzz";
        classe = "buzz";
    }
    if ( i % 5 == 0) {
        contenuto = "fizz";
        classe = "fizz";
    }
    if (i % 15 == 0) {
        contenuto = "fizzbuzz";
        classe = "fizzbuzz";
    }

    container.innerHTML += `<div class="box ${classe}">${contenuto}</div>`;
}
