module.exports = [{
    name: "autopunish",
    code: `
    $ifx[
     $if[$getMemberVar[warnsTotal;$get[userID]]==1;
      $let[time;2h]
      $winderMute
     ]
     $elseIf[$getMemberVar[warnsTotal;$get[userID]]==2;
      $let[time;12h]
      $winderMute
     ]
     $elseIf[$getMemberVar[warnsTotal;$get[userID]]==3;
      $let[time;24h]
      $winderMute
     ]
     $elseIf[$getMemberVar[warnsTotal;$get[userID]]==4;
      $let[time;72h]
      $winderMute
      $winderKick
     ]
     $elseIf[$getMemberVar[warnsTotal;$get[userID]]>=5;
      $winderBan
     ]
    ]
`
}]