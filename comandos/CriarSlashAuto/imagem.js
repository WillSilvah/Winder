module.exports = [{
name: "imagem",
type: "ready",
channel: "1465218335389257802",
code: `
$createApplicationCommand[global;imagem;Envie uma imagem aleatória de uma categoria;false;all;guild,botdm,dm;slash;[
  {
    "type": 3,
    "name": "gato",
    "description": "Envia uma imagem de um gato",
    "autocomplete": true,
    "choices": [
      {
        "name": "gato",
        "value": "gato"
      }
    ]
  }
]]
`
}]