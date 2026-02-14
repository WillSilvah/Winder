module.exports = [{
name: "winder backup",
aliases: ['backup'],
desc: "Crie um backup",
category: "Desenvolvedor",
usage: "winder backup",
code: `
$editMessage[$get[msgId];<@$authorID> ✅ **Backup realizado!**]

$log[$exec[cd && bash services/backup/backup_db.sh]]

$let[msgId;$sendMessage[<@$authorID> 📦 **Iniciando backup manual...**;true]]

$onlyIf[$hasRoles[1462224054676099094;$authorID;1462547405466636384]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]
$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
{error}]

`
}]
