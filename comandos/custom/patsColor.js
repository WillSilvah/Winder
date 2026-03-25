module.exports = [{
    name: "guildColor",
    params: [
    {
      name: 'color',
      description: "cor",
      required: true
    }
   ],
   code: `
   $jsonLoad[cor;{
  "colorScheme": ["dark", "light"],
  "defaultColor": "cyan",
  "wednesdayColors": "pink",
  "sundayColors": "orange",
  "colorType": "Dynamic",
  "blue": {
	"opacity": "100",
    "dark": "#111127",
    "light": "#ADADE6"
  },
  "pink": {
	"opacity": "100",
    "dark": "#271127",
    "light": "#E6ADE6"
  },
  "cyan": {
	"opacity": "100",
    "dark": "#111E27",
    "light": "#ADDCE6"
  },
  "green": {
	"opacity": "100",
    "dark": "#112711",
    "light": "#ADE6AD"
  },
  "red": {
	"opacity": "100",
    "dark": "#271111",
    "light": "#E6ADAD"
  },
  "orange": {
	"opacity": "100",
    "dark": "#271C11",
    "light": "#E6CAAD"
  }
 }]
 
    $return[$env[cor;$env[color];light]]
`
}]