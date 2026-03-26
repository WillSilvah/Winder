module.exports = {
    type: "guildMemberAdd",
    code: `
    $setMemberVar[memberJoinedFirstTime;$memberJoinedAt[$guildID;$authorID];$authorID;$guildID]
    $setGuildVar[membersJoinedMonth;$sum[$getGuildVar[membersJoinedMonth;$guildID;0];1]]
    $setMemberVar[inviter;$inviterID[$guildID;$authorID];$authorID;$guildID]

    $sendMessage[$getGuildVar[batePapo];
     $if[$isBot[$authorID]==false;
       $addSection[
        $addTextDisplay[$if[$getMemberVar[memberJoinedHere?;$authorID;$guildID;false]==false;### 👋 <@$authorID> BEM VINDO!;### 🎉 <@$authorID> BEM VINDO DE VOLTA!]\n**Sinta-se em casa, aproveite bem a nossa comunidade!**]
        $addTextDisplay[-# Veio pelo: $if[$inviterID[$guildID;$authorID]!=;@$username[$inviterID[$guildID;$authorID]];@Fulano] | ID: $authorID | @$userTag]
        $addThumbnail[$userAvatar]
        ]
       $addSeparator[Large;true]
      ;
       $addSection[
        $addTextDisplay[### 🤖 <@$authorID> ADICIONADO!\n**Que isso? Um novo bot? 🤨**]
        $addThumbnail[$userAvatar]
        ]
       $addSeparator[Large;true]
      ]
    ]
    $wait[5s]
    $setMemberVar[memberJoinedHere?;true]
`
}