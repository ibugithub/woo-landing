import './globals.css'

export const metadata = {
  title: 'Woo-landing page',
  description: 'Trying to create a random landing page with next',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
