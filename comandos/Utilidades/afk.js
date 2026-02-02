module.exports = [{
name: "afk",
desc: "Vai ficar fora do Discord? Use esse comando e permita-me avisar a outras pessoas que você não pode responder no momento!",
category: "Utilidades",
usage: "afk motivo?",
code: `
$log[$scWriteFile[Recursos/afkSystem/$authorID/status.txt;true]]
$log[$scWriteFile[Recursos/afkSystem/$authorID/reason.txt;$if[$message!=;$message;Acredita que eu também queria saber?]]]
$wait[5s]

$sendMessage[<@$authorID> AFK ativado!]

`
}]
