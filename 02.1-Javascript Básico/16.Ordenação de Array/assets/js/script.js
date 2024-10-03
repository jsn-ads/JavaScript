let listName = [
    "Neto",
    "Bruna",
    "Camilly",
    "Milene"
]

let listPeople = [
    {name:"Neto",age:34},
    {name:"Cristina",age:36},
    {name:"Bruna",age:26},
    {name:"Camily",age:22}
]

// Ordena de ordem alfabetica
listName.sort();
console.log(listName);

// Inverte a posição
listName.reverse();
console.log(listName);

//Ordena Objetos
listPeople.sort((a,b) => a.age - b.age);

console.log(listPeople);
