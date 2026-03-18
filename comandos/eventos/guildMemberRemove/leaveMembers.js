module.exports = [{
    type: "guildMemberRemove",
    code: `
    $sendMessage[$getGuildVar[leaveAndJoinChannel];
    $addContainer[
     $addSection[
     $addTextDisplay[### @$userTag saiu]
     $addTextDisplay[Convidado por: $getMemberVar[inviter]
     
     $addThumbnail[$userAvatar]
     ]
     ;Red]
    
    ]

`
}]    