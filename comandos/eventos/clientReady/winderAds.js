module.exports = [{
  type: "clientReady",
  code: `
  $setInterval[
  $let[guildID;1462224054676099094]
  $let[userID;$getGuildVar[lastUserSendMessage;$get[guildID]]]
   $if[$getGuildVar[oldMsgPerMinute;$get[guildID]]>=1;
    $if[$getGlobalVar[sleepMode]==false;
     $let[ad;$randomNumber[1;7]]
     $sendMessage[$getGuildVar[batePapo;$get[guildID]];
      $ifx[
       $if[$get[ad]==1;$addTextDisplay[Resenhas são aceitas na Patinhas mas de uma forma controlada, se estiver passando dos limites, use o canal alternativo!]]
       $elseIf[$get[ad]==2;$addTextDisplay[<@$get[userID]> Siga o perfil oficial da Patinhas nas redes sociais!]
        $addActionRow
         $addButton[https://bsky.app/profile/patswinder.bsky.social;Bluesky;Link;🦋;false]
        ]
       $elseIf[$get[ad]==3;$addTextDisplay[<@$get[userID]> Já pensou em querer entrar na Equipe Patinhas? 😎 https://discord.com/channels/1462224054676099094/1466894271457136821]]
       $elseIf[$get[ad]==4;$addTextDisplay[Gostando da Patinhas <@$get[userID]>? Que tal chamar uns amigos para cá? #VemPraPATS! ☝️]]
       $elseIf[$get[ad]==5;$addTextDisplay[### FALTA $sub[$getGuildVar[membersMeta;$get[guildID]];$guildMemberCount[$get[guildID];;false] PELUDOS PARA $getGuildVar[membersMeta;$get[guildID]]]]]
       $elseIf[$get[ad]==6;$addTextDisplay[Já votou na Patinhas hoje? Não? Tá esperando o quê? Vamos votar! **/votar**]]
       $elseIf[$get[ad]==7;$addTextDisplay[Seu aniversário está próximo? Não deixe a gente esquecer, use o comamdo /aniversário adicionar para comemorar juntos!]]
      ]
      -# WinderADS.
     ]
    ]
   ]
  ;15m;WinderADS]
`
}]
