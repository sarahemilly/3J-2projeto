const url= 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarDadosGlobais(){
 const res = await fetch(url);
 const secao = document.querySelector('.graficos-container')
 const dados = await res.json();
 const totalPessoasmundo = dados.total_pessoas_mundo
 const totalPessoasConectadas = dados.total_pessoas_mundo
 const tempoMedio = dados.tempo_medio
 console.log(dados);
 const paragrafo = document.createElement('p');
 paragrafo.classList.add('graficos-texto')
 paragrafo.innerHTML = ` você sabia que o mundo tem  <span> ${totalPessoasmundo} </span> de habitantes e destes <span> ${totalPessoasmundo} </span> estão conectadas a alguma rede social e ficam em média <span> ${tempoMedio}</span> conectadas.  `
 secao.appendChild(paragrafo)
 
 

}

visualizarDadosGlobais();