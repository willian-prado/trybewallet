## Projeto Trybewallet

> Sétimo projeto do módulo de Front-end do curso de desenvolvimento web da Trybe.

**Contexto**

Após experimentarmos diversos problemas no compartilhamento de estado entre componentes que estão em camadas muito distantes (problema conhecido como *prop drilling*), finalmente somos introduzidos a uma ferramenta que permite gerenciar um estado global: o Redux. \
O Redux é uma biblioteca de gerenciamento de estado global muito frequentemente utilizada com React, mas que também funciona em outros frameworks (ou mesmo JavaScript puro). 

**Objetivo do projeto**

Desenvolver uma carteira de controle de gastos com conversor de moedas, onde um usuário seja capaz de:
  - Adicionar, remover e editar um gasto;
  - Visualizar uma tabelas com seus gastos;
  - Visualizar o total de gastos convertidos para uma moeda de escolha;

A página _web_ irá consumir os dados da API do [_awesomeapi API de Cotações_](https://docs.awesomeapi.com.br/api-de-moedas) para realizar a busca de câmbio de moedas.  

**Principais habilidades desenvolvidas nesse trabalho:**

  - Criar um store Redux em aplicações React
  - Criar reducers no Redux em aplicações React
  - Criar actions no Redux em aplicações React
  - Criar dispatchers no Redux em aplicações React
  - Conectar Redux aos componentes React
  - Criar actions assíncronas em uma aplicação React que faz uso de Redux.

**Tecnologias utilizadas**

- <a href="https://www.w3.org/html/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" title="HTML5" align="center" height="35"/> - HTML</a> 
- <a href="https://www.w3schools.com/css/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" title="CCS3" align="center" height="35"/> - CSS</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" title="JavaScript" align="center" height="30"/> - JavaScript</a>
- <a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" title="React" align="center" height="35"/> - React</a>
- <a href="https://reactrouter.com/docs/en/v6/getting-started/overview"><img src="https://reacttraining.com/images/blog/reach-react-router-future.png" title="React Router" align="center" height="30"/> - React Router</a>
- <a href="https://redux.js.org"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" title="Redux" height="30" align="center"/>  - Redux</a>

---

### Lista de requisitos propostos pela Trybe:

#### Obrigatórios

**1. Crie uma página inicial de login na rota '/'. O formulário deverá conter inputs de email e senha e um botão com o texto 'Entrar'**

**2. Realize as seguintes verificações nos campos de email, senha e botão:**
  * O email está no formato válido, como 'alguem@alguem.com'.
  * A senha possui 6 ou mais caracteres.
  * Salve o email no estado da aplicação, com a chave ***email***, assim que a pessoa usuária logar.
  * A rota deve ser mudada para '/carteira' após o clique no botão '**Entrar**'.

**3. Utilize o Redux para salvar no estado global as informações da pessoa logada**
  * Salve o email no estado da aplicação, com a chave email, assim que o usuário logar.
  * A rota deve ser mudada para `/carteira` quando o login for efetuado com sucesso.

**4. Crie uma página para sua carteira na rota '/carteira'**

**5. Crie um header para a página de carteira contendo o nome da pessoa logada e um campo com o valor total da despesa gerada pela lista de gastos, inicialmente com valor 0**

**6. Desenvolva um formulário para adicionar uma despesa contendo os seguintes campos:**

  * Um campo com a label `Valor` para adicionar valor da despesa.
  * Um campo de texto com a label `Descrição` para adicionar a descrição da despesa.
  * Um campo de select, inicialmente sem opções, com a label `Moeda` para adicionar em qual moeda será registrada a despesa.
  * Um campo de select com a label `Método de pagamento` para adicionar qual método de pagamento será utilizado. Deve possuir 
  as opções: 'Dinheiro', 'Cartão de crédito' e 'Cartão de débito'.
  * Um campo select com a label `Tag` para selecionar uma categoria (tag) para a despesa. Deve possuir as opções: 'Alimentação',
  'Lazer', 'Trabalho', 'Transporte' e 'Saúde'.

**7. Implemente a lógica para preencher as opções do campo "Moedas", buscando as siglas das moedas da API:**

  * Ao entrar na página `/carteira`, você deverá fazer uma requisição para a API das moedas e preencher as opções do `<select>` de "Moedas" com os valores retornados. Utilizando as siglas das moedas. As opções devem conter os valores: 'USD', 'CAD', 'EUR', 'GBP', 'ARS', 'BTC', 'LTC', 'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH' e 'XRP'. Esses valores devem vir da API através do endpoint: https://economia.awesomeapi.com.br/json/all. Remova a opção 'USDT' (Dólar Turismo).

**8. Desenvolva a opção de "Adicionar despesa" na sua tabela de gastos**

  * Desenvolva a funcionalidade do botão "Adicionar despesa" de modo que ao clicar no botão, as seguintes ações sejam executadas:
    
    * Os valores dos campos devem ser salvos no estado da aplicação, na chave ***expenses***, dentro de um array contendo todos gastos que serão adicionados:

      * O `id` da despesa **deve** ser um número sequencial, começando em 0. Ou seja: a primeira despesa terá id 0, a segunda terá id 1, a terceira id 2, e assim por diante.

      * Você deverá salvar a cotação do câmbio feita no momento da adição para ter esse dado quando for efetuar uma edição do gasto. Caso você não tenha essa informação salva, o valor da cotação trazida poderá ser diferente do obtido anteriormente.

        > **Atenção nesse ponto:** você deverá fazer uma requisição para API e buscar a cotação no momento que o botão de `Adicionar despesa` for apertado. Para isso você deve utilizar um thunk. Atente-se ao formato do objeto da despesa descrito abaixo: o valor retornado pela API deverá ficar dentro da chave `exchangeRates`.

    * Após adicionar a despesa, atualize a soma total das despesas. 

**9. Desenvolva uma tabela com os gastos contendo as seguintes características:**

  * A tabela deve possuir um cabeçalho com os campos Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão e Editar/Excluir

  * A tabela deve ser alimentada pelo estado da aplicação, que estará disponível na chave ***expenses*** que vem do reducer `wallet`.

    * O campo de Moeda e Moeda de Conversão deverão conter o nome da moeda. Portanto, ao invés de 'USD' ou 'EUR', deve conter "Dólar Comercial" e "Euro", respectivamente

    * Por padrão, o campo 'Moeda de conversão' exibirá 'Real'

    * Atenção também às casas decimais dos campos. Como são valores contábeis, eles devem apresentar duas casas após a vírgula. Arredonde sua resposta somente na hora de renderizar o resultado, e para os cálculos utilize sempre os valores vindos da API (utilize o campo `ask` que vem da API).

    * Utilize sempre o formato `0.00` (número - ponto - duas casas decimais)

**10. Crie um botão, dentro da linha da tabela, para deletar uma despesa. Ao executar essa ação, ele deve alterar o estado global**

#### Bônus

**11. Crie um botão, dentro da linha da tabela, para editar uma despesa. Ele deve possuir o seguinte compartamento:**

  * Ao ser clicado, o botão habilita um formulário para editar a linha da tabela. Ao clicar em "Editar despesa" ela é atualizada, alterando o estado global.

    **Atenção**: o câmbio utilizado na edição deve ser o mesmo do cálculo feito na adição do gasto.

