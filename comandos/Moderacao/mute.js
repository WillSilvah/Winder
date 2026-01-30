module.exports = [{
name: "silenciar",
aliases: ['mute','m'],
desc: "Silencie um usuário.",
category: "Moderação",
usage: "silenciar @user/userID tempo motivo?",
code: `
$sendMessage[<@$authorID> **$username[$get[userID]]** foi **$get[puniType]**!]
$ifAwaited[1==1;{execute:punishment-log}]
$ifAwaited[$isUserDMEnabled[$get[userID]]==true;{execute:puni-dm}]
$timeoutMember[$guildID;$get[userID];$get[time];false;Silenciado por: $userTag[$get[staffID]] | Motivo: $get[reason]]

$onlyPerms[kickmembers;<@$authorID> {newEmbed: {author:Você não tem as permissões necessárias} {description:Por segurança, você precisa ter as permissões de **expulsar membros**.}  {footer:Que tal você entrar para a staff? $getGuildVar[prefixo]serstaff} {color:#32a852}}]
$onlyIf[$findUser[$message[1]]!=$authorID;<@$authorID> | Você está se automencionando, por favor, **@mencione/ID** o usuário]
$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]

$let[staffID;$authorID]
$let[userID;$findUser[$message[1]]]
$let[reason;$if[$messageSlice[2]==;Sei lá qual foi o motivo, só sei que recebeu!;$messageSlice[1l2]]]
$let[time;$message[2]]
$let[puniType;silenciado]

$clientTyping
`
}]