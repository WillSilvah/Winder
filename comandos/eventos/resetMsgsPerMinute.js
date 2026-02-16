module.exports = {
 type: 'clientReady',
 code: `
  $setInterval[
   $deleteRecords[msgPerMinute;;guild]
  ;1m]
 `
