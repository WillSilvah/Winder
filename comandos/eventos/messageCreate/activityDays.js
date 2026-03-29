module.exports = [{
    type: "messageCreate",
    code: `$timezone[America/Recife] $c[Fuso horário de Pernambuco, padrão em todo o sistema] 
    $onlyIf[$getMemberVar[talkingLastDay;$authorID;$guildID]!=$day[TwoDigit]/$month[TwoDigit]]
    $onlyIf[$getMemberVar[messageToday;$authorID;$guildID;0]>=50]
    
    $setMemberVar[talkingLastDay;$day[TwoDigit]/$month[TwoDigit]]
    $let[talkingMonth;$getMemberVar[talkingMonth;$authorID;$guildID;0]]
    $letSum[talkingMonth;1]
    
    $setMemberVar[talkingMonth;$get[talkingMonth];$authorID;$guildID]
    
    $let[talkingTotal;$getMemberVar[talkingTotal;$authorID;$guildID;0]]
    $letSum[talkingTotal;1]
    
    $setMemberVar[talkingTotal;$get[talkingTotal];$authorID;$guildID]
`
}]