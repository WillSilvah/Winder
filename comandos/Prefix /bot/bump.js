module.exports = [{
name: "!d bump",
nonPrefixied: true,
code: `
$setTimeout[bump;$get[sc]s;{
"cid":"861337787192836117",
"prize":"10s",
}],
Codigo de quando usar !d bump`
},{
 name: "bump",
 type: "timeout",
 code: `
$setTimeout[bump;$get[sc]s;{
"cid":"861337787192836117",
"prize":"10s",
}],
$channelSendMessage[861337787192836117;Codigo de quando acabar o tempo, o bot enviar message]`
}]
