module.exports = [{
  name: 'displayTimeoutsListContainer',
  code: `
    $c[Getting data on the 'page']
    $jsonLoad[listPage;$arrayAt[listPages;$math[$get[page]-1]]]

    $addContainer[
      $addTextDisplay[## Active Timeouts]
      $addSeparator[Large]

      $if[$arrayLength[listPage]>0;
        $loop[$get[rows];
          $let[i;$math[$env[i] - 1]]

          $let[tid;$env[listPage;$get[i];0]]
    
          $addTextDisplay[
            ### ID: \`$get[tid]\`
            ### Time: \`$parseDigital[$env[listPage;$get[i];1;time]]\`
            ### Ends in: $discordTimestamp[$env[listPage;$get[i];1;endTime];RelativeTime]
          ]
          $addActionRow
          $addButton[$get[page]!!!$get[rows]!!!$get[tid]!!!stopTimeoutManually!!!$authorID;Stop;Danger]
          $addButton[$get[page]!!!$get[rows]!!!$get[tid]!!!executeTimeoutManually!!!$authorID;Execute;Primary]

          $addSeparator
          $if[$or[$sum[1;$env[i]]>$arrayLength[listPage];$env[i]==$get[rows]];
            $break
          ]
        ;i;true]
      ;
        $addTextDisplay[## The list is empty.]
        $addSeparator
      ]

      $addTextDisplay[### Page $get[page]/$get[maxPages]]

      $if[$get[maxPages]>1;
        $addActionRow
        $addButton[$get[page]-$get[rows]-timeoutsListButtonPrev-$authorID;;Primary;◀️]
        $addButton[$get[page]-$get[rows]-timeoutsListButtonNext-$authorID;;Primary;▶️]
      ]
    ]
  `
},{
  name: 'generateTimeoutListPages',
  params: [
    {
      name: 'rows',
      description: 'Rows per page',
      type: 'Number',
      required: true,
    }
  ],
  code: `
    $jsonLoad[t;$getGlobalVar[timeouts;{}]]
    $jsonLoad[te;$jsonEntries[t]]

    $if[$arrayLength[te]==0;
      $return[[\\]]
    ]

    $arrayCreate[__listPages]

    $loop[$arrayLength[te];
      $if[$math[($env[i] - 1) % $env[rows]]==0;
        $arrayPushJSON[__listPages;$arraySplice[te;0;$env[rows]]]
      ]
    ;i;true]

    $return[$env[__listPages]]
  `
}]