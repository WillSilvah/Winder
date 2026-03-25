module.exports = [{
    type: "messageCreate",
    code: `
    $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole;$guildID]]==false]
    $arrayLoad[alphabet;;abcdefghijklmnopqrstuvwxyz]
    $let[hasNormalLetters;$arraySome[alphabet;letter;$includes[$userDisplayName / $nickname;$env[letter]]]]
    $if[$get[hasNormalLetters]==false;
     $!memberSetNickname[$guildID;$authorID;$usertag]
    ]
`
},{
    type: "guildMemberUpdate",
    code: `
    $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole;$guildID]]==false]
    $arrayLoad[alphabet;;abcdefghijklmnopqrstuvwxyz]
    $let[hasNormalLetters;$arraySome[alphabet;letter;$includes[$userDisplayName / $nickname;$env[letter]]]]
    $if[$get[hasNormalLetters]==false;
     $!memberSetNickname[$guildID;$authorID;$usertag]
    ]
`
},{
    type: "guildMemberAdd",
    code: `
    $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole;$guildID]]==false]
    $arrayLoad[alphabet;;abcdefghijklmnopqrstuvwxyz]
    $let[hasNormalLetters;$arraySome[alphabet;letter;$includes[$userDisplayName / $nickname;$env[letter]]]]
    $if[$get[hasNormalLetters]==false;
     $!memberSetNickname[$guildID;$authorID;$usertag]
    ]
`}]