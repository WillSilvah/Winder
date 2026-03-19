module.exports = [{
    type: "guildMemberRemove",
    code: `
    $sendMessage[$getGuildVar[leaveAndJoinChannel];
    $addContainer[
     $addSection[
     $addTextDisplay[### @$userTag saiu]
     $addTextDisplay[Convidado por: $if[$inviterID[$guildID;$authorID]!=;@$username[$inviterID[$guildID;$authorID]];@Fulano]]
     $addThumbnail[$userAvatar]
     ]
     ;Red]
    ]

`
}]    