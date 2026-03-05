module.exports = [{
    type: "clientReady",
    code: `
$setInterval[
$timezone[America/Recife]
$sendChannel[788131713418002463;
$attachment[database/forge.db;WinderDB_$day[TwoDigit]-$month[TwoDigit]_$hour[TwoDigit]$minute[TwoDigit].db]
]
;3h;backupDatabase]  
    
    
`}]