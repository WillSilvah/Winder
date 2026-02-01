module.exports = [{
name: "memberReplyStaff",
type: "memberUpdate",
channel: "$getGuildVar[consoleChat]",
code: `
$removeRole[1462224054676099094;$authorID;1321962965003407503]
$wait[10s]

$sendDM[{newEmbed:
{author:Recebemos seu formulário!}
{description:
Espero que você tenha respondido direitinho o formulário ok? Após a Equipe Patinhas analisar seu formulário, eu irei enviar uma mensagem para você informando sua aprovação ou reprovação.
}
{footer:Possivelmente, não vamos demorar mais que 24 horas para responder o seu formulário.}
{color:Orange}
};$authorID]

$onlyIf[$newMember[addedRoles]==$roleName[1321962965003407503];]
`
}]