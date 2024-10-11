async function quantidadeDeUsuarios(){
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
const resultado = await fetch (url);
const dados = await resultado.json();
const nomeDaasRedes  =Object.keys(dados);
const quantidadeDeUsuarios = Object.values(dados);

const  infos = [
    {
        x: nomeDaasRedes,
        y: quantidadeDeUsuarios,
        type: 'bar'
    }
]
const grafico = document.createElement('div');
grafico.className =  'grafico'
document.getElementById('graficos-container').appendChild(grafico);
Plotly.newPlot(grafico,infos)


}

quantidadeDeUsuarios()