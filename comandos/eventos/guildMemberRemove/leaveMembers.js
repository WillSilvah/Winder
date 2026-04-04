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
    $setGuildVar[membersLeftMonth;$sum[$getGuildVar[membersLeftMonth;$guildID;0];1]]
    
$wait[2s]
$deleteRecords[inviter;$authorID]
$deleteRecords[lastMessage;$authorID]
$deleteRecords[lastMessageChannel;$authorID]
$deleteRecords[lastMessageTime;$authorID]
$deleteRecords[lastMessageTimestamp;$authorID]
$deleteRecords[lastOnTimestamp;$authorID]
$deleteRecords[activityLastDay;$authorID]
`
}]    
