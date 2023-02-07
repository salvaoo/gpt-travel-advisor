import { Roboto_Mono } from '@next/font/google'
import './globals.css'
import { AnalyticsWrapper } from '@components/analytics';

const RobotoMono = Roboto_Mono({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={RobotoMono.className}>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
