module.exports = [{
    type: "guildMemberRemove",
    code: `
    $sendMessage[$getGuildVar[leaveAndJoinChannel;$guildID];
    $addContainer[
     $addSection[
     $addTextDisplay[### $userDisplayName saiu\n-# **@$userTag**]
     $addTextDisplay[ID do usuário: $authorID]
     $addThumbnail[$userAvatar]
     ]
     ;Red]
    ]
$wait[2s]
$deleteRecords[inviter;$authorID]
$deleteRecords[lastMessage;$authorID]
$deleteRecords[lastMessageChannel;$authorID]
$deleteRecords[lastMessageTime;$authorID]
$deleteRecords[lastMessageTimestamp;$authorID]
`
}]    
