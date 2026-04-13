module.exports = [{
    type: "messageCreate",
    code: `
    $let[talkRole;$getGuildVar[guildCallTalkRole]]
    $let[voiceRole;$getGuildVar[guildCallVoiceRole]]

    $if[$isRoleMentioned[$channelID;$messageID;$get[talkRole]]==true;
     $!editRole[$guildID;$get[talkRole];;;;;false]
     $!memberAddRoles[$guildID;$authorID;$get[talkRole]]
     $!advancedTimeout[$esc[
     $onlyIf[$getGlobalVar[sleepMode]==false;]
      $!editRole[{guildID};{roleID};$roleName[{guildID};{roleID}];$roleColor[{guildID};{roleID}];$roleIcon[{guildID};{roleID}];$roleHoisted[{guildID};{roleID}];true]
     ];60m;talkRole_Cooldown;{"guildID": "$guildID", "roleID": "$get[talkRole]"}]
    ]

    $if[$isRoleMentioned[$channelID;$messageID;$get[voiceRole]]==true;
     $!editRole[$guildID;$get[voiceRole];;;;;false]
     $!memberAddRoles[$guildID;$authorID;$get[voiceRole]]
     $!advancedTimeout[$esc[
     $onlyIf[$getGlobalVar[sleepMode]==false;]
      $!editRole[{guildID};{roleID};$roleName[{guildID};{roleID}];$roleColor[{guildID};{roleID}];$roleIcon[{guildID};{roleID}];$roleHoisted[{guildID};{roleID}];true]
     ];60m;voiceRole_Cooldown;{"guildID": "$guildID", "roleID": "$get[voiceRole]"}]
    ]
`
}]    