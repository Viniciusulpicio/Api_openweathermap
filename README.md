# Senai Weather App

Este é um aplicativo de previsão do tempo desenvolvido como parte das aulas do Senai. Utiliza a API do OpenWeatherMap para fornecer informações meteorológicas.

## Configuração

Para começar a usar o aplicativo, siga estas etapas:

1. Execute o comando `npm install` para instalar as dependências necessárias.

2. Crie um arquivo chamado `config.json` na raiz do projeto.

3. Dentro do arquivo `config.json`, adicione as seguintes informações:
   ```json
   {
     "apikey": "SUA API"
   }
   ```
   Substitua "SUA API" pela chave da API do OpenWeatherMap. Você pode gerar uma gratuitamente em [OpenWeatherMap API](https://openweathermap.org/api).

4. Após configurar o arquivo `config.json`, você pode executar o aplicativo.

## Como executar o aplicativo


Execute o seguinte comando no terminal:
```bash
node app
```

### Arquivo "app.js":

Neste arquivo, existem duas funções com "addEventListener", que é necessária para que o botão de pesquisa e a tecla Enter sejam utilizadas no campo de busca; Dentro do campo try, por método if & else if, há a resposta da API que define a mudança do símbolo do clima; O fundo baseado na condição climática; E um if que se conseguir acessar os dados da API, cria um innerHtml com as respostas da mesma, imagens e os fundos; Por fim, o erros são tratados com o uso do catch.

### Arquivo "index.hmtl":

Neste arquivo, em seu body há uma tela de carregamento simulada a partir de um gif; A div "conteúdo" que contém os elementos da página; E outra div "formClima", que faz com que sejam obtidas as respostas do usuário e sejam mostradas na tela as informações.

# Sua aplicação ficará assim: 
![Imagem](https://github.com/Viniciusulpicio/Api_openweathermap/assets/145928303/0fc92b1f-466a-46d1-938a-627d3ec81283)

