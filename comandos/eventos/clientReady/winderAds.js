module.exports = [{
  type: "clientReady",
  code: `
  $c[$let[guildID;1462224054676099094]
  $setInterval[
   $if[$getGlobalVar[sleepMode]==false;
    $let[ad;$randomNumber[1;10]]
    $sendMessage[$getGuildVar[batePapo;$get[guildID]];
     $ifx[
      $if[$get[ad]==1;<@$getGuildVar[;$get[guildID]]> Resenhas são aceitas na Patinhas mas de uma forma controlada, se estiver passando dos limites, use o canal alternativo!]
      $elseIf[$get[ad]==2;<@$getGuildVar[;$get[guildID]]> Siga o perfil oficial da Patinhas nas redes sociais!
       $addActionRow
        $addButton[https://bsky.app/profile/patswinder.bsky.social;Bluesky;Link;🦋;false]
       ]
      $elseIf[$get[ad]==3;<@$getGuildVar[;$get[guildID]]> Já pensou em querer entrar na Equipe Patinhas? 😎 https://discord.com/channels/1462224054676099094/1466894271457136821]
      $elseIf[$get[ad]==4;Gostando da Patinhas <@$getGuildVar[;$get[guildID]]>? Que tal chamar uns amigos para cá? #VemPraPATS! ☝️]
      $elseIf[$get[ad]==5;### FALTA $sub[$getGuildVar[membersMeta;$get[guildID]];$guildMemberCount[$get[guildID];;false] PELUDOS PARA $getGuildVar[membersMeta;$get[guildID]]]]
     ]
    ]
   ]
  ;1h1m;WinderADS]
`
}]
