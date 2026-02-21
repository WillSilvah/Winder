module.exports = {
  code: `
$ifx[
$if[$getMemberVar[reminderStatus]==true;
🔕 Lembrete desativado, mas tem certeza que não quer deixar ativado? Você pode esquecer de votar na Patinhas ou você não quer mais votar nela?
Sua ajuda é importante para nós criarmos uma comunidade incrível!

$setMemberVar[reminderStatus;false;$authorID]
]
$elseIf[$getMemberVar[reminderStatus]==false;
🔔 Eba! Vou te lembrar de votar na Patinhas após **6 horas** que você votar tudo certo?


$setMemberVar[reminderStatus;true;$authorID]

]
]
`,
data: {
  "name": "voto",
  "description": "Ative ou desative o lembrete de votos.",
  "description_localizations": {
    "en-GB": "Turn vote reminder on or off.",
    "en-US": "Turn vote reminder on or off.",
    "pt-BR": "Ative ou desative o lembrete de votos."
  },
  "options": [
    {
      "type": 3,
      "name": "status",
      "description": "Ative ou desative o lembrete de votos.",
      "required": true,
      "choices": [
        {
          "name": "✅ Ativar",
          "value": "true",
          "name_localizations": {
            "en-GB": "✅ Activate",
            "en-US": "✅ Activate",
            "pt-BR": "✅ Ativar"
          }
        },
        {
          "name": "❎ Desativar",
          "value": "false"
        }
      ]
    }
  ]
},
}