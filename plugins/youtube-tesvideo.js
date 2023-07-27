import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) return m.reply(`Use Example: ${usedPrefix+ command} https://www.youtube.com/watch?v=L3it1FWnZjk`)
  await m.reply('Sebentar Ya Sayang....')
  let res = await fetch(`https://api.zahwazein.xyz/downloader/youtube?apikey=zenzkey_93a52ae6c5&url=${text}`)
  let res2 = await res.json()
  let x = res2.result
  let z = x.getVideo
  let y = x.statistic
  let cap = `
⬣━━━━⬡ Youtube Down By Cahyo Kun
✾ ➛ Title: *_${x.title}_*
✾ ➛ Durasi Video: *_${x.duration}_*
✾ ➛ Link: *_${x.url}_*
⬣━━━⬡
*_Sukses Download YouTube*
*_Jangan Lupa Donasi ya Teman_*
`
conn.sendFile(m.chat, 
z.url, 'ytv.mp4', cap, m)
}
handler.help = ['tt']
handler.tags = ['downloader']
handler.command = /^(tesyt)$/i

handler.limit = true

export default handler