module.exports = {
  code: `
  $let[user1;$option[user1]]
$let[user2;$findUser[$option[user2];true]]

$if[$getGlobalVar[ship_$get[user1]_$get[user2]]==;
$let[love1;$randomNumber[1;50]]
$let[love2;$randomNumber[1;50]]
$let[shipCalc;$math[$get[love1]+$get[love2]]]
$setGlobalVar[ship_$get[user1]_$get[user2];$get[shipCalc]]
]

$interactionReply[$addContainer[
$addTextDisplay[### $userDisplayName[$get[user1]] é $getGlobalVar[ship_$get[user1]_$get[user2]]% atraído pelo $userDisplayName[$get[user2]]]
$addMediaGallery[
$addMediaItem[$userAvatar[$get[user1]]]
$addMediaItem[$userAvatar[$get[user2]]]
];Red]]

$let[varShip;ship_$get[user1]_$get[user2]]


$advancedTimeout[$deleteRecords[{0}];24h;DELETE-ship_$get[user1]_$get[user2];$get[varShip]]`,
data: {
  "type": 1,
  "name": "ship",
  "description": "Shipe dois usuários e vejam se dão certo ou não.",
  "options": [
    {
      "type": 6,
      "name": "user1",
      "required": true,
      "description": "Membro 1"
    },
    {
      "type": 6,
      "name": "user2",
      "description": "Membro 2"
    }
  ]
},
}
