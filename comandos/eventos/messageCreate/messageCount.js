module.exports = {
    type: "messageCreate",
    code: `
    $timezone[America/Recife] $c[Fuso horário de Pernambuco, padrão em todo o sistema]
    $onlyIf[$isBot==false] $c[Se for bot não conta]
    $onlyIf[$includes[$channelID;1478505120525324541]==false;] $c[Não lembro mas deve ser útil]
    $onlyIf[$getGuildVar[isolatedChat]!=$channelID] $c[Ignora o canal de isolados do servidor]
    
    $c[Contabiliza a quantidade de mensagens que o servidor inteiro enviou no dia, semana e mês]
    $setGuildVar[guildMonthMessages;$sum[$getGuildVar[guildMonthMessages;$guildID;0];1]]
    $setGuildVar[guildTotalMessages;$sum[$getGuildVar[guildTotalMessages;$guildID;0];1]]
    $setGuildVar[guildWeeklyMessages;$sum[$getGuildVar[guildWeeklyMessages;$guildID;0];1]]
    $setGuildVar[guildTodayMessages;$sum[$getGuildVar[guildTodayMessages;$guildID;0];1]]

    $setGuildVar[lastUserSendMessage;$authorID $c[Registra o último usuário a enviar mensagem no servidor]
    $setMemberVar[lastMessage;$message;$authorID] $c[Registra a última mensagem que o membro enviou no servidor]

    $c[Registra o canal, a data e o timestamp do último momento que o membro enviou mensagem no servidor, utilizado para automoderação e decoração no /perfil]]
    $setMemberVar[lastMessageTime;$hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit] - $day[TwoDigit]/$month[TwoDigit]/$year[TwoDigit]]
    $setMemberVar[lastMessageTimestamp;$getTimestamp]
    $setMemberVar[lastMessageChannel;$channelID]

    $c[Contabiliza a quantidade de mensagens que o membro enviou no dia, semana e mês]
    $setMemberVar[messageMonth;$sum[$getMemberVar[messageMonth;$authorID;$guildID;0];1]]
    $setMemberVar[messageWeekly;$sum[$getMemberVar[messageWeekly;$authorID;$guildID;0];1]]
    $setMemberVar[messageToday;$sum[$getMemberVar[messageToday;$authorID;$guildID;0];1]]
    $setMemberVar[messageTotal;$sum[$getMemberVar[messageTotal;$authorID;$guildID;0];1]]
`
}
