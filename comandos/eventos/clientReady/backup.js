module.exports = [{
    type: "clientReady",
    code: `
$sendMessage[788131713418002463;
$attachment[database/forge.db;WinderDB_$day[TwoDigit]-$month[TwoDigit]_$hour[TwoDigit]$minute[TwoDigit].db]
]
$setInterval[
$timezone[America/Recife]
$sendMessage[788131713418002463;
WinderDB_$day[TwoDigit]-$month[TwoDigit]_$hour[TwoDigit]$minute[TwoDigit]
$attachment[database/forge.db;forge.db]
]
;1h;backupDatabase]  
    
    
`}]