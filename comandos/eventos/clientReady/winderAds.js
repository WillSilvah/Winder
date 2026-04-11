module.exports = [{
  type: "clientReady",
  code: `
  $c[$let[guildID;1462224054676099094]
  $setInterval[
   $if[$getGlobalVar[sleepMode]==false;
    $let[ad;$randomNumber[1;10]]
    $sendMessage[$getGuildVar[batePapo;$get[guildID]];
     $if[$get[ad]==1;
     
     ]
   ]
  ;1h1m;WinderADS]
]
`
}]
