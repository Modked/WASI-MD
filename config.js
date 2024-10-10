const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="jastinmtewa@yahoo.com"
global.location="Morogoro,Tanzania."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Pakistan";
global.github=process.env.GITHUB|| "https://github.com/wasixd/WASI-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/wasixd/WASI-MD/blob/main/lib/assets/suhail.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923192173398" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "967772350066";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923135673658,923192173398";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "967772350066";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "96772350066";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://myqr-43bb863fa5eb.herokuapp.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU1qTzlvMlhaKzU5NVhETmtlK2YzNVFrZExBanZScHkrMFp4bGY1RXpFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVVZWWJrTjRJTFVsckw5ZTU1RENicWpWV3IyTlZJWDhuZGkvMU5IQ1hFVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQ3p0TzU2LzMzOGpSTTNHUzkvaWl4Y3M0ZkpoZldlUlNldmRYeFBVeTM0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTHpDbk96Z3pEM0s0MmdqYi9LT2Z6NVhIazIrRm00Z3J5YmFTb1lMT1I0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktPbUh6SzlnUGFjYWlEYytKN1pZeHFBa0hDcGpzQjBUNHRWSDd0UktDa0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRVd2xnVE1BcUF2UGwrMnMwNisyODhic0RpM1VaTFVhSi9TeGxocm1TeEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0FYdWoybXYwTVdTekxsVFVFZVAyZXNaTUNsTkhqTWg2RVNzd01wMHpsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHJTTzgvVXJLV2dJYVlMOE1uVm1JaEtBaWQvSi9pSGozZDJCTUhSMGxRVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imd1dlk3Rm94MVlPb1dRL0UreGxEVHhLb1hNUWlGUUJKMHBHQkNJb005bjg3TCtVZjYyRWltbG0wNW1oM0dycm9ZVlBGSktGanE5NFp6cFhRTnRodENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJ5UCsxby90eXhlazIzWFkzMmhCYjB0SkJOWWxKYlQ2UTFYWklPRGgvOTQwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQSG1mOUxSelRaS0V3UDRVR0V1X2hRIiwicGhvbmVJZCI6ImMzMmViM2E0LWQwODMtNDVkZi04MGJhLTEyM2JkMDM4ZTlhMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRi9STlJzZk5lTUJxLzFFT3dPYzRuSUk1N289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHorcjl2OHUwQWpOV0pQRHhVVklhQjB2RkRBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZGS1ZXSlhNIiwibWUiOnsiaWQiOiI5Njc3NzIzNTAwNjY6NTRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lqeXBha0VFTEtrb0xnR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdwelhvY210cHFzdHc4UEdMU256ZW5WMTBwa2dzbWhKVzV2bzZqblhtbWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6Inl0R2RyWW9DZHVvNHdXQUVoc3h4UVpHVVgySFRKcFlPV04rYUR5OHpZTEJxMGh0RjNES0I3RnVqVEhGakdYTkZOcW5WYjViMmJ2MWpTeFFNUk5Sb0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSZi9pU2lzeHZDSmhGaVZpQllmUDdsS0JncUMxSkpVeUE5dklBSnorR0FRY2hBbE4vZ3R3SytXQ0FUcTJzWTJUbjFaZUJRYjlNSFU2d3FyVFhPSWlEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk2Nzc3MjM1MDA2Njo1NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJScWMxNkhKcmFhckxjUER4aTBwODNwMWRkS1pJTEpvU1Z1YjZPbzUxNXBwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4NTgyMjA3fQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Venocyber-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.0.0",
  caption : process.env.CAPTION || "𝙵𝙸𝙻𝙴 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ＷＡＳＩ ＭＤ🚩" , // ```『 ²⁴ ᴠᴇɴᴏᴄʏʙᴇʀ-ᴍᴅ 』```", //*『ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ』*\n youtube.com/@JASTINMTEWA-vn9pl"),
 
  author : process.env.PACK_AUTHER|| "𝗪𝗔𝗦𝗜 ",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "𝗪𝗔𝗦𝗜 𝗠𝗗",
  ownername:process.env.OWNER_NAME|| "It's Tanjiro",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "01",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "WASI",



};

























global.rank = "updated"
global.isMongodb = true ; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
