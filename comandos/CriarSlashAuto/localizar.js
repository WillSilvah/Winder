module.exports = [{
name: "localizar",
type: "ready",
channel: "$getVar[consoleChat]",
code: `
$createApplicationCommand[global;localizar;Quantos furries tem em cada estado? E quais são eles?;false;all;all;slash;[
  {
    "type": 3,
    "name": "estado",
    "description": "Digite a sigla do estado. Exemplo: PE"
  }
]]
`
}]
