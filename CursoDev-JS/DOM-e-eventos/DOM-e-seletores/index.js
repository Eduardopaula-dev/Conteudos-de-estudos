// getElementById - seleciona um elemento pelo ID

const button = document.getElementById("button");
console.log(button);


// getElementsByClassName - seleciona elementos pela classe 

const h1 = document.getElementsByClassName("title");
console.log(h1);

// querySelectorAll - seleciona todos os elementos que correspondem ao seletor CSS

const titles = document.querySelectorAll(".title");
console.log(titles);

// querySelector - seleciona o primeiro elemento que corresponde ao seletor CSS

const p = document.querySelector(".paragraph");
console.log(p);
p.textContent = "Texto alterado pelo JavaScript!";
