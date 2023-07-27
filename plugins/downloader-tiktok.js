import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) return m.reply(`Use Example: ${usedPrefix+ command} https://vt.tiktok.com/ZSJE2ffo4`)
  await m.reply('Sebentar Ya Sayang....')
  let res = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=${global.lolkey}&url=${text}`)
  let res2 = await res.json()
  let x = res2.result
  let z = x.author
  let y = x.statistic
  let cap = `
⬣━━━━⬡ Tiktok Down By Cahyo Kun
✾ ➛ Nickname: *_${z.nickname}_*
✾ ➛ Caption: *${x.title}*
✾ ➛ Viewers : *${y.play_count}*
✾ ➛ Like: *${y.like_count}*
✾ ➛ Comment: *${y.comment_count}*
✾ ➛ Share: *${y.share_count}*
✾ ➛ Thumb: *_${x.thumbnail}_*
✾ ➛ Link: *_${x.link}_*
⬣━━━⬡
*_Sukses Download Tiktok No Watermark_*
*_Jangan Lupa Donasi ya Teman_*
`
conn.sendFile(m.chat, 
x.link, 'tt.mp4', cap, m)
}
handler.help = ['tiktok', 'tt']
handler.tags = ['downloader']
handler.command = /^(tiktok|tt|ttdl|ttd)$/i

handler.limit = true

export default handler