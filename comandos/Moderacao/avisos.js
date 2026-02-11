module.exports = [{
	name: "avisos",
	aliases: ["warnlist", "warn list", "avisos lista"],
	desc: "Veja a lista de advertências de um usuário",
	category: "Moderação",
	usage: "avisos @user",
	code: `
$title[Prontuário de $username[$get[userID]]]
$description[$exec[
if [ -d "Recursos/avisos/$get[userID]/" ]; then
  cd Recursos/avisos/$get[userID]/ && for f in aviso_*.txt; do
    STAFF=\$(cat \$f | sed 's/.*staffID": "//;s/".*//')
    MOTIVO=\$(cat \$f | sed 's/.*motivo": "//;s/".*//')
    echo "**\${f%.txt}**"
    echo "🛡️ **Staff:** <@\$STAFF>"
    echo "📝 **Motivo:** \$MOTIVO"
    echo "────────────────"
  done
else
  echo "Este usuário ainda não possui avisos no sistema."
fi
]]
$color[#6F03FC]
$footer[Total de avisos: $getUserVar[warnsTotal;$get[userID];$guildID]]

$onlyIf[$findUser[$message[1];false]!=;Mencione um usuário válido ou forneça o ID.]
$let[userID;$findUser[$message[1];false]]
`
}]
