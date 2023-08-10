"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import { HeaderWrapper } from '../component/header/headerWarpper'
import React from 'react'


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {


  return (
    <html lang="en">

      <body className={inter.className}>
        <main className=' flex '>

          <HeaderWrapper />

          {children}

        </main>
      </body>
    </html>
  )
}





