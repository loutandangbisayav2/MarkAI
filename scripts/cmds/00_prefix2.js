module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Tokodori_Frtiz",//remodified by Kyle
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `
█░ █▀█ █░█ █▀█ █ █▀▀ █░ █▀
█▄ █▄█ █▄█ █▀▄ █ ██▄ █▄ ▄█

█▄▄ █▀█ ▀█▀
█▄█ █▄█ ░█░

━━━━━━━━━━━━━━━

Hello! It look's like you're not familiar with my prefix!, here's a guide, use this :➡

🌐 SYSTEM PREFIX:➡ 【 ! 】
📩 BOX CHAT PREFIX:➡【 ! 】

📜 𝗛𝗢𝗪 𝗧𝗢 𝗨𝗦𝗘
Ai ʜᴏᴡ ᴛᴏ ᴍᴀᴋᴇ ᴄᴀᴋᴇ
ask ᴡʜᴀᴛ ᴜs ᴄᴀᴘɪᴛᴀʟ ᴏғ ғʀᴀɴᴄ

⚙ 𝗠𝗢𝗥𝗘 𝗢𝗣𝗧𝗜𝗢𝗡𝗦
➖ ✅ [ !quiz ]
➖ 🎰 [ !slot ]
➖ 🎯 [ !spin ]
➖ 🏦 [ !bank ]
➖ 📝 [ !bal ]
➖ 💰 [ !daily ]
➖ 💵 [ !pay ]
➖ 📃 [ !help ]
𝙁𝘽𝙇𝙄𝙉𝙆➤ https://www.facebook.com/profile.php?id=100065875311382
\n𝙊𝙬𝙣𝙚𝙧 ➢ 𝗟𝗼𝘂𝘁𝗮𝗻𝗱𝗮𝗻𝗴𝗯𝗶𝗻𝗮𝘁𝗮`,
 attachment: await global.utils.getStreamFromURL("https://imgur.com/Hl16hxI.mp4")
 });
 }
 }
}￼Enter
