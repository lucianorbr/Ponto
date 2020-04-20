<h2> Api para marcação automática de ponto empresa</h2>

<p>Sistema simples em NodeJS. Utilizando as bibliotecas Puppeteer e Axios do NodeJS. </p>

<p>Sistema acesso o site para registro do ponto, efetuar o login que está configurado em um arquivo,

![Captura de tela de 2020-04-20 17-25-56](https://user-images.githubusercontent.com/24936196/79799391-c3828080-8330-11ea-8894-4dd2becf66c3.png)

user.json que pode ser reconfigurado facilmente por qualquer pessoa.

![Captura de tela de 2020-04-20 18-00-41](https://user-images.githubusercontent.com/24936196/79799491-e57c0300-8330-11ea-9273-b7222bc3fc94.png)


O sistema pega o horário em tempo real ao clicar na confirmação do registro, e faz o que automático para confirmar o marcação do ponto.

Sistema surgiu de uma <strong> necessidade diária  </strong> e por sempre esquecer de efetuar o registro gerando transtornos no final do mês no momento de emitir o relatório mensal de pontos.

Sistema pode efetuar as 4 marcação diárias, entrada, saída para almoço, volta do almoço e final do dia.

Pode ser configurado hora e minutos de marcação do ponto. Após a marcação o Browser é fechado com uma função dentro da <strong>API</strong>
