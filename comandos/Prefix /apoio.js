module.exports = {
 name: "$alwaysExecute",
 code: `
$reply
  $author[1;Ajude a combater a LGBTfobia!]
  $description[1;LGBTfobia é crime há mais de 2 anos, mas muita coisa tem que mudar pra isso sair do papel.
Para começar, vamos pedir para todos os estados resolverem esse B.O. e adicionarem a LGBTfobia aos boletins de ocorrência como motivo de um crime.
Apoie essa causa, assine essa petição:
https://a.allout.org/s/P8XA5/]
  $image[1;https://media.discordapp.net/attachments/781665851040333844/943867693377933312/IMG_20220217_105214.png]
  $onlyIf[$random[1;150]==1;]
  $cooldown[1m;]
  
  
`
} 
