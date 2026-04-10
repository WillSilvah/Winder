module.exports = [{
    name: "minigame",
    params: [
    {
      name: 'tipo',
      description: "Tipo do minigame a ser executado",
      required: true
    },
    {
       name: 'guildID',
       description: "ID do servidor",
       required: true
    }
    ],
    code: `
    
    $setGuildVar[minigameXPmin;5;$env[guildID]]
    $setGuildVar[minigameXPmax;15;$env[guildID]]

     $sendMessage[$getGuildVar[batePapo;$env[guildID]];
      $if[$env[tipo]==fraseRepeat;
       $let[frase_id;$randomNumber[1;$exec[ls -1 Recursos/WinderMinigames/FraseRepeat/Frases/ | wc -l]]]
       $jsonLoad[frase;$readFile[Recursos/WinderMinigames/FraseRepeat/Frases/$get[frase_id].txt]]
       
       $addContainer[
        $addTextDisplay[Quem escrever primeiro ganha]
        $addTextDisplay[### $replaceText[$env[frase;texto]; ; ]\n-# $env[frase;autor] | ID: $get[frase_id]]
       ;Green]
       $setGuildVar[minigameWord;$env[frase;texto];$env[guildID]]
       $setGuildVar[minigameType;$env[tipo];$env[guildID]]
       $setGuildVar[minigameStatus;true;$env[guildID]]
      ]
      $if[$env[tipo]==questions;
      $setChannelSlowmode[$getGuildVar[batePapo;$env[guildID]];5]
       $let[id;$randomNumber[1;$exec[ls -1 Recursos/WinderMinigames/Questions/asks/ | wc -l]]]
       $jsonLoad[ask;$readFile[Recursos/WinderMinigames/Questions/asks/$get[id].txt]]
       $jsonLoad[alt;$env[ask;alts]]
       
       $addContainer[
        $addTextDisplay[### $toUpperCase[$env[ask;pergunta] ($env[ask;difficulty])]]
        $addTextDisplay[$if[$env[alt;a]!=undefined;A: $env[alt;a]]\n$if[$env[alt;b]!=undefined;B: $env[alt;b]]\n$if[$env[alt;c]!=undefined;C: $env[alt;c]]\n$if[$env[alt;d]!=undefined;D: $env[alt;d]]\n$if[$env[alt;e]!=undefined;E: $env[alt;e]]]   
       $addTextDisplay[-# Responda apenas com a letra da alternativa | ID: $get[id]]   
       ;Green]
       
      $setGuildVar[minigameWord;$env[ask;correct];$env[guildID]]
      $setGuildVar[minigameType;$env[tipo];$env[guildID]]
      $setGuildVar[minigameStatus;true;$env[guildID]]
     ]
     $if[$env[tipo]==emojiRepeat;
       $let[emoji;$randomText[💧;🥤;💦]]
       $let[emojiAmount;$randomNumber[1;10]]
       $let[emojiWord;$repeat[$get[emoji] ;$get[emojiAmount]]]
       
       $addContainer[
        $addTextDisplay[Quem repetir $get[emoji] **$get[emojiAmount]** vezes ganha!]
        $addTextDisplay[### $replaceText[$get[emojiWord]; ; ]\nEspecial dia da água | ID: 22/03]
       ;Green]
       $setGuildVar[minigameWord;$get[emojiWord];$env[guildID]]
       $setGuildVar[minigameType;$env[tipo];$env[guildID]]
       $setGuildVar[minigameStatus;true;$env[guildID]]
      ]
    ] 
    $setGuildVar[minigameExecuteCount;$math[$getGuildVar[minigameExecuteCount;$env[guildID];0]+1];$env[guildID]]
    $setGuildVar[minigameTimestamp;$getTimestamp;$env[guildID]]
     $wait[1m]
      $onlyIf[$getGuildVar[minigameStatus;$env[guildID]]==true;]
      $setGuildVar[minigameStatus;false;$env[guildID]]
      $setGuildVar[minigameWord;;$env[guildID]]
      $setGuildVar[minigameXPmin;0;$env[guildID]]
      $setGuildVar[minigameXPmax;0;$env[guildID]]
      $!setChannelSlowmode[$getGuildVar[batePapo;$env[guildID]];0]
      $sendMessage[$getGuildVar[batePapo;$env[guildID]];### ⛔️ EVENTO DE CHAT FOI CANCELADO!]

`}]