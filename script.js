document
  .getElementById("formClima")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const city = document.getElementById("cityInput").value;

    fetch(`http://localhost:3000/climatempo/${city}`)
      .then((response) => response.json())
      .then((data) => {
        const tempoResult = document.getElementById("climaResult");
        const iconeClima = document.getElementById("iconeClima");

        function getIconeClima(clima) {
            // Mapeia as condições climáticas para os nomes de arquivo dos ícones
            const icones = {
              poucas_nuvens: "/img/icone_poucas_nuvens.png",
              nuvens_dispersas: "/img/icone_nuvens_dispersas.png",
              nublado: "/img/icone_nublado.png",
              nuvens_cheias: "/img/icone_nuvens_cheias.png",
              ceu_limpo: "/img/icone_ceu_limpo.png",
              chuva_leve: "/img/icone_chuva_leve.png",
              chuvisco_intenso: "/img/icone_chuvisco_intenso.png",
              chuva_moderada: "/img/icone_chuva_moderada.png",
              chuva_rapida: "/img/icone_chuva_rapida.png",
              nevoa: "/img/icone_nevoa.png",
              tempestade: "/img/icone_tempestade.png",
              neve: "/img/icone_neve.png",
            };
          
            // Obtém o nome do arquivo do ícone com base no clima
            const iconeFileName = icones[clima.toLowerCase()] || "/img/chuva_leve.png";
          
            // Retorna o caminho completo do ícone
            return `/img/${iconeFileName}`;
          }
          

        if (data.Temperatura) {
            console.log(iconeFileName);
          tempoResult.innerHTML = `
            <div class="card-temp" id="umidade_icon">
                <img class="icon-temp" src="/img/Umidade.png" alt="">
                <div>
                <p class="numero">${data.Umidade}%</p>
                <p>Umidade</p>
                </div>



                <div class="card-temp">
                Temperatura: ${data.Temperatura}°C
                Descrição do Clima: ${data.Clima}
                </div>

                <img class="icon-temp" src="/img/Velocidade do Vento.png" alt="">
                <div>
                <p class="numero">${data.VelocidadeVento}%</p>
                <p>Velocidade do Vento</p>


            </div>
            </div>`;

          // Altera o fundo com base nas condições climáticas
          const fundoClimatico = getFundoClimatico(data.Clima);
          if (fundoClimatico === "Escuro") {
            document.documentElement.style.backgroundImage = `url(/img/fundo_escuro.png)`;
          } else if (fundoClimatico === "Frio") {
            document.documentElement.style.backgroundImage = `url(/img/fundo_frio.png)`;
          }

          // Set the weather icon based on the weather description
          const iconeClimaSrc = getIconeClimaSrc(data.Clima);
          if (iconeClimaSrc) {
            iconeClima.src = iconeClimaSrc;
          } else {
            console.error(`Ícone do clima não encontrado para: ${data.Clima}`);
          }
        } else {
          tempoResult.innerHTML = "Erro ao obter dados meteorológicos";
        }
      })
      .catch((error) => console.error("Erro ao obter dados:", error));
  });

// Função para obter o tipo de fundo com base no clima
function getFundoClimatico(clima) {
  // Lógica para determinar o tipo de fundo com base no clima
  if (
    clima.toLowerCase().includes("tempestade") ||
    clima.toLowerCase().includes("chuva")
  ) {
    // Se há tempestade ou chuva: Escuro
    return "Escuro";
  } else {
    // Frio
    return "Frio";
  }
}


