module.exports = [{
name: "gato",
type: "interaction",
prototype: "slash",
code: `
$interactionFollowUp[
{attachment:winder-gato.png:$getObjectProperty[gato;image]}

$createObject[gato;$exec[curl -X GET -H 'user-agent: nsei -v ' https://api.animality.xyz/all/cat]
$reply
$interactionDefer[false]
  `
}]