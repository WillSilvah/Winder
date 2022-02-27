module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `$reply
$if[$randomText[no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;yes;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no]==yes]
$setUserVar[cataventos;$sum[$getUserVar[cataventos];1]]
$addCmdReactions[<:pinw_branco:945614522385825862>]
$cooldown[5s;]
$endIf
`
}
