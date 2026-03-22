module.exports = [{
    type: "messageCreate",
    code: `
$let[talkRole;$getGuildVar[guildCallTalkRole]]
$let[voiceRole;$getGuildVar[guildCallVoiceRole]]

$if[$isRoleMentioned[$channelID;$messageID;$get[talkRole]]==true;
  $!editRole[$guildID;$get[talkRole];;;;;false]
  $!memberAddRoles[$guildID;$authorID;$get[talkRole]]
  $advancedTimeout[$esc[$!editRole[{1};{0};;;;;true]];30m;talkRole_Cooldown;$get[talkRole];$guildID]
]

$if[$isRoleMentioned[$channelID;$messageID;$get[voiceRole]]==true;
  $!editRole[$guildID;$get[voiceRole];;;;;false]
  $!memberAddRoles[$guildID;$authorID;$get[voiceRole]]
  $advancedTimeout[$esc[$!editRole[{1};{0};;;;;true]];30m;voiceRole_Cooldown;$get[voiceRole];$guildID]
]

`
}]    