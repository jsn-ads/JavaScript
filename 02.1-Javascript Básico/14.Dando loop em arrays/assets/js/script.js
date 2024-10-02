let list = ['Neto','Cristina','Giovana','Giselle','Bruna'];

let people = [
    {name:"neto",age:35},
    {name:"cristina",age:37},
    {name:"giovana",age:12},
    {name:"giselle",age:44}
]

// for (let i = 0; i < list.length; i++) {
//     console.log(list[i])
// }

// for (let i in list) {
//     console.log(list[i])
// }

for(let name of list){
    console.log(name);
}

for(let object of people){
    console.log(`nome ${object.name} - idade ${object.age}`);
}

for(let obj in people){
    console.log(`nome : ${people[obj].name.toUpperCase()}`);
}