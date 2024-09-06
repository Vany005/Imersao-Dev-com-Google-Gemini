// Função para criar o pop-up
function criarPopUp() {
    const popUp = document.createElement('div');
    popUp.classList.add('popup'); // Adiciona uma classe CSS para estilizar
    
    const iconeAlert = document.createElement('i');
    iconeAlert.style.color = '#FFD43B';
    iconeAlert.innerHTML = '<i class="fa-solid fa-triangle-exclamation" style="color: #FFD43B;"></i>';
    
    const mensagem = document.createElement('p');
    mensagem.textContent = ' Este site contém conteúdo que pode ser sensível e desencadear gatilhos em algumas pessoas. Clique em "Estou ciente" para continuar.';
  
    const button = document.createElement('button');
    button.id = 'buttonCiente';
    button.textContent = 'Estou ciente';
    button.addEventListener('click', () => {
      popUp.style.display = 'none'; // Esconde o pop-up
    });
    
    popUp.appendChild(iconeAlert);
    popUp.appendChild(mensagem);
    popUp.appendChild(button);
    document.body.appendChild(popUp);
  }
  
  // Chama a função ao carregar a página
  window.onload = criarPopUp;


  function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Experimente palavras chaves.EX: brasileiro, serial killer, serie</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let sinopse = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        sinopse = dado.sinopse.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.sinopse}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Experimente palavras chaves.EX: brasileiro, serial killer, serie</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
