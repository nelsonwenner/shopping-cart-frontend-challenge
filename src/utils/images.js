const images = [
  {
    id: 1,
    path: 'https://abrafrutas.org/wp-content/uploads/2020/02/banana-300x252.jpg'
  },
  {
    id: 2,
    path:
      'https://avatars.mds.yandex.net/get-zen_doc/1714257/pub_5ecd235a88140b31eb814360_5ecd2368cfbf4d2658c0aa7c/scale_1200'
  },
  {
    id: 3,
    path:
      'https://pics.me.me/thumb_kinda-want-this-to-happen-everyone-start-posting-oranges-at-68325797.png'
  },
  {
    id: 4,
    path:
      'https://larepublica.pe/resizer/vnYXnRoekNuJ3KobD5D2l9LxiXw=/538x0/top/larepublica.pe/resizer/f0zKeLglVMPh5ly11vuyz0vELQg=/538x0/top/smart/arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/OZJ6QTDTBNC65EWBPVWQPFM2QY.jpg'
  }
]

const getImage = (id) => {
  const image = images.find((image) => image.id === id)
  return image ? image.path : 'https://dumont.sp.gov.br/lib/img/no-image.jpg'
}

export default getImage
