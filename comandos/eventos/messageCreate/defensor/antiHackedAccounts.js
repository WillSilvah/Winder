module.exports = [{
    type: "messageCreate",
    code: `
    $if[$channelID==1506688312490852352;
     $let[userID;$authorID]
     $let[staffID;$clientID]
     $let[type;banido]
     $let[reason;Conta hackeada.]
     $deleteCommand
     $sendMessage[$getGuildVar[batePapo];w!ban <@$authorID> $get[reason]]
     $winderBan
     $sendMessage[$getGuildVar[batePapo];<@$clientID> **$username[$get[userID]]** foi **$get[type]**!\n> $bold[$get[reason]]]
    ]
`
}]