module.exports = [{
    name: "linuxRam",
   code: `$exec[pm2 jlist | jq '.[] | select(.name == "winder-canary") | .monit.memory / 1024 / 1024 | floor']`
}]