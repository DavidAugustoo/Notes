import { app, BrowserWindow, Menu, nativeImage, Tray } from 'electron'
import path from 'node:path'

export function createTray(window: BrowserWindow) {
  const tray = new Tray(path.resolve('resources', 'rotionTemplate.png'))

  const menu = Menu.buildFromTemplate([
    { label: 'Rotion', enabled: false },
    { type: 'separator' },
    {
      label: 'Criar novo documento',
      click: () => {
        window.webContents.send('new-document')
      }
    },
    { type: 'separator' },
    { label: 'Documentos recentes', enabled: false },
    {
      label: 'Discover',
      accelerator: 'CommandOrControl+1'
    },
    { type: 'separator' },
    {
      label: 'quit',
      role: 'quit'
    }
  ])

  tray.setContextMenu(menu)
}
