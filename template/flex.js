export default {
  type: 'flex',
  altText: 'data',
  contents: {
    type: 'carousel',
    header: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'image',
                  url: 'https://image.freepik.com/free-vector/cheerful-happy-cute-girl-hand-drawn-cartoon-art-illustration_56104-740.jpg',
                  size: 'full',
                  aspectMode: 'cover',
                  aspectRatio: '150:98',
                  gravity: 'center'
                }
              ],
              flex: 1
            }
          ]
        }
      ],
      paddingAll: '0px'
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  contents: [],
                  size: 'xl',
                  wrap: true,
                  text: 'Cony Residence',
                  color: '#ffffff',
                  weight: 'bold'
                },
                {
                  type: 'text',
                  text: '3 Bedrooms, ¥35,000',
                  color: '#ffffffcc',
                  size: 'sm'
                }
              ],
              spacing: 'sm'
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'text',
                      contents: [
                        {
                          type: 'span',
                          decoration: 'none',
                          text: '電話'
                        },
                        {
                          type: 'span',
                          text: '容納人數'
                        }
                      ],
                      size: 'sm',
                      wrap: true,
                      margin: 'lg',
                      color: '#ffffffde'
                    }
                  ]
                }
              ],
              paddingAll: '13px',
              backgroundColor: '#ffffff1A',
              cornerRadius: '2px',
              margin: 'xl'
            }
          ]
        }

      ],
      paddingAll: '20px',
      backgroundColor: '#464F69'
    }

  }
}
