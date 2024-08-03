//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "2348086541281";
global.owner = process.env.OWNER_NUMBER || "2348086541281";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://toxic-session-id.onrender.com/pair";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUxNN2t4Q013VmNPUUhaWlJmWXRBRGhidlZVRmwwVjhScDlKdVBDWk0xST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFlRTDlJbm9tU1dNYWlZdzJWSzFEb2lhK2x6Z2JCbXkyTG9BK25aZWR4ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZT2hpSGtrVHJUM2lXT3ZDQ3NlaWxUVXBCVnZBR005UmM3VUw4YVYrTDFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNLzRCNytadDN2OTRHTUFFYndhOVZLZWorQ0psM01rUHQ4eVdEQTdjSmhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFGQ1BQd1BYVnlEME5JbzlSWERMd3VOcFY5Y0pvZ0NMdkFVR3AraitXMGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMraEMwU0FVcEhMODFTTEdyZkIwZ0NNYzVUYnNJUm4xUmdUdllHYU01V2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0xOL3pZdlJ3SmNRUEtacmRRczhFekVlNGp4b0xJUE5kemhnWHpLOW4zWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkhLR2NTNHh1L3d2UGlNV3NUZjV1Q0pkRlVwSXAvQ05TQkpzREZudlJ5TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRyNWlJVVdnK3d5ZWZxKzlzZXNXL0lHK0IxVDdOTTBlTGRQU0psc1pEM0VaOWg0YlVDRzIzeGh5VkhTOXEyS1YwRk15dUp2SkFOd0F6aTFrblhoVEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiJENFZZUUNRS2VSem43ZEtES3RkT2F3V2NOS3lxNisrODUvUDBaRmJhdzlRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzRnk4LTY0VlR2V1hBRGZRSVc0RmpnIiwicGhvbmVJZCI6ImNmOGY0Yzk1LTAxMmMtNGFiYy1iMzVkLWU4MzFlNjEyMTUwNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXMFJSOCtrM2JnNjkvdWJxbU51aVkxdDcxUjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXVHVmRIMVpwU1BnUFNlOGVnMHpRVTNoTGwwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNKNTFHWkVDIiwibWUiOnsiaWQiOiIyMzQ4MDc4ODU0MzczOjcyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPVEoyTThIRUwyYnRiVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTbkZqMlgrMjEyNy8wTFRjLzNQNU1EekZzNHdyWWtSdFBlKy82SzBoSkVnPSIsImFjY291bnRTaWduYXR1cmUiOiJJU0MwdE1idE1ZVkFSVTZ4WE10TmpNWFA4cGVjZkRuSUdxTkRycHdqQzRYU1pNaXRPMnZKVVAwSEFDakVTemkwaGJNYzJ3K1ExS3dPbERNVzdaSVlCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoianBCM0JKdjdIeFJrR2pxdkNqMmJKVkZLQ1FKY2gxcDlwTkpZazc4Zmp1RFhVeWxLWVNtUnY4a1FCMnAzbmllUUtaazFOVGNlK3hNVm9mRlBSVE9iQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDc4ODU0MzczOjcyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVweFk5bC90dGR1LzlDMDNQOXorVEE4eGJPTUsySkViVDN2ditpdElTUkkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI2MzM2NzV9|
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUxNN2t4Q013VmNPUUhaWlJmWXRBRGhidlZVRmwwVjhScDlKdVBDWk0xST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFlRTDlJbm9tU1dNYWlZdzJWSzFEb2lhK2x6Z2JCbXkyTG9BK25aZWR4ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZT2hpSGtrVHJUM2lXT3ZDQ3NlaWxUVXBCVnZBR005UmM3VUw4YVYrTDFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNLzRCNytadDN2OTRHTUFFYndhOVZLZWorQ0psM01rUHQ4eVdEQTdjSmhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFGQ1BQd1BYVnlEME5JbzlSWERMd3VOcFY5Y0pvZ0NMdkFVR3AraitXMGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMraEMwU0FVcEhMODFTTEdyZkIwZ0NNYzVUYnNJUm4xUmdUdllHYU01V2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0xOL3pZdlJ3SmNRUEtacmRRczhFekVlNGp4b0xJUE5kemhnWHpLOW4zWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkhLR2NTNHh1L3d2UGlNV3NUZjV1Q0pkRlVwSXAvQ05TQkpzREZudlJ5TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRyNWlJVVdnK3d5ZWZxKzlzZXNXL0lHK0IxVDdOTTBlTGRQU0psc1pEM0VaOWg0YlVDRzIzeGh5VkhTOXEyS1YwRk15dUp2SkFOd0F6aTFrblhoVEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiJENFZZUUNRS2VSem43ZEtES3RkT2F3V2NOS3lxNisrODUvUDBaRmJhdzlRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzRnk4LTY0VlR2V1hBRGZRSVc0RmpnIiwicGhvbmVJZCI6ImNmOGY0Yzk1LTAxMmMtNGFiYy1iMzVkLWU4MzFlNjEyMTUwNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXMFJSOCtrM2JnNjkvdWJxbU51aVkxdDcxUjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXVHVmRIMVpwU1BnUFNlOGVnMHpRVTNoTGwwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNKNTFHWkVDIiwibWUiOnsiaWQiOiIyMzQ4MDc4ODU0MzczOjcyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPVEoyTThIRUwyYnRiVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTbkZqMlgrMjEyNy8wTFRjLzNQNU1EekZzNHdyWWtSdFBlKy82SzBoSkVnPSIsImFjY291bnRTaWduYXR1cmUiOiJJU0MwdE1idE1ZVkFSVTZ4WE10TmpNWFA4cGVjZkRuSUdxTkRycHdqQzRYU1pNaXRPMnZKVVAwSEFDakVTemkwaGJNYzJ3K1ExS3dPbERNVzdaSVlCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoianBCM0JKdjdIeFJrR2pxdkNqMmJKVkZLQ1FKY2gxcDlwTkpZazc4Zmp1RFhVeWxLWVNtUnY4a1FCMnAzbmllUUtaazFOVGNlK3hNVm9mRlBSVE9iQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDc4ODU0MzczOjcyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVweFk5bC90dGR1LzlDMDNQOXorVEE4eGJPTUsySkViVDN2ditpdElTUkkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI2MzM2NzV9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
