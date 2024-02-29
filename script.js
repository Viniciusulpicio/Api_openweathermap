document.getElementById('formClima').addEventListener('submit', function(event){
    event.preventDefault();
    
    const city = document.getElementById('cityInput').value;

    fetch(`http://localhost:3000/climatempo/${city}`)
    .then(response => response.json())
    .then(data => {
        const tempoResult = document.getElementById("climaResult");
        const iconeClima = document.getElementById('iconeClima');

        if (data.Temperatura){
            tempoResult.innerHTML = `
            <div id="mundo_icon"> <img src="/img/Mundo.png" alt=""></div>
            <div id="umidade_icon"><img src="/img/Umidade.png" alt=""></div>
            <div id="velocidade_icon"><img src="/img/Velocidade do Vento.png" alt=""></div>
            Temperatura: ${data.Temperatura}°C <br/>
            Umidade: ${data.Umidade}% <br/>
            Velocidade do Vento: ${data.VelocidadeVento} m/s <br/>
            Descrição do Clima: ${data.Clima}`;

            // Altera o fundo com base nas condições climáticas
            const fundoClimatico = getFundoClimatico(data.Clima);
            if (fundoClimatico === 'Escuro') {
                document.documentElement.style.backgroundImage = `url(/img/fundo_escuro.png)`;
            } else if (fundoClimatico === 'Frio') {
                document.documentElement.style.backgroundImage = `url(/img/fundo_frio.png)`;
            }

            // Set the weather icon based on the weather description
            const iconeClimaSrc = getIconeClima(data.Clima);
            iconeClima.src = `/img/${iconeClimaSrc}`;
        } else {        
            tempoResult.innerHTML = "Erro ao obter dados meteorológicos";
        }
    })
    .catch(error => console.error("Erro ao obter dados:", error));
});

// Função para obter o tipo de fundo com base no clima
function getFundoClimatico(clima) {
    // Lógica para determinar o tipo de fundo com base no clima
    if (clima.toLowerCase().includes('tempestade') || clima.toLowerCase().includes('chuva')) {
        // Se há tempestade ou chuva: Escuro
        return 'Escuro';
    } else {
        // Frio
        return 'Frio';
    }
}

// Função para obter o ícone do clima com base na descrição do clima
function getIconeClima(clima) {
    // Mapeia as descrições do clima para os nomes dos arquivos de ícones correspondentes
    const icones = {
        'Poucas Nuvens': 'poucas_nuvens.png',
        'Nuvens Dispersas': 'nuvens_dispersas.png',
        'Nublado': 'nublado.png',
        'Nuvens Cheias': 'nuvens_cheias.png',
        'Céu Limpo': 'ceu_limpo.png',
        'Chuva Leve': 'chuva_leve.png',
        'Chuvisco Intenso': 'chuvisco_intenso.png',
        'Chuva Moderada': 'chuva_moderada.png',
        'Chuva Rápida': 'chuva_rapida.png',
        'Névoa': 'nevoa.png',
        'Tempestade': 'tempestade.png',
        'Neve': 'neve.png',
    };

    // Retorna o nome do arquivo de ícone correspondente ao clima
    return icones[clima] || 'default.png';
}