module.exports = [{
name: "notas",
prototype: "slash",
type: "interaction",
$if: "old",
code: `
$if[$slashOption[tipo]==pessoal]
$interactionModal[Refrescar uma nota;notas-criar;
  {actionRow:
    {textInput:Nome da sua nota:1:notasTitle:true:Winder é o melhor bot:1:35}
  }
  {actionRow:
    {textInput:Conteúdo da nota:2:notasDesc:true:Winder é o melhor bot porquê ele faz muita coisa como ter sistema de notas no Discord! Vê que legal:1:2200}
}
]
$elseIf[$slashOption[tipo]==pinwheel]
$interactionModal[Refrescar uma nota [Equipe Pinwheel];pwhl-notas-criar;
  {actionRow:
    {textInput:Nome da sua nota:1:notasTitle:true:Winder é o melhor bot:1:35}
  }
  {actionRow:
    {textInput:Conteúdo da nota:2:notasDesc:true:Winder é o melhor bot porquê ele faz muita coisa como ter sistema de notas no Discord! Vê que legal:1:2200}
}
]

$onlyIf[$hasRoles[861313067291115541;$authorID;894592054175342602]==true;]
$endelseif
$endif
$onlyIf[$interactionData[options._subcommand]==criar;]
`
},{
name: "pwhl-notas-criar",
type: "interaction",
prototype: "modal",
$if: "old",
code: `
$log[$scWriteFile[Recursos/notes/pinwheel/$get[title].txt;$get[content]]]

$interactionReply[📒 | Nota criada!
;{newEmbed:
{author:Winder Notes > Refresque suas idéias}
{title:$get[title]}
{description:
$get[content]
}
{footer:Equipe Pinwheel}
{color:$dyColor[blue;light]}
};;;everyone;true]


$let[title;$toLowerCase[$textInputValue[notasTitle]]]
$let[content;$textInputValue[notasDesc]]
$onlyIf[$hasRoles[861313067291115541;$authorID;894592054175342602]==true;]
`
},{
name: "notas-criar",
type: "interaction",
prototype: "modal",
$if: "old",
code: `
$log[$scWriteFile[Recursos/notes/$authorID/$get[title].txt;$get[content]]]

$interactionReply[📒 | Nota criada!
;{newEmbed:
{author:Winder Notes > Refresque suas idéias}
{title:$get[title]}
{description:
$get[content]
}
{footer:Seu bloco pessoal}
{color:$dyColor[blue;light]}
};;;everyone;true]

$let[title;$toLowerCase[$textInputValue[notasTitle]]]
$let[content;$textInputValue[notasDesc]]

`
},{
name: "notas",
prototype: "slash",
type: "interaction",
$if: "old",
code: `
$if[$slashOption[tipo]==pessoal]
$interactionReply[;{newEmbed:
{author:Winder Notes > Refresque suas ideias}
{title:Lista de notas criadas}
{description:
$replaceText[$exec[cd Recursos/notes/$authorID/ && ls];.txt;]

}
{footer:Seu bloco pessoal}
{color:$dyColor[blue;light]}
};;;everyone;true]

$elseIf[$slashOption[tipo]==pinwheel]
$interactionReply[;{newEmbed:
{author:Winder Notes > Refresque suas ideias}
{title:Lista de notas criadas}
{description:
$replaceText[$exec[cd Recursos/notes/pinwheel/ && ls];.txt;]

}
{footer:Equipe Pinwheel}
{color:$dyColor[blue;light]}
};;;everyone;true]
$onlyIf[$hasRoles[861313067291115541;$authorID;894592054175342602]==true;]
$endelseif
$endif
$onlyIf[$interactionData[options._subcommand]==lista;]
`
},{
name: "notas",
prototype: "slash",
type: "interaction",
$if: "old",
code: `
$if[$slashOption[tipo]==pessoal]
$interactionReply[;{newEmbed:
{author:Winder Notes > Refresque suas ideias}
{title:$get[title]}
{description:
$get[content]
}
{footer:Seu bloco pessoal}
{color:$dyColor[blue;light]}
};;;everyone;true]

$let[content;$readFile[Recursos/notes/$authorID/$toLowerCase[$get[title]].txt]]
$let[title;$toLowerCase[$slashOption[title]]]

$elseIf[$slashOption[tipo]==pinwheel]
$interactionReply[;{newEmbed:
{author:Winder Notes > Refresque suas ideias}
{title:$get[title]}
{description:
$get[content]
}
{footer:Equipe Pinwheel}
{color:$dyColor[blue;light]}
};;;everyone;true]

$let[content;$readFile[Recursos/notes/pinwheel/$toLowerCase[$get[title]].txt]]
$let[title;$toLowerCase[$slashOption[title]]]

$onlyIf[$hasRoles[861313067291115541;$authorID;894592054175342602]==true;]
$endelseif
$endif
$onlyIf[$interactionData[options._subcommand]==ver;]
`
},{
name: "notas",
type: "interaction",
prototype: "slash",
$if: "old",
code: `
$if[$slashOption[tipo]==pessoal]
$interactionModal[Refrescar uma nota;notas-editar;
  {actionRow:
    {textInput:Titulo da sua nota:1:notasTitle:false:Winder é o melhor bot:1:35}
  }
  {actionRow:
    {textInput:Novo nome da sua nota:1:notasNewTitle:false:Winder é o melhor bot:1:35}
  }
  {actionRow:
    {textInput:Novo conteúdo da nota:2:notasNewDesc:false:Winder é o melhor bot porquê ele faz muita coisa como ter sistema de notas no Discord! Vê que legal:1:2200}
}
]

$elseIf[$slashOption[tipo]==pinwheel]
$interactionModal[Refrescar uma nota [Equipe Pinwheel];pwhl-notas-editar;
  {actionRow:
    {textInput:Titulo da sua nota:1:notasTitle:false:Winder é o melhor bot:1:35}
  }
  {actionRow:
    {textInput:Novo nome da sua nota:1:notasNewTitle:false:Winder é o melhor bot:1:35}
  }
  {actionRow:
    {textInput:Novo conteúdo da nota:2:notasNewDesc:false:Winder é o melhor bot porquê ele faz muita coisa como ter sistema de notas no Discord! Vê que legal:1:2200}
}
]

$onlyIf[$hasRoles[861313067291115541;$authorID;894592054175342602]==true;]
$endelseif
$endif

$onlyIf[$interactionData[options._subcommand]==editar;]`
},{
name: "pwhl-notas-editar",
type: "interaction",
prototype: "modal",
$if: "old",
code: `
$renameFile[Recursos/notes/pinwheel/$textInputValue[notasTitle].txt;Recursos/notes/pinwheel/$get[title].txt]

$interactionReply[📒 | Nota editada!
;{newEmbed:
{author:Winder Notes > Refresque suas idéias}
{title:$get[title]}
{description:
$get[content]
}
{footer:Equipe Pinwheel}
{color:$dyColor[blue;light]}
};;;everyone;true]

$let[title;$ifAwaited[$toLowerCase[$textInputValue[notasNewTitle]]==;$toLowerCase[$textInputValue[notasTitle]];$toLowerCase[$textInputValue[notasNewTitle]]]]
$let[content;$textInputValue[notasNewDesc]]

$onlyIf[$hasRoles[861313067291115541;$authorID;894592054175342602]==true;]
`
},{
name: "notas-editar",
type: "interaction",
prototype: "modal",
$if: "old",
code: `
$renameFile[Recursos/notes/$authorID/$textInputValue[notasTitle].txt;Recursos/notes/$authorID/$get[title].txt]

$interactionReply[📒 | Nota editada!
;{newEmbed:
{author:Winder Notes > Refresque suas idéias}
{title:$get[title]}
{description:
$get[content]
}
{footer:Seu bloco pessoal}
{color:$dyColor[blue;light]}
};;;everyone;true]


$let[title;$ifAwaited[$toLowerCase[$textInputValue[notasNewTitle]]==;$toLowerCase[$textInputValue[notasTitle]];$toLowerCase[$textInputValue[notasNewTitle]]]]
$let[content;$textInputValue[notasNewDesc]]

`
},{
name: "notas",
prototype: "slash",
type: "interaction",
$if: "old",
code: `
$if[$slashOption[tipo]==pessoal]
$deleteFile[Recursos/notes/$authorID/$toLowerCase[$get[title]].txt]]

$interactionReply[📒 | Nota deletada! **[Seu bloco pessoal**];;;;everyone;true]

$elseIf[$slashOption[tipo]==pinwheel]
$deleteFile[Recursos/notes/pinwheel/$toLowerCase[$get[title]].txt]]

$interactionReply[📒 | Nota deletada! **[Equipe Pinwheel]**;;;;everyone;true]

$onlyIf[$hasRoles[861313067291115541;$authorID;894592054175342602]==true;]
$endelseif
$endif
$onlyIf[$interactionData[options._subcommand]==deletar;]
`
}]