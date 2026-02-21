module.exports == [{
    name: "logo",
    params: [
    {
      name: 'tema',
      description: "Tema da logo: light/dark",
      required: true
    }
    {
      name: 'cor',
      description: "A cor",
      required: true
    }
   ],
   code: `
$jsonLoad[design;$readFile[Recursos/Design/logo.json]]
$env[design;$env[tema];$env[cor]]
`
}]