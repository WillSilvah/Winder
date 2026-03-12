module.exports = [{
    name: "isolar",
    params: [
    {
      name: 'userID',
      description: "ID do usuário",
      required: true
    }
   ],
    code: `
    $onlyIf[$getGuildVar[memberIsolatedRole]!=;]
    $if[$hasRoles[$guildID;$env[userID];$getGuildVar[memberIsolatedRole]]==false;
     $!memberAddRoles[$guildID;$env[userID];$getGuildVar[memberIsolatedRole]]
     
     $arrayLoad[channels;,;$guildChannelIDs[$guildID;,]]
      $arrayForEach[channels;id;
       $if[$env[id]!=$getGuildVar[isolatedChannel];
       $modifyChannelPerms[$env[id];$getGuildVar[memberIsolatedRole];-ViewChannel]
      ]]
     
     $setMemberVar[memberIsolated;true;$env[userID];$guildID]
     
     $if[$getMemberVar[memberIsVerified]==true;
      $!memberRemoveRoles[$guildID;$env[userID];$getGuildVar[memberVerifiedRole]]
     ]
      $if[$getMemberVar[memberIsStaff]==true;
       $!memberRemoveRoles[$guildID;$env[userID];$getGuildVar[allStaffRole]]
      ]
       $if[$getMemberVar[memberIsArtist]==true;
        $!memberRemoveRoles[$guildID;$env[userID];$getGuildVar[memberArtistRole]]
       ]
        $if[$getMemberVar[memberIsOfficialArtist]==true;
         $!memberRemoveRoles[$guildID;$env[userID];$getGuildVar[memberOfficialArtistRole]]
        ]
         $if[$getMemberVar[memberIsSupporter]==true;
          $!memberRemoveRoles[$guildID;$env[userID];$getGuildVar[memberSupporterRole]]
         ]
          $if[$getMemberVar[memberIsActive]==true;
           $!memberRemoveRoles[$guildID;$env[userID];$getGuildVar[memberActiveRole]]
          ]
     
      
      ;
     $!memberRemoveRoles[$guildID;$env[userID];$getGuildVar[memberIsolatedRole]]
     
     $advancedTimeout[$esc[
      $setMemberVar[memberIsolated;false;{0};{1}]
     
     ];24h;IsolatedStatus_$get[userID];$get[userID];$guildID]
    ]

`
}]