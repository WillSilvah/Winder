module.exports = [{
    name: "cmdinfo",
    params: [
    {
      name: 'name',
      description: "Nome do comando",
      required: true
    }
   ],
   code: `
$jsonLoad[aliases;$commandInfo[messageCreate;$env[name];aliases]]

$reply
$title[📙 Como usar o comando "$commandInfo[messageCreate;$env[name];name]"?]
$description[**$commandInfo[messageCreate;$env[name];category]** $commandInfo[messageCreate;$env[name];desc]

- **⁉️ Como usa?**
$if[$commandInfo[messageCreate;$env[name];usage]!=;**$getGuildVar[prefixo]$commandInfo[messageCreate;$env[name];usage]**]

- **⭐ Alternativas**
$if[$jsonValues[aliases]!=;**$jsonValues[aliases]**;**Não tem alternativas**]
$footer[$if[$commandInfo[messageCreate;$env[name];slash]!=;Use também como /$commandInfo[messageCreate;$env[name];slash];Este comando infelizmente não tem versão em comando de barra]]
]
$color[Blue]
`
}]