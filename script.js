document
  .getElementById("searchicon")
  .addEventListener("click", async (event) => {
    event.preventDefault(); // Evitar o comportamento padrão do link

    const city = document.getElementById("search-txt").value;

    fetch(`http://localhost:3000/climatempo/${city}`)
      .then((response) => response.json())
      .then((data) => {
        const tempoResult = document.getElementById("climaResult");
        const iconeClima = document.getElementById("iconeClima");

        console.log(data.Clima);

        var imagemSrc;

        if (data.Clima === "Poucas Nuvens") {
          imagemSrc = "./img/poucas_nuvens.png";
        } else if (data.Clima.toLowerCase() === "Nuvens Dispersas") {
          imagemSrc = "./img/nuvens_dispersas.png";
        } else if (data.Clima.toLowerCase() === "Nublado") {
          imagemSrc = "./img/nublado.png";
        } else if (data.Clima.toLowerCase() === "Nuvens Cheias") {
          imagemSrc = "./img/nuvens_cheias.png";
        } else if (data.Clima.toLowerCase() === "Céu Limpo") {
          imagemSrc = "./img/ceu_limpo.png";
        } else if (data.Clima.toLowerCase() === "Chuva Leve") {
          imagemSrc = "./img/chuva_leve.png";
        } else if (data.Clima.toLowerCase() === "Chuvisco Intenso") {
          imagemSrc = "./img/chuvisco_intenso.png";
        } else if (data.Clima.toLowerCase() === "Chuva Moderada") {
          imagemSrc = "./img/chuva_moderada.png";
        } else if (data.Clima.toLowerCase() === "Chuva Rapida") {
          imagemSrc = "./img/chuva_rapida.png";
        } else if (data.Clima.toLowerCase() === "Névoa") {
          imagemSrc = "./img/nevoa.png";
        } else if (data.Clima.toLowerCase() === "Tempestade") {
          imagemSrc = "./img/tempestade.png";
        } else if (data.Clima.toLowerCase() === "Neve") {
          imagemSrc = "./img/neve.png";
        } else {
          console.log("desgraça");
        }

        if (data.Temperatura) {
          tempoResult.innerHTML = `
                        <div class="card-temp" id="umidade_icon">
                            <img class="iconvento" src="./img/Umidade.png" alt="">
                            <div>
                                <p class="numero">${data.Umidade}%</p>
                                <p>Umidade</p>
                            </div> <br />

                            <div class="card-temp">
                                <img src='${imagemSrc}'>
                                Temperatura: ${data.Temperatura}°C <br />
                                Descrição do Clima: ${data.Clima}
                            </div><br />

                            <img class="iconvento" src="./img/Velocidade do Vento.png" alt=""> <br />

                            <div>
                                <p class="numero">${data.VelocidadeVento}Km/h</p>
                                <p>Velocidade do Vento</p>
                            </div><br />
                        </div>`;

          // Altera o fundo com base nas condições climáticas
          const fundoClimatico = getFundoClimatico(data.Clima);
          if (fundoClimatico === "Escuro") {
            document.documentElement.style.backgroundImage = `url(./img/fundo_escuro.png)`;
          } else if (fundoClimatico === "Frio") {
            document.documentElement.style.backgroundImage = `url(./img/fundo_frio.png)`;
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
