module.exports = {
  name: 'advancedTimeout',
  params: [
    {
      name: 'code',
      description: 'The code to execute.',
      required: true
    },
    {
      name: 'time',
      description: 'How long to wait for before running this code.',
      required: true
    },
    {
      name: 'id',
      description: 'A unique ID for this timeout',
      required: true
    },
    {
      name: 'data',
      description: 'The data to include in the code.',
      required: false,
      rest: true
    },
  ],
  code: `
    $c[The time when the code inside the timeout will execute]
    $let[time;$function[
      $if[$isNumber[$env[time]];
        $return[$env[time]]
      ;
        $return[$parseString[$env[time]]]
      ]
    ]]

    $if[$get[time]==0;
      $logger[Error;Failed to set timeout with ID '$env[id]'. Reason: invalid time '$env[time]' received]
      $return
    ]


    $let[endTime;$math[$getTimestamp + $get[time]]]
    $let[code;$advancedReplace[$env[code];\n;{N};-1]]


    $c[Replacing {placeholders} with included data in desc order]
    $loop[$arrayLength[data];
      $let[i;$math[$env[i] - 1]]
      $let[replacement;$replace[$arrayAt[data;$get[i]];\n;{N};-1]]
      $let[code;$replace[$get[code];{$get[i]};$get[replacement];-1]]
    ;i;true]


    $c[Saving timeout data and loading it into 'timeouts' variable]
    $jsonLoad[timeout_data;{
      "time": "$get[time]",
      "endTime": "$get[endTime]",
      "code": "$get[code]"
    }]

    $jsonLoad[timeouts;$getGlobalVar[timeouts;{}]]
    $if[$env[timeouts;$env[id]]!=;
      $logger[Error;Failed to set timeout with ID '$env[id]'. Reason: timeout with this ID already exist]
      $return
    ]
    $!jsonSet[timeouts;$env[id];$env[timeout_data]]
    $setGlobalVar[timeouts;$env[timeouts]]
    
    $setTimeout[
      $jsonLoad[timeouts;$getGlobalVar[timeouts;{}]]
      $if[$env[timeouts;$env[id]]!=;
        $!jsonDelete[timeouts;$env[id]]
        $setGlobalVar[timeouts;$env[timeouts]]
      ]
      $eval[$replace[$get[code];{N};\n;-1];false]
    ;$env[time];$env[id]]
  `
}