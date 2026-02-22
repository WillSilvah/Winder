module.exports = [{
    name: "linuxRam",
   code: `$exec[pm2 jlist | jq '.[] | select(.name == "winder-controller") | .monit.memory / 1024 / 1024 | floor']`
}]