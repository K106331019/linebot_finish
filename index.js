import 'dotenv/config'
import linebot from 'linebot'
import distance from './distance.js'
import quick from './quick.js'
import Banqiao from './connect/Banqiao.js'
import Xinzhuang from './connect/Xinzhuang.js'
import Zhonghe from './connect/Zhonghe.js'
import Yonghe from './connect/Yonghe.js'
import Xindian from './connect/Xindian.js'
import Shulin from './connect/Shulin.js'
import Tucheng from './connect/Tucheng.js'
import Taishan from './connect/Taishan.js'
import Tamsui from './connect/Tamsui.js'
import Xizhi from './connect/Xizhi.js'
import Sanxia from './connect/Sanxia.js'
import Wugu from './connect/Wugu.js'
import Luzhou from './connect/Luzhou.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})

bot.on('message', async (event) => {
  if (event.message.type === 'text') {
    if (event.message.text === '托嬰中心') {
      quick(event)
    }
    if (event.message.text === '板橋區') {
      Banqiao(event)
    }
    if (event.message.text === '新莊區') {
      Xinzhuang(event)
    }
    if (event.message.text === '中和區') {
      Zhonghe(event)
    }
    if (event.message.text === '永和區') {
      Yonghe(event)
    }
    if (event.message.text === '新店區') {
      Xindian(event)
    }
    if (event.message.text === '樹林區') {
      Shulin(event)
    }
    if (event.message.text === '土城區') {
      Tucheng(event)
    }
    if (event.message.text === '泰山區') {
      Taishan(event)
    }
    if (event.message.text === '淡水區') {
      Tamsui(event)
    }
    if (event.message.text === '汐止區') {
      Xizhi(event)
    }
    if (event.message.text === '三峽區') {
      Sanxia(event)
    }
    if (event.message.text === '五股區') {
      Wugu(event)
    }
    if (event.message.text === '蘆洲區') {
      Luzhou(event)
    }
  }

  if (event.message.type === 'location') {
    distance(event)
  }
})
