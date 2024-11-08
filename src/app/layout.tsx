'use client'

import { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { AppBar, Toolbar, Typography } from '@mui/material'
import NavMenu from "@/components/NavMenu"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
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
    </SessionProvider>
  )
}