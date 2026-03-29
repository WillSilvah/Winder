module.exports = [{
    type: "messageCreate",
    code: `$timezone[America/Recife] $c[Fuso horário de Pernambuco, padrão em todo o sistema] 
    $onlyIf[$getMemberVar[activityLastDay;$authorID;$guildID]!=$day[TwoDigit]/$month[TwoDigit]]
    $onlyIf[$getMemberVar[messageToday;$authorID;$guildID;0]>=50]
    
    $setMemberVar[activityLastDay;$day[TwoDigit]/$month[TwoDigit]]
    $let[activityMonth;$getMemberVar[activityMonth;$authorID;$guildID;0]]
    $letSum[activityMonth;1]
    
    $setMemberVar[activityMonth;$get[activityMonth];$authorID;$guildID]
    
    $let[activityTotal;$getMemberVar[activityTotal;$authorID;$guildID;0]]
    $letSum[activityTotal;1]
    
    $setMemberVar[activityTotal;$get[activityTotal];$authorID;$guildID]
`
}]