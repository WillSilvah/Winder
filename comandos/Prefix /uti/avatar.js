
module.exports = {
 name: "avatar",
 code: `
  $reply
  $title[1;📷 Avatar de \`$userTag[$get[id]]\`]
$image[1;$userAvatar[$get[id]]
$color[1;RANDOM]
$addButton[1;Download;link;$nonEscape[$userAvatar[$get[id]]];no;📷]
$let[id;$mentioned[1;yes]]
`
} 
