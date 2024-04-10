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

## Funções

No arquivo App.js temos além da utilização do axios, para fazer requisições, do express, para criar o servidor e gerenciar suas rotas, e o cors, que permite que as solicitações de diferentes origens sejam feitas.

A constante traducaoClima define as traduções predefinidas para a resposta da API.

app.get faz requisições na API baseada na cidade em que o usuário selecione.

No body do index.html temos a tela de carregamento que é uma simulação feita com um gif, a div conteudo que contém os elementos da página, incluindo a div formClima que faz com que seja obtidas as respotas do usuário e sejam mostradas na tela as informações.

No script temos duas funções com addEventListener para que possam ser utilizados o botão de pesquisa e a tecla enter para que seja ativado a função que procura os dados na API.  Dentro do try temos a resposta da API que por metódo de if e else if define a mudança do símbolo do clima, outro if que define o fundo baseado na condição climática e um if que se consegue acessar os dados da API cria um innerHtml com as respostas da API, imagens e fundo.  Por fim temos a tratação dos erros com metódo catch.

# Sua aplicação ficará assim: 
![Imagem](https://github.com/Viniciusulpicio/Api_openweathermap/assets/145928303/0fc92b1f-466a-46d1-938a-627d3ec81283)

