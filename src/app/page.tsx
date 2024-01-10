'use client'

import CanvasModel from '@/components/Canvas'
import Customizer from '@/components/Customizer'
import Home from '@/components/Home'

export default function Page() {
  return (
    <main className='app transition-all ease-in'>
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
  )
}
