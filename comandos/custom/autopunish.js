module.exports = [{
    name: "autopunish",
    code: `
    $ifx[
     $if[$getMemberVar[warnsTotal;$get[userID]]==1;
      $let[time;2h]
      $let[type;silenciado]
      $winderMute
     ]
     $elseIf[$getMemberVar[warnsTotal;$get[userID]]==2;
      $let[time;12h]
      $let[type;silenciado]
      $winderMute
     ]
     $elseIf[$getMemberVar[warnsTotal;$get[userID]]==3;
      $let[time;24h]
      $let[type;silenciado]
      $winderMute
     ]
     $elseIf[$getMemberVar[warnsTotal;$get[userID]]==4;
      $let[time;72h]
      $let[type;silenciado e expulso]
      $winderMute
      $winderKick
     ]
     $elseIf[$getMemberVar[warnsTotal;$get[userID]]>=5;
      $let[type;banido]
      $winderBan
     ]
    ]
`
}]