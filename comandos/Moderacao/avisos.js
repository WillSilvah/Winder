module.exports = [{
	name: "avisos",
	aliases: ["warnlist", "warn list", "avisos lista"],
	desc: "Veja a lista de advertências de um usuário",
	category: "Moderação",
	usage: "avisos @user",
	code: `
$title[1;Advertências de $username[$get[userID]]]
$description[1;$exec[
if [ -d "Recursos/avisos/$guildID/$get[userID]/" ]; then
  cd Recursos/avisos/$guildID/$get[userID]/ && for f in aviso_*.txt; do
    NUM=\$(echo \$f | sed 's/aviso_//;s/.txt//')
    STAFF=\$(cat \$f | sed 's/.*staffID": "//;s/".*//')
    MOTIVO=\$(cat \$f | sed 's/.*motivo": "//;s/".*//')
    
    echo "**\$NUM° aviso**"
    echo "🛡️ **Staff:** <@\$STAFF>"
    echo "📝 **Motivo:** \$MOTIVO"
    echo "-----------------------"
  done
else
  echo "Este usuário ainda não possui avisos no sistema."
fi
]]
$color[1;Orange]
$footer[Total de avisos: $getUserVar[warnsTotal;$get[userID];$guildID]]

$let[userID;$findUser[$message[1];true]]
`
}]
