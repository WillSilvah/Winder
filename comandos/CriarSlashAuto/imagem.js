module.exports = [{
name: "imagem",
type: "ready",
channel: "$getVar[consoleChat]",
code: `
$createApplicationCommand[global;/imagem;Envie uma imagem aleatória de alguma coisa;false;guild,user;guild,botdm,dm;slash;[
  {
    "type": 1,
    "name": "gato",
    "description": "Envie uma imagem de um gato",
    "options": []
  },
  {
    "type": 1,
    "name": "fursuit",
    "description": "Envie uma imagem de um fursuiter",
    "options": []
  },
  {
    "type": 1,
    "name": "cachorro",
    "description": "Envie uma imagem de um cachorro",
    "options": []
  }
]]
`
}]