module.exports = ({
    type: "memberLeave",
    code: `
$deleteVar[birthday;$authorID;main]
$log[Registro de aniversário deletado: Usuário "$username" ($authorID) saiu.]
`
})
