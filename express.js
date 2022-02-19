const express = require('express'); // Conexão com o pacote 'express'
const app = express(); // criando app
app.get("/", (request, response) => { // Recebendo respostas do website.
  const ping = new Date(); // Obtendo a data e hora atual.
  ping.setHours(ping.getHours() - 3); // Reduzindo 3 horas por causa do fuso horário.
console.log(`${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()} => Website ping recebido.`); // Enviando mensagem aos logs.
  response.sendStatus(200); // Enviando resposta para o visitante do site.
});
app.listen(process.env.PORT);// Escutando a porta do servidor.