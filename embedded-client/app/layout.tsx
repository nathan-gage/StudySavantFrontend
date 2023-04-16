import './globals.css'

export const metadata = {
  title: 'AI Tutor Assistance',
  description: 'Your one and only AI Tutor Assistance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' data-theme='light'>
      <body>{children}</body>
    </html>
  )
}
