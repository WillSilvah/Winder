modules.exports = [{
name: "reminder", 
type: "timeout",
code: `Ich errinere dich an $messageSlice[1] nach $message[1].
$setTimeout[remind;$message[1];
userID: $authorID,
message: $messageSlice[1]] `
},{
name: "remind",
type: "timeout",
code: `<@!$timeoutData[userID]> reminder for $timeoutData[message]`
}]
