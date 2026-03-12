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
        $onlyIf[$channelType[$env[id]]==GuildText;
         $log[Não foi possível modificar o canal $env[id] pois ele não é um canal de texto]
        ]
       $if[$env[id]!=$getGuildVar[isolatedChannel];
       $modifyChannelPerms[$env[id];$getGuildVar[memberIsolatedRole];-ViewChannel]
      ]]
     
     $setMemberVar[memberIsolated;true;$env[userID];$guildID]
     
     $if[$getMemberVar[memberIsVerified;$env[userID]]==true;
      $log[$getMemberVar[memberIsVerified;$env[userID]] = $getGuildVar[memberVerifiedRole]]
      $!memberRemoveRoles[$guildID;$env[userID];$getGuildVar[memberVerifiedRole]]
     ]
      $if[$getMemberVar[memberIsStaff;$env[userID]]==true;
       $!memberRemoveRoles[$guildID;$env[userID];$getGuildVar[allStaffRole]]
      ]
       $if[$getMemberVar[memberIsArtist;$env[userID]]==true;
        $!memberRemoveRoles[$guildID;$env[userID];$getGuildVar[memberArtistRole]]
       ]
        $if[$getMemberVar[memberIsOfficialArtist;$env[userID]]==true;
         $!memberRemoveRoles[$guildID;$env[userID];$getGuildVar[memberOfficialArtistRole]]
        ]
         $if[$getMemberVar[memberIsSupporter;$env[userID]]==true;
          $!memberRemoveRoles[$guildID;$env[userID];$getGuildVar[memberSupporterRole]]
         ]
          $if[$getMemberVar[memberIsActive;$env[userID]]==true;
           $!memberRemoveRoles[$guildID;$env[userID];$getGuildVar[memberActiveRole]]
          ]
     
      
      ;
     $!memberRemoveRoles[$guildID;$env[userID];$getGuildVar[memberIsolatedRole]]
     
     $advancedTimeout[$esc[
      $setMemberVar[memberIsolated;false;{0};{1}]
     
     ];24h;IsolatedStatus_$env[userID];$env[userID];$guildID]
    ]

`
}]