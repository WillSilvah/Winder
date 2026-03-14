    name: "update-regras",
    type: 'messageCreate',
    code: `
    $onlyIf[$hasPerms[$guildID;$authorID;ManageGuild]==true;]
    
    $sendMessage[$channelID;
     $addContainer[
      $addSection[
       $addTextDisplay[## VOCÊ ESTÁ ISOLADO!]
       $$addTextDisplay[Isso significa que no momento você pode estar acessando os recursos do servidor!]
       $addThumbnail[https://abs.twimg.com/emoji/v2/72x72/1f6ab.png]
      ]
     $addSeparator[Large;true]
     $addTextDisplay[Não se desespere, você pode estar aqui por diversos motivos como:
     $addTextDisplay[- Quebrou alguma diretriz do servidor\n- Comportamento suspeito.\n- Pela sua própria segurança.]
     $addTextDisplay[## "E Agora? como saio?]
     $addTextDisplay[Você pode sair a qualquer momento, no momento a Equipe Patinhas está analisando a sua situação para resolver o problema.]
     $addTextDisplay[# NÃO SAIA DO SERVIDOR!]
     $addTextDisplay[Durante o isolamento, este modo é ativado em casos URGENTES o que significa que se você pode ter aprontado e está em risco.]
     $addTextDisplay[> **⚠️ Você pode ser banido ao sair automáticamente**
     $addTextDisplay[E sair enquanto estava isolado significa que você estava devendo algo e a Equipe Patinhas declara que você estava errado.]
     $addSeparator[Large;true]
     ;Orange]
    ]



`
}]    