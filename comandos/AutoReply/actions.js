module.exports = [{
name: "$alwaysExecute",
code: `
$ifAwaited[$stringEndsWith[$message;{delete}]==true;{execute:action-deletemsg}]

$ifAwaited[$stringEndsWith[$message;{d}]==true;{execute:action-deletemsg}]

`
},{
name: "action-deletemsg",
type: "awaited",
code: `
$deleteCommand $editMessage[$get[ID];{newEmbed:
{author:$userTag mensagem deletada.:$userAvatar}
{color:$dyColor[orange;light]}
}
]

$wait[5s]

$let[ID;$sendMessage[{newEmbed:
{author:$userTag enviou uma mensagem temporária!:$userAvatar}
{color:#16de31}
};true]]

$suppressErrors
`
}]
