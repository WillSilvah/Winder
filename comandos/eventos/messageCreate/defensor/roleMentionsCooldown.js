module.exports = [{
    type: "messageCreate",
    code: `
    $let[talkRole;$getGuildVar[guildCallTalkRole]]
    $let[voiceRole;$getGuildVar[guildCallVoiceRole]]
    
    $if[$isRoleMentioned[$channelID;$messageID;$get[talkRole]]==true;
     $!editRole[1462224054676099094;$get[talkRole];;;;;false;]
     $!memberAddRoles[$guildID;$authorID;$get[talkRole]]
     $advancedTimeout[$esc[$!editRole[1462224054676099094;{0};;;;;true;]];30m;talkRole_Cooldown;$get[talkRole]]
    ]
    
    $if[$isRoleMentioned[$channelID;$messageID;$get[voiceRole]]==true;
     $!editRole[1462224054676099094;$get[voiceRole];;;;;false;]
     $!memberAddRoles[$guildID;$authorID;$get[voiceRole]]
     $advancedTimeout[$esc[$!editRole[1462224054676099094;{0};;;;;true;]];30m;voiceRole_Cooldown;$get[voiceRole]]
    ]
`
}]    