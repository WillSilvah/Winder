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
$reply
$title[📙 Como usar o comando "$commandInfo[messageCreate;$env[name];name]"?]
$description[**$commandInfo[messageCreate;$env[name];category]** $commandInfo[messageCreate;$env[name];desc]

- **⁉️ Como usa?**
$if[$commandInfo[messageCreate;$env[name];usage]!=;**$getGuildVar[prefixo]$commandInfo[messageCreate;$env[name];usage]**]

- **⭐ Alternativas**
$if[$commandInfo[messageCreate;$env[name];aliases]!=;**$replaceText[$commandInfo[messageCreate;$env[name];aliases];,;/]**;**Não tem alternativas**]
]
$color[Blue]
`
}]