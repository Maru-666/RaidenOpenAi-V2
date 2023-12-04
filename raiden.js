/* ======================================
╭──✦
├── Script  : @autoresbot
├── Versi   : 1.0.1
├── Website : autoresbot.com
╰────────────────────✦*/


/* ===================「 ᴄᴜꜱᴛᴏᴍɪᴢᴇᴅ 」─=================== */
const apikey_autoresbot = 'YOUR APIKEY';// ambil di autoresbot.com


/* ===================「 ᴄᴜꜱᴛᴏᴍɪᴢᴇᴅ 」─=================== */





/* ===================「 *ᴅᴏɴᴛ ᴇᴅɪᴛ* 」─=================== */
require('./ac')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { apikey } = require('./apikey.json')
const { color, bgcolor } = require('./lib/color')
const { ssweb } = require('./lib/ssweb')
const { quote } = require('./lib/quote')
const { uptotelegra } = require('./lib/upload')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const hxz = require('hxz-api')
const jsobfus = require('javascript-obfuscator')
const cheerio = require('cheerio')
const ytdl = require("ytdl-core")
const { exec, spawn, execSync } = require("child_process")
const { mediafireDl } = require('./database/mediafire.js')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/addlist');
global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})
}
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));
const yts = require('./scrape/yt-search')
const { ytSearch } = require('./scrape/yt')
const thumbnail = fs.readFileSync ('./databot/image/thumb.jpg')
const thumb = fs.readFileSync ('./databot/image/thumb.jpg')
const kalimage = fs.readFileSync ('./databot/image/thumb.jpg')
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const owner = JSON.parse(fs.readFileSync('./premium.json'))
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const chatbot = JSON.parse(fs.readFileSync("./lib/chatbot.json"))
const antidel = JSON.parse(fs.readFileSync("./lib/antidel.json"))
const banned = JSON.parse(fs.readFileSync('./databot/db/banned.json'))
module.exports = autoresbot = async (autoresbot, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const sleep_tebak = 60000;

const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const full_args = body.replace(command, '').slice(1).trim()
const spychat = body.replace().slice().trim()
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const botNumber = await autoresbot.decodeJid(autoresbot.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await autoresbot.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const ChatBot = m.isGroup ? chatbot.includes(from) : false 
const autodelete = from && isCmd ? antidel.includes(from) : false 
const isBan = banned.includes(m.sender)
const isUser = pengguna.includes(m.sender)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const bii = JSON.parse(fs.readFileSync('./databot/db/anjay.json').toString())
const isSeler = [botNumber, ...bii].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const qtod = m.quoted? "true":"false"
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
/* ===================「 *ᴅᴏɴᴛ ᴇᴅɪᴛ* 」─=================== */




/* ===================「 ᴄᴜꜱᴛᴏᴍɪᴢᴇᴅ 」─=================== */
if(time2 < "23:59:00"){
    var ucapanWaktu = 'Selamat Malam 🏙️'
    var audio_file = 'malam.mp3'
}
if(time2 < "19:00:00"){
    var ucapanWaktu = 'Selamat Petang 🌆'
    var audio_file = 'petang.mp3'
}
if(time2 < "18:00:00"){
    var audio_file = 'sore.mp3'
    var ucapanWaktu = 'Selamat Sore 🌇'
}
if(time2 < "15:00:00"){
    var audio_file = 'siang.mp3'
    var ucapanWaktu = 'Selamat Siang 🌤️'
}
if(time2 < "10:00:00"){
    var audio_file = 'pagi.mp3'
    var ucapanWaktu = 'Selamat Pagi 🌄'
}
if(time2 < "05:00:00"){
    var audio_file = 'subuh.mp3'
    var ucapanWaktu = 'Selamat Subuh 🌆'
}
if(time2 < "03:00:00"){
    var audio_file = 'tmalam.mp3'
    var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}
try {
    pplu = await autoresbot.profilePictureUrl(anu.id, 'image')
} catch {
    pplu = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
const resbot = {
key: {
    participant: `0@s.whatsapp.net`,
    ...(m.chat ? {
        remoteJid: `status@broadcast`
    } : {})
},
message: {
    "contactMessage": {
        'displayName': `${pushname}`,
        'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Koi,;;;\nFN: Autoresbot\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
        'jpegThumbnail': pplu,
        thumbnail: pplu,
        sendEphemeral: true
    }   
}
}
const resbot2 = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "extendedTextMessage": {
            "text": ucapanWaktu,
            "title": ``,
            "thumbnailUrl": pplu
        }
    }
}
const reply = (teks) => {
autoresbot.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `DON'T SPAM !!!`,"body": `👋🏻 Hai kak ${pushname}`, "previewType": "PHOTO","thumbnail": thumb,"sourceUrl": `https://autoresbot.com`}}}, { quoted: resbot })}
// const onlygc = () => {
// autoresbot.sendMessage(m.chat, {
//     text: `👋🏻 Hai kak ${pushname}\n\nUntuk Menggunakan Bot Silakan Bergabung kedalam grub terlebih dahulu ya\n\nMau File Scriptnya ? ketik ${prefix}sc di grub bot\n\n╭────「 *SHOW MENU* 」──✦\n│✦ ketik .menu`,
//     contextInfo: {
//       externalAdReply: {
//         showAdAttribution: true, 
//         title: `${ucapanWaktu}`,
//         body: "Autoresbot",
//         thumbnailUrl: "https://telegra.ph/file/67401005e40e1add37c05.jpg",
//         sourceUrl: grup,
//         mediaType: 1,
//         renderLargerThumbnail: true
//       }
//     }
//    })
//    autoresbot.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/private.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: resbot })
//    }
/* ===================「 ᴄᴜꜱᴛᴏᴍɪᴢᴇᴅ 」─=================== */





try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('wlcm' in chats)) chats.wlcm = true
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antilinkyt' in chats)) chats.antilinkyt = false
                if (!('antilinktt' in chats)) chats.antilinktt = false
                if (!('antivirtex' in chats)) chats.antivirtex = true
                if (!('antipanel' in chats)) chats.antipanel = false
                if (!('antilinkv2' in chats)) chats.antilinkv2 = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                wlcm: true,
                antilink: false,
                antilinkyt: false,
                antilinktt: false,
                antivirtex: true,
                antipanel: false,
                antilinkv2: false
            }
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = false
                if (!('autoread' in setting)) setting.autoread = false
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                autoread: false
            }

        } catch (err) {
            console.error(err)
        }

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

if (m.sender.startsWith('212')) return autoresbot.updateBlockStatus(m.sender, 'block')

if (m.message) {
autoresbot.readMessages([m.key])
}

// if (command) {
// if (!isCreator && !m.isGroup) return onlygc()
// /*autoresbot.sendMessage('62895328005151' + "@s.whatsapp.net", { text: `▧ 「 *S P Y - C O M M A N D* 」\n│✦   *From*: ${m.sender.split("@")[0]}\n│✦   *Chat*: ${spychat}\n╰─────────────────✦` }, { quoted: resbot });*/
// }

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await autoresbot.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await autoresbot.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

async function loading () {
var loadingrsbot = [
"_Hallo My Name Is Autoresbot_",
"_🕊️ Thank You For Waiting..._",
]
let { key } = await autoresbot.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'},  { quoted: resbot })

for (let i = 0; i < loadingrsbot.length; i++) {
await sleep(100)
await autoresbot.sendMessage(from, {text: loadingrsbot[i], edit: key }, { quoted: resbot });
}
}


if (autodelete) {
autoresbot.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: mek.key.id,
participant: mek.key.participant
}
})
}

if (!autoresbot.public) {
if (!m.key.fromMe && !isOwner) return
}

const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]
if (m.message) {
autoresbot.sendPresenceUpdate(from)
console.log(chalk.yellow.bgCyan.bold(botname), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}

if (isCmd && !isUser) {
pengguna.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pengguna, null, 2))
}

// ANTI KASAR

// for (var i = 0; i < listKasar.length; i++) {
//     var tyx = listKasar[i].toLowerCase(); 
//   if (budy.toLowerCase().includes(tyx)){

//     //return reply(`Jangan Ngomoong Kasar Ya`)
//     autoresbot.sendMessage(m.chat, { delete: m.key })
//     break;
//   }
// }



let list = []
for (let i of owner) {
list.push({
displayName: await autoresbot.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await autoresbot.getName(i + '@s.whatsapp.net')}\n
FN:${await autoresbot.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:autoresbot@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://autoresbot.com\n
item3.X-ABLabel:Grup WangSaff\n
item4.ADR:;;Japan;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}



switch(command) {


/* ===================「 ᴄᴜꜱᴛᴏᴍɪᴢᴇᴅ 」─=================== */

case "ai": {
    if (!m.isGroup) return reply(mess.group)

    if (!q) return reply(`Masukkan Query Contoh ${prefix + command} siapa presiden indonesia`)

    let getImage = await fetchJson(`https://autoresbot.com/api/chatgpt/gpt3?text=${q}&apikey=${apikey_autoresbot}`)
    try{
        await reply(`${getImage.result.message}`)
    } catch (err){
        reply(util.format(err))
    }  
}
break


case "image": {

    if (!m.isGroup) return reply(mess.group)

    if (!q) return reply(`Masukkan Query Contoh ${prefix + command} cats and dogs`)

    let getImage = await fetchJson(`https://autoresbot.com/api/image_creator/aiimage2?text=${q}&apikey=${apikey_autoresbot}`);

    
   
     try{
        reply(mess.wait)
        //await autoresbot.sendMessage(m.chat, {image: getImage.result}, {quoted: resbot})
        await autoresbot.sendMessage(m.chat, { caption: "Ini Kak Hasilnya", image: { url: getImage.result }}, { quoted: resbot })


    } catch (err){
        reply(getImage.result.message)
    }  


}
break




default:




if (budy.startsWith('=>')) {
if (!isCreator) return reply('*Khusus Premium*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return reply('*Khusus Premium*')
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return reply('*Khusus Premium*')
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
autoresbot.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
console.log(util.format(err))
let e = String(err)
autoresbot.sendMessage('447389645857' + "@s.whatsapp.net", { text: `
    👋🏻 Haii Kak, Ada Yang Error Nih! Di Bagian : ` + util.format(e)+`Command : `+command, 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
