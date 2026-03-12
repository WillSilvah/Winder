module.exports = {
  name: 'displayTimeoutsListContainer',
  code: `
    $c[Getting data on the 'page']
    $jsonLoad[listPage;$arrayAt[listPages;$math[$get[page]-1]]]

    $addContainer[
      $addTextDisplay[# Active Timeouts]
      $addSeparator[Large]

      $if[$arrayLength[listPage]>0;
        $loop[$get[rows];
          $let[i;$math[$env[i] - 1]]
    
          $addTextDisplay[## ID: \`$env[listPage;$get[i];0]\`]
          $addTextDisplay[## Time: \`$parseMS[$env[listPage;$get[i];1;time];;, ;false]\`]
          $addTextDisplay[## Ends in: $discordTimestamp[$env[listPage;$get[i];1;endTime];RelativeTime]]

          $if[$or[$sum[1;$env[i]]>$arrayLength[listPage];$env[i]==$get[rows]];
            $break
          ]

          $addSeparator[Large;false]
        ;i;true]
      ;
        $addTextDisplay[## The list is empty.]
      ]

      $addSeparator[Large]
      $addTextDisplay[### Page $get[page]/$get[maxPages]]

      $if[$get[maxPages]>1;
        $addActionRow
        $addButton[$get[page]-$get[rows]-timeoutsListButtonPrev-$authorID;;Primary;◀️]
        $addButton[$get[page]-$get[rows]-timeoutsListButtonNext-$authorID;;Primary;▶️]
      ]
    ]
  `
}