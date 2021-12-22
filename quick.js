// import kid from './kid.js'
// const Banqiao = []
// export default (event) => {
//   for (let i = 0; i <= kid.length; i++) {
//     if (event.message.type === 'text') {
//       const city = kid[i].address.slice(3, 6)
//       if (city === '板橋區') {
//         Banqiao.push({
//           address: kid[i].address
//         })
//         if (Banqiao.length >= 5) {
//           break
//         }
//       }
//     }
//   }
//   for (let i = 0; i < Banqiao.length; i++) {
//     event.reply(JSON.stringify(Banqiao[i].address))
//     console.log(JSON.stringify(Banqiao[i].address))
//   }
// }
//
export default (event) => {
  event.reply({
    type: 'text',
    text: '選擇地區',
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'message',
            label: '板橋區',
            text: '板橋區'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '中和區',
            text: '中和區'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '永和區',
            text: '永和區'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '新店區',
            text: '新店區'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '樹林區',
            text: '樹林區'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '土城區',
            text: '土城區'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '新莊區',
            text: '新莊區'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '泰山區',
            text: '泰山區'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '淡水區',
            text: '淡水區'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '汐止區',
            text: '汐止區'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '三峽區',
            text: '三峽區'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '五股區',
            text: '五股區'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '蘆洲區',
            text: '蘆洲區'
          }
        }
      ]
    }

  })
}
