module.exports = [{
  name: 'timeoutslist',
  aliases: ['activetimeoutslist', 'activetimeouts', 'tlist'],
  type: 'messageCreate',
  code: `
    $onlyForUsers[;$botOwnerID]

    $reply
    $defer

    $c[Maximal displayable rows in one message. Must be a number. More than 5 is not recommended.]
    $let[maxRows;5]

    $let[pageArg;$default[$option[page];$message[0]]] $c['page' argument written by a user (optional)]
    $let[rowsArg;$default[$option[rows];$message[1]]] $c['rows' argument written by a user (optional)]

    $c[=====CREATING TIMEOUTS LIST=====]

    $c[Processing the 'rows' argument for errors. If an error occurs, the value of the 'maxRows' variable is returned]
    $let[rows;$function[
      $if[$and[$get[rowsArg]!=;$isNumber[$get[rowsArg]];$get[rowsArg]<=$get[maxRows];$get[rowsArg]>=1];
        $return[$get[rowsArg]]
      ]
      $return[$get[maxRows]]
    ]]

    $jsonLoad[listPages;$generateTimeoutListPages[$get[rows]]]

    $let[maxPages;$arrayLength[listPages]]

    $c[Processing the 'page' argument for errors. If an error occurs, '1' is returned]
    $let[page;$function[
      $if[$and[$get[pageArg]!=;$isNumber[$get[pageArg]];$get[pageArg]<=$get[maxPages];$get[pageArg]>=1];
        $return[$get[pageArg]]
      ]
      $return[1]
    ]]

    $displayTimeoutsListContainer
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

    $jsonLoad[listPages;$generateTimeoutListPages[$get[rows]]]
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

    $displayTimeoutsListContainer
    $interactionUpdate
  `
},{
  type: 'interactionCreate',
  allowedInteractionTypes: ['button'],
  code: `
    $arrayLoad[IID;!!!;$customID]
    $arrayLoad[allowedIds; ;stopTimeoutManually]

    $onlyIf[$arraySome[allowedIds;id;$arrayIncludes[IID;$env[id]]]]
    $onlyIf[$arrayIncludes[IID;$authorID]]

    $let[page;$env[IID;0]]
    $let[rows;$env[IID;1]]
    $let[timeoutId;$env[IID;2]]
    $let[executionResult;$stopAdvancedTimeout[$get[timeoutId]]]

    $jsonLoad[listPages;$generateTimeoutListPages[$get[rows]]]
    $let[maxPages;$arrayLength[listPages]]

    $let[page;$min[$get[page];$get[maxPages]]]
    

    $interactionUpdate[
      $displayTimeoutsListContainer
    ]

    $interactionFollowUp[
      $ephemeral
      
      $if[$get[executionResult];
        $addTextDisplay[## Successfully stopped timeout \`$get[timeoutId]\`]
      ;
        $addTextDisplay[## Failed to stop timeout \`$get[timeoutId]\`]
      ]
    ]
  `
},{
  type: 'interactionCreate',
  allowedInteractionTypes: ['button'],
  code: `
    $arrayLoad[IID;!!!;$customID]
    $arrayLoad[allowedIds; ;executeTimeoutManually]

    $onlyIf[$arraySome[allowedIds;id;$arrayIncludes[IID;$env[id]]]]
    $onlyIf[$arrayIncludes[IID;$authorID]]

    $let[page;$env[IID;0]]
    $let[rows;$env[IID;1]]
    $let[timeoutId;$env[IID;2]]

    $jsonLoad[timeouts;$getGlobalVar[timeouts;{}]]
    $if[$env[timeouts;$get[timeoutId]]!=;
      $let[code;$env[timeouts;$get[timeoutId];code]]
      $try[$eval[$replace[$get[code];{N};\n;-1];false]]
    ]
    $let[success;$stopAdvancedTimeout[$get[timeoutId]]]

    $jsonLoad[listPages;$generateTimeoutListPages[$get[rows]]]
    $let[maxPages;$arrayLength[listPages]]

    $let[page;$min[$get[page];$get[maxPages]]]

    $interactionUpdate[
      $displayTimeoutsListContainer
    ]

    $interactionFollowUp[
      $ephemeral

      $if[$get[success];
        $addTextDisplay[## Successfully executed timeout \`$get[timeoutId]\`]
      ;
        $addTextDisplay[## Failed to execute timeout \`$get[timeoutId]\`]
      ]
    ]
  `
},{
  name: 'stopalltimeouts',
  aliases: ['sat'],
  type: 'messageCreate',
  code: `
    $onlyForUsers[;$botOwnerID]

    $reply

    $jsonLoad[t;$getGlobalVar[timeouts;{}]]
    $jsonLoad[te;$jsonEntries[t]]

    $onlyIf[$arrayLength[te]>0;
      $addTextDisplay[## There are no active timeouts!]
    ]

    $loop[$arrayLength[te];
      $let[tid;$env[te;$math[$env[i] - 1];0]]
      $!stopAdvancedTimeout[$get[tid]]
    ;i;true]

    $addTextDisplay[## Stopped all timeouts!]
  `
},{
  name: 'executealltimeouts',
  aliases: ['eat'],
  type: 'messageCreate',
  code: `
    $onlyForUsers[;$botOwnerID]

    $reply

    $jsonLoad[t;$getGlobalVar[timeouts;{}]]
    $jsonLoad[tk;$jsonKeys[t]]

    $onlyIf[$arrayLength[tk]>0;
      $addTextDisplay[## There are no active timeouts!]
    ]

    $loop[$arrayLength[tk];
      $let[id;$arrayAt[tk;$math[$env[i] - 1]]]
      $let[code;$env[t;$get[id];code]]
      $try[$eval[$replace[$get[code];{N};\n;-1];false]]
      $!stopAdvancedTimeout[$get[id]]
    ;i;true]

    $addTextDisplay[## Executed all timeouts!]
  `
}]