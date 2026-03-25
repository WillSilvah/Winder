module.exports = [{
    type: "messageCreate",
    code: `
    $arrayLoad[alphabet;;abcdefghijklmnopqrstuvwxyz]
    $let[hasNormalLetters;$arraySome[alphabet;letter;$includes[$userDisplayName / $nickname;$env[letter]]]]
    $if[$get[hasNormalLetters]==false;
     $memberSetNickname[$guildID;$authorID;$usertag]
    ]
`
}]