module.exports = [{
name: "aniversário",
type: "ready",
channel: "$getVar[consoleChat]",
code: `
$createApplicationCommand[global;aniversário;Adicione seu aniversário e veja de outras pessoas!;false;all;all;slash;[
  {
    "type": 1,
    "name": "lista",
    "description": "Lista de aniversário de todos os membros",
    "options": []
  },
  {
    "type": 1,
    "name": "adicionar",
    "description": "Adicione o seu aniversário no formato DD/MM",
    "options": [
      {
        "type": 3,
        "name": "data",
        "description": "Formato: DD/MM",
        "required": true
      }
    ]
  }
]]
`
}]