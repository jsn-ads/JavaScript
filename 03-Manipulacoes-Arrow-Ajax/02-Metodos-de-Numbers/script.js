let n = 10;

// Transforma numero em string

console.log(n.toString());

// remove casa decimais e arredonda o valor para mais ou para menos

n = 10.43878375;

console.log(n.toFixed(2));

// Transforma string em numero

n = "25";

n2 = "26.89";

console.log(parseInt(n) + 10);
console.log(parseFloat(n2) + 12);