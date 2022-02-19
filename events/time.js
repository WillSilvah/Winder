module.exports = (bot) => {
  bot.timeoutCommand({
    code: `$sendDM[$timeoutData[mentioned ];$timeoutData[message]]`
})
}