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
    $if[$hasRoles[$hasRoles[$guildID;$env[userID];$getGuildVar[memberIsolatedRole]]==false;
     $!memberAddRoles[$guildID;$env[userID];$getGuildVar[memberIsolatedRole]]
     
     $arrayLoad[channels;,;$guildChannelIDs[$guildID;,]]
      $arrayForEach[channels;id;
       $if[
       $modifyChannelPerms[$getGuildVar[isolatedChannel];$getGuildVar[memberIsolatedRole];-ViewChannel]
      ]]
         
    ]

`
}]