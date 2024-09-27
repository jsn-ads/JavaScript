let paciente = {
    nome : 'Jose Neto',
    idade : 34,
    peso : 82,
    altura : 1.80,
    imc : function(){
        let a = this.peso / this.altura;
        
        if(a <= 25){
            return "Abaixo do peso";   
        }

        if(a > 25 && a <= 30){
            return "Peso Ideal";
        }

        if(a > 30){
            return "Acima do Peso";
        }
    }
}

console.log(`${paciente.nome} seu IMC : ${paciente.imc()}`)