module.exports = {
    type: "guildMemberAdd",
    code: `
    $let[inviterID;$inviterID[$guildID;$authorID]]
    $if[$get[inviterID]!=;
     $setMemberVar[invitesMouth;$math[$getMemberVar[invitesMouth;$get[inviterID];$guildID;0]+1];$get[inviterID];$guildID]
     $setMemberVar[invitesTotal;$math[$getMemberVar[invitesTotal;$get[inviterID];$guildID;0]+1];$get[inviterID];$guildID]
    ]

    $sendMessage[$getGuildVar[invitesLogChannel];
     $addContainer[
      $addSection[
       $addTextDisplay[### $userDisplayName\n-# **@$userTag ($authorID)**\nConvidado por: $userTag[$get[inviterID]] ($get[inviterID])]
       $addThumbnail[$userAvatar]
      ]
     $addSeparator[Large;true]
    ;Red]
    ]
`
}