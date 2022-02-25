bot.command({
    name: "reminder", 
    code: `Ich errinere dich an $messageSlice[1] nach $message[1].
$setTimeout[remind;$message[1];
userID: $authorID,
message: $messageSlice[1]] `
})

bot.timeoutCommand({
name:"remind",
code: `<@!$timeoutData[userID]> reminder for $timeoutData[message]`
})
