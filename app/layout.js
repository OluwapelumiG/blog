import './globals.css'

export const metadata = {
  title: 'My Blog App',
  description: 'Blog application with next js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='h-screen'>{children}</body>
    </html>
  )
}
