module.exports = {
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
        $eval[$replace[$get[code];{N};\n;-1];false]
      ;$max[500;$math[$get[endTime] - $getTimestamp]];$env[key]]
    ]
  `
}