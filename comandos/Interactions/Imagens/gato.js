module.exports = [{
name: "gato",
type: "interaction",
prototype: "slash",
code: `
$interactionFollowUp[
{attachment:winder-gato.png:$getObjectProperty[gato;image]}

$createObject[gato;$getObjectProperty[api;images[0]]]

$createObject[api;$exec[curl -X GET -H 'user-agent: nsei -v ' https://api.animality.xyz/all/cat]
$reply
$interactionDefer[false]
  `
}]