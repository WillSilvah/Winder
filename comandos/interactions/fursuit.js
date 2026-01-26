module.exports = [{
name: "fursuit",
type: "interaction",
prototype: "slash",
code: `
$interactionFollowUp[
{attachment:winder-fursuiter.png:$getObjectProperty[api1;url]}

$createObject[api1;$getObjectProperty[api;images[0]]]

$createObject[api;$exec[curl -X GET -H 'user-agent: nsei -v ' https://v2.yiff.rest/furry/fursuit]
$reply
$interactionDefer[false]
  `
}]