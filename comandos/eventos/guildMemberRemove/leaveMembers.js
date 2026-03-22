module.exports = [{
    type: "guildMemberRemove",
    code: `
    $sendMessage[$getGuildVar[leaveAndJoinChannel;$guildID];
    $addContainer[
     $addSection[
     $addTextDisplay[### @$userTag saiu]
     $addTextDisplay[ID do usuário: $authorID]
     $addThumbnail[$userAvatar]
     ]
     ;Red]
    ]
$wait[2s]
$deleteRecords[inviter;$authorID]
`
}]    