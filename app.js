// Importa as dependências necessárias
const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

// Importa a chave de API do arquivo de configuração
const config = require('./config.json');
const apikey = config.apikey;

// Inicializa o aplicativo Express
const app = express();

// Configura o aplicativo Express para ouvir na porta 3000
app.listen(3000);

// Adiciona middleware para permitir solicitações CORS
app.use(cors());

// Adiciona middleware para análise de corpo JSON
app.use(express.json());

// Configura o aplicativo Express para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Mapeamento para traduzir os diferentes tipos de clima
const traducaoClima = {
    "few clouds": "Poucas Nuvens",
    "scattered clouds": "Nuvens Dispersas",
    "overcast clouds": "Nublado",
    "broken clouds": "Nuvens Dispersas",
    "shower clouds": "Nuvens Cheias",
    "clear sky": "Céu Limpo",
    "light rain": "Chuva Leve",
    "light intensity drizzle": "Chuvisco Intenso",
    "moderate rain": "Chuva Moderada",
    "shower rain": "Chuva Rápida",
    "mist": "Névoa",
    "thunderstorm": "Tempestade",
    "snow": "Neve",
    "light intensity shower rain": "Chuva Leve Intensa"
}

// Rota para buscar informações climáticas com base na cidade fornecida
app.get('/climatempo/:cidade', async (req, res) => {
    const city = req.params.cidade;

    try {
        // Faz uma solicitação para a API do OpenWeatherMap para obter dados climáticos
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);

        if (response.status === 200) {
            // Se a solicitação for bem-sucedida, processa os dados e os envia de volta ao cliente
            const clima = traducaoClima[response.data.weather[0].description] || response.data.weather[0].description;

            const weatherData = {
                Temperatura: response.data.main.temp,
                Umidade: response.data.main.humidity,
                VelocidadeDoVento: response.data.wind.speed,
                Clima: clima
            };

            res.send(weatherData);
        } else {
            // Se a solicitação falhar, envia uma mensagem de erro ao cliente
            res.status(response.status).send({ erro: 'Erro ao obter dados meteorológicos' });
        }
    } catch (error) {
        // Se ocorrer um erro durante o processamento, envia uma mensagem de erro ao cliente
        res.status(500).send({ erro: 'Erro ao obter dados meteorológicos', error });
    }
});
