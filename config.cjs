// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0dPWCtIMW5BRmVqV2RjbW9IVU00aGhRY1lGelpZbm0vQm5rRHhNS2VFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQk55OXZvS1V1eW1wU1lETFZWMEVmQ2RrcjAyVHRBa2FEbmgydFpxSExoQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSStxUlVBOW1yb3ZqQ082OVQ5R05MNlRpRnRvaWxVOFNZdTZMcUZ0Qm5rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtUDRxR2dPK2c0elM4MThZbHkwdVJJVWZvWWZtd3JvUkdNMHA0Zk94eUY0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZDRG9jK1RFejRVQ3FlZ3lKTGV5TnJZenJWcHJrYml6NUJuejhWRmFEV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkN4NlR1a0lMR1I0dGxYUW5hQ1g4Vm9YOGlpbzR1OHpFcHF4OTN5bjBoZ2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaURJa2JBZHF4RU5RbmxMbTlxajlaTk5oV085WXoyNXdPVDRQQk44WjYzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianpIa29CdW9DV3MwajdMR1JXVlNmTXJHMU9GMkhOUk9BUEg0RmhPSmVUOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJhQTBsM1JwRmw5VllpUVRodndOOHhpU2UrdWFHODJKeTJaQzFUMFB1Qm9nTXYwZjFWZi9jODVDaEdvSHNjeTJpV2U3YkQyUVZ5RUorZy9Na09DbUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDQsImFkdlNlY3JldEtleSI6InZaWVFMd3J5TFhsQXdtQ3F1THoveTdCdm9DRms2ckdNUDYyaDBYK2xRUFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZyZ0F3ZXhTUUxDT1M0RlpjWXM0SGciLCJwaG9uZUlkIjoiZTI2NjU0MDItYmIzYy00ZjQ3LWE4YWMtMGE2MTk0YTI1ZjE4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik8zV1VpaVBSWml1VzA0bXRjMlZxTnFqNW9vND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwTWtOWVdtYjFaRGFVMHk2bldDcFVBK0twaEE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTEJNTDZEN1MiLCJtZSI6eyJpZCI6IjI2Mzc4NDU2MjgzMzo0M0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0dqMTBnUTRZYll0d1lZQmlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoicm5EMDRLSzlmZFJrZ1dUaVRLZzhpbDd0U0RJWkU1Ni95cEl3cG44aHNoMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWlRtSlF3dW5SK1NOYkpXZk9HUEpkemlXS21hRUlNSmFSQVBzMmtrNFRCTHozMi9ZaFE0czcycmF3TW51NVNFMU9JNDA3dnhYSGFZOGFBV3AxNnFjRFE9PSIsImRldmljZVNpZ25hdHVyZSI6ImF3MHJ1TUhEcFhERGsycnJRcEVieW1uL2VoME0wODlhUytPVUtaQzNvd2ErQXp5YS9iRnNSc216QTBGL3VKRDQyU1BqTjYvTlRoakFiVy85SGg1cEF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzg0NTYyODMzOjQzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmE1dzlPQ2l2WDNVWklGazRreW9QSXBlN1VneUdST2V2OHFTTUtaL0liSWQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjczOTg3Njd9",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "☞⌜𝚂𝚃𝚁𝙸𝙺𝙴𝚁𝙱𝙾𝚈⌝☜",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "237659535227",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
