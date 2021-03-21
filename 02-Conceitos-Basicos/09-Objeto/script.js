let animal = {
    tipo:   "Cachorro",
    raca:   "vira-lata",
    peso:   "40 kg",
    idade:  3,
    barulho:function(){
        console.log("uau uau uau uau...");
    }
    
};

console.log(animal.tipo);
animal.barulho();

// array de objetos

let Animais = [
    {tipo:"Cachorro", raca:"pitbull"},
    {tipo:"Gato", raca:"siames"},
    {tipo:"Porco-da-India", raca:"PeloFofo"},
    {tipo:"Papagaio", raca:"Zefalador"}
]

console.log(Animais);
console.log(Animais[2].raca+" "+Animais[2].tipo);