const url = "URL";

const params = {
    method: 'POST',
    body:JSON.stringify({
        nome:'Jose Neto',
        idade: 30
    })
};

fetch(url, params)
.then((r)=>r.json())
.then((json)=>console.log(json));