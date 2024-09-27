let listaPacientes = [];

let paciente = {
    nome : 'Jose Neto',
    idade : 35,
    cpf : '033.229.411-08',
    endereco : {
        rua : 'rua MMM10 qd36 lt38 tres marias',
        telefone: '(62) 9 99351-8323' 
    }
}

listaPacientes.push(paciente);

console.log(`nome : ${listaPacientes[0].nome} , idade : ${listaPacientes[0].idade} , endereço : ${listaPacientes[0].endereco.rua}`);