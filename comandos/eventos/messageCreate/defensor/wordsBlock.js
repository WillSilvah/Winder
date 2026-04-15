module.exports = [{
    type: "messageCreate",
    code: `
    $if[$getMemberVar[messageTotal;$authorID;$guildID;0]<100;
     $if[$includes[$toLowercase[$message];卐;卍;࿕;࿖;࿗;࿘;ꖦ;ᛋ;ϟ;ᛋᛋ;clatebit;trading;zeta;ζ;phi;φ;$USD;sieg heil;cavetodex]==true;
      $let[userID;$authorID]
     $let[reason;Comportamento indevido e ofensivo.]
     $let[staffID;$clientID]
     $let[type;banido]
    
     $sendMessage[$getGuildVar[batePapo];w!ban <@$authorID> $get[reason]] $c[Enfeite, para dizer que foi o próprio bot que executou a função]
     $winderBan
     ]
    ]
`
}]