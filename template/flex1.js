export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://image.freepik.com/free-vector/cheerful-happy-cute-girl-hand-drawn-cartoon-art-illustration_56104-740.jpg',
    size: 'full',
    aspectRatio: '20:13',
    aspectMode: 'cover',
    action: {
      type: 'uri',
      uri: 'http://linecorp.com/'
    }
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
    ]
  },
  footer: {
    type: 'box',
    layout: 'vertical',
    spacing: 'sm',
    contents: [
      {
        type: 'spacer',
        size: 'sm'
      }
    ],
    flex: 0
  }
}

// {
//   type: 'text',
//     text: 'Brown Cafe',
//       weight: 'bold',
//         size: 'xl'
// },
// {
//   type: 'box',
//     layout: 'vertical',
//       margin: 'lg',
//         spacing: 'sm',
//           contents: [
//             {
//               type: 'box',
//               layout: 'baseline',
//               spacing: 'sm',
//               contents: [
//                 {
//                   type: 'text',
//                   text: 'Place',
//                   color: '#aaaaaa',
//                   size: 'sm',
//                   flex: 1
//                 }
//               ]
//             },
//             {
//               type: 'box',
//               layout: 'baseline',
//               spacing: 'sm',
//               contents: [
//                 {
//                   type: 'text',
//                   text: 'Time',
//                   color: '#aaaaaa',
//                   size: 'sm',
//                   flex: 1
//                 }
//               ]
//             }
//           ]
// }
