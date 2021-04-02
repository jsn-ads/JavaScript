function fazer(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('ok');
        },3000);
    });
}

fazer().then((resposta)=>{
    console.log(resposta);
});