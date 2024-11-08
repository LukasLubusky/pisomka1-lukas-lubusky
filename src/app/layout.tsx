import type { Metadata } from 'next'
import { AppBar, Toolbar, Typography } from '@mui/material'
import NavMenu from "@/components/NavMenu";

export const metadata: Metadata = {
  title: 'ZoskaGram',
  description: 'A social media app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ZoskaGram
            </Typography>
            <NavMenu />
          </Toolbar>
        </AppBar>
        <main>{children}</main>
      </body>
    </html>
  )
}