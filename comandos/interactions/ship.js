module.exports = {
  code: `
$let[love1;$randomNumber[1;50]]
$let[love2;$randomNumber[1;50]]
$let[shipCalc;$math[$get[love1]+$get[love2]]]
$let[user1;$option[user1]]
$let[user2;$findUser[$option2];true]

$setGlobalVar[ship_$get[user1]_$get[user2];$get[shipCalc]]]

$interactionReply[$addContainer[
$addSection[
$addTextDisplay[### A ATRAÇÃO DE @$userTag[$get[user1]]...]
$addThumbnail[$userAvatar[$get[user1]]]
$addSection[
$addTextDisplay[### A ATRAÇÃO DE @$userTag[$get[user2]]...]
$addThumbnail[$userAvatar[$get[user2]]]
$addTextDisplay[## = ❤️ $get[shipCalc]%]
;Red]]
  `,
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
