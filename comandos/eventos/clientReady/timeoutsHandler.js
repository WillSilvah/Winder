module.exports = {
  type: 'clientReady',
  code: `
    $jsonLoad[timeouts;$getGlobalVar[timeouts;{}]]
    $jsonLoad[keys;$jsonKeys[timeouts]]
    $loop[$arrayLength[keys];
      $let[id;$arrayAt[keys;$math[$env[i] - 1]]]
      $let[code;$env[timeouts;$get[id];code]]
      $let[endTime;$env[timeouts;$get[id];endTime]]

      $log[1### id: $get[id] | end time: $get[endTime] | ends in: $math[$get[endTime] - $getTimestamp]ms]

      $setTimeout[
        $jsonLoad[timeouts;$getGlobalVar[timeouts;{}]]
        $if[$env[timeouts;$get[id]]!=;
          $!jsonDelete[timeouts;$get[id]]
          $setGlobalVar[timeouts;$env[timeouts]]
        ]
        $try[$eval[$get[code];false]]
        $log[2### id: $get[id] | $get[endTime] - $getTimestamp = $math[$get[endTime] - $getTimestamp]]
      ;$max[500;$math[$get[endTime] - $getTimestamp]];$get[id]]
    ;i;true]
  `
}
