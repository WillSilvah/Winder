module.exports = [{
    name: "update-bemvindo",
    type: 'messageCreate',
    code: `
    $onlyIf[$hasPerms[$guildID;$authorID;ManageGuild]==true;]
    $deleteCommand
    $sendMessage[$channelID;
     $addContainer[
      $addSection[
       $addTextDisplay[# COMUNIDADE PATINHAS\n**Nossa toca, sua casa!**]
       $addThumbnail[$guildIcon]
      ]
      $addSeparator[Small;true]
      $addTextDisplay[Seja bem vindo a Patinhas, uma comunidade para furries e não furries poderem se interagir, se divertir e fofocar bastante sobre a vida e qualquer coisa que vier.]
      $addTextDisplay[Aqui na]
     ;$guildColor[red]]
    ]

`
}]