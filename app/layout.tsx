import type { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: '神秘赛博塔罗',
  description: '3D Cyber Tarot Reading Experience'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
