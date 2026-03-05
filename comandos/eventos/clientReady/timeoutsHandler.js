module.exports = {
  type: 'clientReady',
  code: `
    $jsonLoad[timeouts;$getGlobalVar[timeouts;{}]]
    $jsonLoad[keys;$jsonKeys[timeouts]]
    $loop[$arrayLength[keys];
      $let[id;$arrayAt[keys;$math[$env[i] - 1]]]
      $let[endTime;$env[timeouts;$get[id];endTime]]
      $let[code;$env[timeouts;$get[id];code]]

      $log[id: $get[id] | end time: $get[endTime]]

      $setTimeout[
        $jsonLoad[timeouts;$getGlobalVar[timeouts;{}]]
        $if[$env[timeouts;$get[id]]!=;
          $!jsonDelete[timeouts;$get[id]]
          $setGlobalVar[timeouts;$env[timeouts]]
        ]
        $try[$eval[$get[code];false]]
      ;$max[500;$math[$get[endTime] - $getTimestamp]];$get[id]]
    ;i;true]
  `
}
