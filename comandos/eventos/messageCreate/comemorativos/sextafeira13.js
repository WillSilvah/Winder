module.exports = [{
     type: "messageCreate",
     code: `
     $timezone[America/Recife]
     $onlyIf[$weekDay[Long]-$day==Friday-13;]
      $setGuildVar[evento_sextafeira13;$math[$day[TwoDigit]+1];$guildID]
     $onlyIf[$randomNumber[1;100]<=5;]
     $onlyIf[$hasRoles[$guildID;$authorID;1481960745582202991]==false;]

    $!addMessageReactions[$channelID;$messageID;💀]
$sendMessage[$channelID;### O <@$authorID> TEVE AZAR.
-# $randomText[Atropelado por uma bicleta;Simplesmente faleceu;Morreu de uma batata quente;Caiu em um buraco;Foi atropelado por um unicórnio;Tomou um golpe de faca;Foi engulido por um buraco negro;Morreu de tédio;Foi picado por uma abelha assassina;Caiu de uma escada;Morreu de risada;Foi vítima de um ataque de gatinhos;Tomou um tiro de Nerf;Foi esmagado por um piano;Morreu de sono;Foi devorado por um dragão;Caiu em um poço de lava;Morreu de fome em uma ilha deserta;Foi atingido por um raio;Morreu de vergonha;Foi vítima de um ataque de memes;Caiu de um prédio;Morreu de overdose de açúcar]
]
    
$!memberAddRoles[$guildID;$authorID;1481960745582202991]

`
},{
    type: "clientReady",
    code: `
    $cron[
    $onlyIf[$day==$getGuildVar[evento_sextafeira13;1462224054676099094];]
    $arrayLoad[roleMembers;,;$roleMembers[1462224054676099094;1481960745582202991;,]]
    $arrayMap[roleMembers;id;
    $return[<@$env[id]>]
    ;roleUsernames]

    $sendMessage[$getGuildVar[anunciosChat;1462224054676099094];
     $addContainer[
      $addSection[
       $addTextDisplay[### E ESSES FORAM OS AZARADOS 💀]
       $addTextDisplay[$arrayJoin[roleUsernames;\n]]
       $addTextDisplay[\n Próximo evento: 13/11/2026]
       $addThumbnail[https://i.ibb.co/MxMZdXRr/pats-diadamulher2026.png]
      ]
     ;White]
    ]
    ;0 0 * * *;America/Recife;SextaFeira13]
`}]