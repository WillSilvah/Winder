module.exports = [{
name: "w!winder backup",
aliases: ["w!backup", "w-winder backup", "w-backup"],
nonPrefixed: "true",
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
},{
    name: "winder restart",
    desc: "reinicie o winder",
    category: "Desenvolvedor",
    usage: "winder restart",
    code: `
    $editMessage[$get[msgId];<@$authorID> ✅ **$message[1] reiniciado!**]

$log[$exec[pm2 restart $message[1]]]

$let[msgId;$sendMessage[<@$authorID> ⏳ **Reiniciando o $message[1]...**;true]]

$onlyIf[$hasRoles[1462224054676099094;$authorID;1462547405466636384]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]`
}]