module.exports = [{
     type: "messageCreate",
     code: `
    $timezone[America/Recife]
    $onlyIf[$weekDay[Long]-$day==Friday-13;]
    $onlyIf[$randomNumber[1;100]<==10;]
    $onlyIf[$hasRoles[$guildID;$authorID;1481960745582202991]==false;]

    $addMessageReactions[$channelID;$messageID;💀]
    $sendMessage[$channelID; ### O <@$authorID> TEVE AZAR.
    -# $randomText[Morreu de uma batata quente;Caiu em um buraco;Foi atropelado por um unicórnio;Tomou um golpe de maca;Foi engulado por um buraco negro;Morreu de tédio;Foi picado por uma abelha assassina;Caiu de uma escada;Morreu de risada;Foi vítima de um ataque de gatinhos;Tomou um tiro de Nerf;Foi esmagado por um piano;Morreu de sono;Foi devorado por um dragão;Caiu em um poço de lava;Morreu de fome em uma ilha deserta;Foi atingido por um raio;Morreu de vergonha;Foi vítima de um ataque de memes;Caiu de um prédio;Morreu de overdose de açúcar]
    ]
    
    $!memberAddRoles[$guildID;$authorID;1481960745582202991]

`
}]    