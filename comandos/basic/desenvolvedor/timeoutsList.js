module.exports = [{
  name: 'timeoutslist',
  aliases: ['activetimeoutslist', 'activetimeouts', 'tlist'],
  type: 'messageCreate',
  code: `
    $jsonLoad[timeouts;$getGlobalVar[timeouts;{}]]
    $jsonLoad[timeoutEntries;$jsonEntries[timeouts]]

    $onlyIf[$arrayLength[timeoutEntries]>0;
      $addTextDisplay[# The list is empty.]
    ]

    $let[maxRows;5] $c[Maximal displayable rows in one message]
    $let[varDeletionTime;5m] $c[The time after which the message variable 'varDeletionTime' will be deleted to avoid cluttering the database (only if there is more than one page)]

    $let[pageArg;$message[0]]
    $let[rowsArg;$message[1]]


    $c[=====CREATING TIMEOUTS LIST=====]

    $arrayCreate[listPages]

    $let[rows;$function[
      $if[$and[$get[rowsArg]!=;$isNumber[$get[rowsArg]];$get[rowsArg]<=$get[maxRows];$get[rowsArg]>=1];
        $return[$get[rowsArg]]
      ]
      $return[$get[maxRows]]
    ]]

    $loop[$arrayLength[timeoutEntries];
      $if[$math[($env[i] - 1) % $get[rows]]==0;
        $arrayPushJSON[listPages;$arraySplice[timeoutEntries;0;$get[rows]]]
      ]
    ;i;true]

    $let[maxPages;$arrayLength[listPages]]

    $let[page;$function[
      $if[$and[$get[pageArg]!=;$isNumber[$get[pageArg]];$get[pageArg]<=$get[maxPages];$get[pageArg]>=1];
        $return[$get[pageArg]]
      ]
      $return[1]
    ]]

    $jsonLoad[listPage;$arrayAt[listPages;$math[$get[page]-1]]]


    $c[=====SENDING CONTAINER MESSAGE=====]

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
    $let[mid;$sendMessage[$channelID;;true]]

    $c[Saves the list to the message variable. Will be deleted after the time specified in the 'varDeletionTime' variable]
    $if[$get[maxPages]>1;
      $setMessageVar[timeoutListPages;$env[listPages];$get[mid]]
      $!advancedTimeout[$esc[
        $deleteMessageVar[timeoutListPages;{1}]
      ];$get[varDeletionTime];timeoutListPages-$authorID-$get[mid];$channelID;$get[mid]]
    ]
  `
},{
  type: 'interactionCreate',
  allowedInteractionTypes: ['button'],
  code: `
    $arrayLoad[IID;-;$customID]
    $arrayLoad[allowedIds; ;timeoutsListButtonPrev timeoutsListButtonNext]

    $onlyIf[$arraySome[allowedIds;id;$arrayIncludes[IID;$env[id]]]]
    $onlyIf[$arrayIncludes[IID;$authorID]]

    $let[page;$env[IID;0]]
    $let[rows;$env[IID;1]]
    $let[mid;$messageID]

    $jsonLoad[listPages;$getMessageVar[timeoutListPages;$get[mid]]]

    $onlyIf[$env[listPages]!=]

    $let[maxPages;$arrayLength[listPages]]

    $switch[$env[IID;2];
      $case[timeoutsListButtonPrev;
        $letSub[page;1]
        $if[$get[page]<=0;
          $let[page;$get[maxPages]]
        ]
      ]

      $case[timeoutsListButtonNext;
        $letSum[page;1]
        $if[$get[page]>$get[maxPages];
          $let[page;1]
        ]
      ]
    ]

    $jsonLoad[listPage;$arrayAt[listPages;$math[$get[page]-1]]]

    $c[=====SENDING CONTAINER MESSAGE=====]

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

      $if[$get[maxPages]>0;
        $addActionRow
        $addButton[$get[page]-$get[rows]-timeoutsListButtonPrev-$authorID;;Primary;◀️]
        $addButton[$get[page]-$get[rows]-timeoutsListButtonNext-$authorID;;Primary;▶️]
      ]
    ]
    $interactionUpdate
  `
}]