function ColetarCep() {
    let cep = document.querySelector('#cep').value
    console.log(cep)
    Dados(cep)
    
}
//http://viacep.com.br/ws/49055670/json/

async function Dados(cep) {
    let dados = await fetch(`http://viacep.com.br/ws/${cep}/json/`).then(response => response.json())
    console.log(dados)
    dadosTela(dados)
}



function dadosTela(dados) {
    document.querySelector("#endereco").innerHTML= "Endereço: " + dados.logradouro
    document.querySelector("#bairro").innerHTML= "Bairro: " + dados.bairro
    document.querySelector("#cidade").innerHTML= "Cidade: " + dados.localidade
    document.querySelector("#estado").innerHTML= "Estado: "+ dados.estado
    document.querySelector("#regiao").innerHTML= "Região: " + dados.regiao
}