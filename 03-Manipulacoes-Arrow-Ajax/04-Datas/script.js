let d = new Date();

console.log(d);

console.log(d.toDateString());

console.log(d.toUTCString());

// definindo a hora

let e = new Date('2020-01-01 15:42:17');

console.log(e);

// ano

console.log(d.getFullYear());

// mes
console.log(d.getMonth());

// dia

console.log(d.getDate());

// horas

console.log(d.getHours());

// milesegundos de 1970

console.log(d.getTime());

//adicionar data

d.setFullYear(2022)

console.log(d);

d.setMonth(11);

console.log(d);

d.setDate(d.getDate() + 5);

console.log(d);

d.setHours(d.getHours() + 3);

console.log(d);