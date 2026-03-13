module.exports = [{
    name: "cargos",
    type: "clientReady",
    code: `$stop
    $deleteMessage[1470875996356874292;$getGlobalVar[inicial_messageID]]
    
    $let[msgID;$sendMessage[1470875996356874292;
    $disableAllMentions
    
    $addContainer[
    $addSection[
    $addTextDisplay[## NOTIFICAÇÕES!]
    $addTextDisplay[⭐ 🎉 🎮 🔕]
    $addTextDisplay[O que você quer receber na Patinhas?]
    $addThumbnail[https://abs.twimg.com/emoji/v2/72x72/1f514.png]
    ]
    ;Red]]]


    $setGlobalVar[inicial_messageID;$get[msgID]]
`
}]