"use strict";

/*const num1 = prompt("Digite um número!");
const num2 = prompt("Digite o segundo número!");

const soma = function (num1, num2) {
  return Number(num1) + Number(num2);
};

// const soma = (num1, num2) => Number(num1) + Number(num2);

alert(`A soma de ${num1} +  ${num2} = ${soma(num1, num2)}`);*/

/*function cutpieces(fruit) {
  return fruit * 4;
}

const juice = function (apple, orange) {
  const applepiece = cutpieces(apple);
  const orangepiece = cutpieces(orange);

  return `juice with ${applepiece} pieces of apple and ${orangepiece} pieces of orange`;
};

console.log(juice(2, 3));

alert(juice(2, 3));*/

//Vertore
/*
const nomes = ["João", "Miguel", "Maria", "Francisco", "Pereira"];
const marcas = new Array("XBOX", "Sony", "Nintendo");

console.log(marcas);

const material = new Array("lápis", "Caneta", "Porta Mina", "Borracha");
console.log(material);

material.push("caderno");
console.log(material);

const tam = material.push(30);
console.log(material);

material.unshift("lapiseira");
console.log(material);

console.log(
  "\nindex of caneta: " + material.indexOf("Caneta"),
  "\n index of marisa:" + material.indexOf("marisa"),
);

const vogais = new Array("a", "e", "i", "o", "u");
console.log(vogais);

const pares = ["2", "4", "6", "8", "10"];
console.log(pares);

const impares = new Array(8);
*/

//Objetos:
/*
const pessoa = {
  nome: "David",
  sobreNome: "Manuel",
  birthYear: 2003,
  BI: "07LA8023458",
  sexo: "Masculino",
  nacionalidade: "Angolano",
  calcAge: function () {
    this.age = 2026 - this.birthYear;
  },
};

console.log(pessoa.nome);
console.log(pessoa["sexo"]);

console.log(pessoa.calcAge());
console.log(pessoa.age);

/*const toKnowAbout = prompt(
  "O que você quer saber sobre o David? [nome], [BI], [sexo], [nacionalidade]",
);

console.log(
  pessoa[toKnowAbout] === undefined
    ? "Informação não encontrada"
    : pessoa[toKnowAbout],
    
    const jonas = {
      firstName: "Jonas",
      friends: ["Michael", "Peter", "Steven"],
      bestFriend: "Michael",
      hasDriversLicense: false,
      birthyear: 2003,
      calcAge: function () {
        this.age = 2026 - this.birthyear;
      },
      print: function () {
    jonas.calcAge();
    return jonas.hasDriversLicense
    ? `jonas is ${jonas.age}-year old and has a driver license`
    : `jonas is ${jonas.age}-yearold and hasn't a driver license`;
  },
};

console.log(jonas.print());

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.bestFriend} `,
);

const caderno = {
  cor: "Azul",
  tamanho: "A4",
  numDePaginas: 100,
  Brand: "Tilibra",
  setNumPaginas: function (num) {
    this.numDePaginas = num;
  },
};

caderno.setNumPaginas(200);

console.log("\n" + caderno.numDePaginas);
);*/

/*for (let i = 0; i < 10; i++) {
  console.log(`Lifting weights reptition ${(i % 5) + 1} 🏋🏿`);
}*/

const arr = new Array();
const gato = {
  nome: "Mingau",
  idade: 2,
  raca: "Persa",
  cor: "Branco",
  sexo: "Fêmea",
};

console.log(gato.mia);
