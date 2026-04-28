module.exports = [{
    type: "messageCreate",
    code: `
    $timezone[America/Recife] $c[Fuso horário de Pernambuco, padrão em todo o sistema]
    $onlyIf[$getMemberVar[privacyMode;$authorID;$guildID;false]==false;] $c[Por enquanto não utilizado, mas permite que membros especificos possam não ser registrados, permitindo que não tenha tanto dado salvo na database no Winder]

    $c[Registra todas as mensagens do membro baseando em dia, semana e mês, sendo resetado todo dia de meia noite, domingo de meia noite e no dia 1 de todo mês de meia noite]
    $setMemberVar[messageLogToday;#$channelName ($messageID) - $hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit] - $day[TwoDigit]/$month[TwoDigit]/$year[TwoDigit]: $message$if[$messageAttachments[$channelID;$messageID]!=;\n$messageAttachments[$channelID;$messageID;\n];]\n$getMemberVar[messageLogToday]]
    $setMemberVar[messageLogWeekly;#$channelName ($messageID) - $hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit] - $day[TwoDigit]/$month[TwoDigit]/$year[TwoDigit]: $message$if[$messageAttachments[$channelID;$messageID]!=;\n$messageAttachments[$channelID;$messageID;\n];]\n$getMemberVar[messageLogWeekly]]
    $setMemberVar[messageLogMonth;#$channelName ($messageID) - $hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit] - $day[TwoDigit]/$month[TwoDigit]/$year[TwoDigit]: $message$if[$messageAttachments[$channelID;$messageID]!=;\n$messageAttachments[$channelID;$messageID;\n];]\n$getMemberVar[messageLogMonth]]
    
    $setChannelVar[messageLogToday;$messageID - $hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit] - $day[TwoDigit]/$month[TwoDigit]/$year[TwoDigit] -> $userTag ($authorID): $message$if[$messageAttachments[$channelID;$messageID]!=;\n$messageAttachments[$channelID;$messageID;\n];]\n$getChannelVar[messageLogToday]]
    $setChannelVar[messageLogWeekly;$messageID - $hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit] - $day[TwoDigit]/$month[TwoDigit] ($messageID) -> $userTag ($authorID): $message$if[$messageAttachments[$channelID;$messageID]!=;\n$messageAttachments[$channelID;$messageID;\n];]\n$getChannelVar[messageLogWeekly]]
    $setChannelVar[messageLogMonth;$messageID - $hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit] - $day[TwoDigit]/$month[TwoDigit] -> $userTag ($authorID): $message$if[$messageAttachments[$channelID;$messageID]!=;\n$messageAttachments[$channelID;$messageID;\n];]\n$getChannelVar[messageLogMonth]]
`
}]

