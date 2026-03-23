module.exports = [{
  type: 'clientReady',
  code: `
    $jsonLoad[timeouts;$getGlobalVar[timeouts;{}]]
    $jsonLoad[keys;$jsonKeys[timeouts]]
    $arrayForEach[keys;key;
      $let[code;$env[timeouts;$env[key];code]]
      $let[endTime;$env[timeouts;$env[key];endTime]]

      $setTimeout[
        $jsonLoad[timeouts;$getGlobalVar[timeouts;{}]]
        $if[$env[timeouts;$env[key]]!=;
          $!jsonDelete[timeouts;$env[key]]
          $setGlobalVar[timeouts;$env[timeouts]]
        ]
        $try[$eval[$replace[$get[code];{N};\n;-1];false]]
      ;$max[500;$math[$get[endTime] - $getTimestamp]];$env[key]]
    ]
  `
},{
  name: 'timeoutslist',
  aliases: ['tlist'],
  type: 'messageCreate',
  code: `
    $onlyForUsers[;$botOwnerID]

    $reply
    $defer

    $c[
      Maximal displayable rows in one message.
      DO NOT EDIT IF YOU DON'T KNOW WHAT YOU ARE DOING!
      MORE THAN 5 ROWS CAN CAUSE ISSUES WITH DISCORD INTERACTIONS!
    ]
    $let[maxRows;5]

    $let[pageArg;$default[$option[page];$message[0]]] $c['page' argument written by a user (optional)]
    $let[rowsArg;$default[$option[rows];$message[1]]] $c['rows' argument written by a user (optional)]

    $c[Processing the 'rows' argument for errors. If an error occurs, the value of the 'maxRows' variable is returned]
    $let[rows;$function[
      $if[$and[$get[rowsArg]!=;$isNumber[$get[rowsArg]];$get[rowsArg]<=$get[maxRows];$get[rowsArg]>=1];
        $return[$get[rowsArg]]
      ]
      $return[$get[maxRows]]
    ]]

    $c[CREATING TIMEOUTS LIST]
    $jsonLoad[listPages;$generateTimeoutListPages[$get[rows]]]

    $let[maxPages;$arrayLength[listPages]]

    $c[Processing the 'page' argument for errors. If an error occurs, '1' is returned]
    $let[page;$function[
      $if[$and[$get[pageArg]!=;$isNumber[$get[pageArg]];$get[pageArg]<=$get[maxPages];$get[pageArg]>=1];
        $return[$get[pageArg]]
      ]
      $return[$min[1;$get[maxPages]]]
    ]]

    $displayTimeoutsListContainer
    $if[$isSlashCommand;$interactionReply]
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
    $arrayLoad[allowedIds; ;stopTimeoutManually executeTimeoutManually showTimeoutCode]

    $onlyIf[$arraySome[allowedIds;id;$arrayIncludes[IID;$env[id]]]]
    $onlyIf[$arrayIncludes[IID;$authorID]]

    $let[page;$env[IID;0]]
    $let[rows;$env[IID;1]]
    $let[timeoutId;$env[IID;2]]

    $jsonLoad[timeouts;$getGlobalVar[timeouts;{}]]

    $switch[$env[IID;3];
      
      $case[stopTimeoutManually;
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
            $addTextDisplay[## _Successfully stopped timeout $inline[$get[timeoutId]]_]
          ;
            $addTextDisplay[## _Failed to stop timeout $inline[$get[timeoutId]]_]
          ]
        ]
      ]

      $case[executeTimeoutManually;
        $if[$env[timeouts;$get[timeoutId]]!=;
          $let[code;$env[timeouts;$get[timeoutId];code]]
          $setTimeout[$try[$eval[$replace[$get[code];{N};\n;-1];false]]]
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
            $addTextDisplay[## _Successfully executed timeout $inline[$get[timeoutId]]_]
          ;
            $addTextDisplay[## _Failed to execute timeout $inline[$get[timeoutId]]_]
          ]
        ]
      ]

      $case[showTimeoutCode;
        $jsonLoad[listPages;$generateTimeoutListPages[$get[rows]]]
        $let[maxPages;$arrayLength[listPages]]

        $let[page;$min[$get[page];$get[maxPages]]]

        $interactionUpdate[
          $displayTimeoutsListContainer
        ]

        $let[code;$replace[$env[timeouts;$get[timeoutId];code];{N};\n;-1]]

        $onlyIf[$get[code]!=;
          $interactionFollowUp[
            $ephemeral
            $addTextDisplay[## _Failed to get the code from timeout $inline[$get[timeoutId]]_]
          ]
        ]

        $arrayLoad[code;\n;$get[code]]
        $arrayMap[code;elem;
          $let[elem;$trim[$env[elem]]]
          $if[$get[elem]!=;
            $return[$get[elem]]
          ]
        ;newCode]

        $interactionFollowUp[
          $ephemeral
          $attachment[$arrayJoin[newCode;\n];Code.txt;true]
        ]
      ]
    ]
  `
},{
  name: 'stopalltimeouts',
  type: 'messageCreate',
  code: `
    $onlyForUsers[;$botOwnerID]

    $reply

    $jsonLoad[t;$getGlobalVar[timeouts;{}]]
    $jsonLoad[tk;$jsonKeys[t]]

    $onlyIf[$arrayLength[tk]>0;
      $addTextDisplay[## _There are no active timeouts!_]
    ]

    $loop[$arrayLength[tk];
      $let[tid;$arrayAt[tk;$math[$env[i] - 1]]]
      $!stopAdvancedTimeout[$get[tid]]
    ;i;true]

    $addTextDisplay[## _Successfully stopped all timeouts!_]
  `
},{
  name: 'executealltimeouts',
  type: 'messageCreate',
  code: `
    $onlyForUsers[;$botOwnerID]

    $reply

    $jsonLoad[t;$getGlobalVar[timeouts;{}]]
    $jsonLoad[tk;$jsonKeys[t]]

    $onlyIf[$arrayLength[tk]>0;
      $addTextDisplay[## _There are no active timeouts!_]
    ]

    $loop[$arrayLength[tk];
      $let[id;$arrayAt[tk;$math[$env[i] - 1]]]
      $let[code;$env[t;$get[id];code]]
      $try[$eval[$replace[$get[code];{N};\n;-1];false]]
      $!stopAdvancedTimeout[$get[id]]
    ;i;true]

    $addTextDisplay[## _Successfully executed all timeouts!_]
  `
}]