module.exports = [{
     type: "messageCreate",
     code: `
     $timezone[America/Recife]
     $onlyIf[$weekDay[Long]-$day==Friday-13;]
     $onlyIf[$randomNumber[1;100]<=1;]
     $onlyIf[$hasRoles[$guildID;$authorID;1481960745582202991]==false;]

    $!addMessageReactions[$channelID;$messageID;💀]
$sendMessage[$channelID;### O <@$authorID> TEVE AZAR.
-# $randomText[Atropelado por uma bicleta;Simplesmente faleceu;Morreu de uma batata quente;Caiu em um buraco;Foi atropelado por um unicórnio;Tomou um golpe de faca;Foi engulido por um buraco negro;Morreu de tédio;Foi picado por uma abelha assassina;Caiu de uma escada;Morreu de risada;Foi vítima de um ataque de gatinhos;Tomou um tiro de Nerf;Foi esmagado por um piano;Morreu de sono;Foi devorado por um dragão;Caiu em um poço de lava;Morreu de fome em uma ilha deserta;Foi atingido por um raio;Morreu de vergonha;Foi vítima de um ataque de memes;Caiu de um prédio;Morreu de overdose de açúcar]
]
    
$!memberAddRoles[$guildID;$authorID;1481960745582202991]

`
},{
    type: "clientReady",
    code: `$cron[
    $arrayLoad[roleMembers;,;$roleMembers[1462224054676099094;1480183732932444192;,]]
    $arrayMap[roleMembers;id;
    $return[<@$env[id]>]
    ;roleUsernames]

$sendMessage[$channelID;
$addSection[
$addTextDisplay[### E esses foram os membros que enviaram mensagem hoje e ganharam a badge especial de Dia das mulheres! ❤️

$arrayJoin[roleUsernames;
]
]
$addThumbnail[https://i.ibb.co/MxMZdXRr/pats-diadamulher2026.png]
]
]
`}]