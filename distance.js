import kid from './kid.js'
import dis from './經緯度間距離.js'

export default async (event) => {
  try {
    const add = []
    for (let i = 0; i <= kid.length; i++) {
      if (dis(event.message.latitude, event.message.longitude, kid[i].wgs84aY, kid[i].wgs84aX, 'K') < 5) {
        add.push({
          type: 'location',
          title: kid[i].title,
          address: kid[i].address,
          latitude: kid[i].wgs84aY,
          longitude: kid[i].wgs84aX
        })
        if (add.length >= 5) {
          break
        }
      }
    }

    console.log(add)
    if (add.length > 0) {
      event.reply(add)
    } else {
      event.reply('找不到')
    }
  } catch (error) {
    console.log(error)
    event.reply('發生錯誤')
  }
}
