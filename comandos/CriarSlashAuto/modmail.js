module.exports = [{
name: "modmail",
type: "ready",
channel: "1465218335389257802",
code: `
$createApplicationCommand[global;modmail;Envie um mail para alguém;false;all;guild;slash;[
  {
    "type": 3,
    "name": "user_id",
    "description": "ID do usuário",
    "required": true
  },
  {
    "type": 3,
    "name": "mensagem",
    "description": "Mensagem para ser enviada",
    "required": true
  },
  {
    "type": 3,
    "name": "ticket",
    "description": "O Usuário pode enviar um ticket?",
    "autocomplete": false,
    "choices": [
      {
        "name": "Sim",
        "value": "true"
      },
      {
        "name": "Não",
        "value": "false"
      }
    ]
  },
  {
    "type": 3,
    "name": "responder",
    "description": "O usuário pode responder?",
    "autocomplete": false,
    "choices": [
      {
        "name": "Sim",
        "value": "true"
      },
      {
        "name": "Não",
        "value": "false"
      }
    ]
  }
]]
`
}]