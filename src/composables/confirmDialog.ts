import { alertController } from '@ionic/vue'

const showDialog = async (header: string, message: string, button: string, callback: any) => {
  const bs = [
    {
      text: button,
      role: 'confrim',
      handler: () => {
        callback(true)
      },
    },
    {
      text: 'CANCEL',
      role: 'cancel',
    },
  ]

  const dialog = await alertController.create({
    header: header,
    message: message,
    buttons: bs,
  })

  return await dialog.present()
}

export { showDialog }
