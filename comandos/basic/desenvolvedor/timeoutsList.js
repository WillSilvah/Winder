module.exports = [{
  name: 'timeoutslist',
  aliases: ['activetimeoutslist', 'activetimeouts', 'tlist'],
  type: 'messageCreate',
  code: `
    $reply

    $jsonLoad[timeouts;$getGlobalVar[timeouts;{}]]
    $jsonLoad[timeoutEntries;$jsonEntries[timeouts]]

    $onlyIf[$arrayLength[timeoutEntries]>0;
      $addTextDisplay[# The list is empty.]
    ]

    $c[Maximal displayable rows in one message]
    $let[maxRows;5]

    $let[pageArg;$message[0]] $c['page' argument written by a user (optional)]
    $let[rowsArg;$message[1]] $c['rows' argument written by a user (optional)]

    $c[=====CREATING TIMEOUTS LIST=====]

    $arrayCreate[listPages]

    $c[Processing the 'rows' argument for errors. If an error occurs, the value of the 'maxRows' variable is returned]
    $let[rows;$function[
      $if[$and[$get[rowsArg]!=;$isNumber[$get[rowsArg]];$get[rowsArg]<=$get[maxRows];$get[rowsArg]>=1];
        $return[$get[rowsArg]]
      ]
      $return[$get[maxRows]]
    ]]

    $c[JSON pages system]
    $loop[$arrayLength[timeoutEntries];
      $if[$math[($env[i] - 1) % $get[rows]]==0;
        $arrayPushJSON[listPages;$arraySplice[timeoutEntries;0;$get[rows]]]
      ]
    ;i;true]

    $let[maxPages;$arrayLength[listPages]]

    $c[Processing the 'page' argument for errors. If an error occurs, '1' is returned]
    $let[page;$function[
      $if[$and[$get[pageArg]!=;$isNumber[$get[pageArg]];$get[pageArg]<=$get[maxPages];$get[pageArg]>=1];
        $return[$get[pageArg]]
      ]
      $return[1]
    ]]

    $displayTimeoutsListContainer
    $let[mid;$sendMessage[$channelID;;true]]

    $c[Caches the list in the message variable. Required for the correct functioning of pages.]
    $if[$get[maxPages]>1;
      $setMessageVar[timeoutListPages;$env[listPages];$get[mid]]
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

    $jsonLoad[listPages;$getMessageVar[timeoutListPages;$get[mid];[\\]]]
    $let[maxPages;$arrayLength[listPages]]

    $onlyIf[$get[maxPages]>0]

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

    $displayTimeoutsListContainer
    $interactionUpdate
  `
},{
  type: 'clientReady',
  description: "Starts an infinite loop that deletes 'timeoutListPages' message variable every 30 minutes",
  code: `
    $loop[-1;
      $deleteRecords[timeoutListPages;;message]
      $wait[30m]
    ]
  `
}]