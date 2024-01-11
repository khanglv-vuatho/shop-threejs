'use client'

import state from '@/storeValtio'
import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

const ColorPicker = () => {
  const snap = useSnapshot(state)

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          '#ccc',
          '#efbd4e',
          '#80c670',
          '#726DE8',
          '#353934',
          '#2CCCE4',
          '#ff8a65',
          '#7098DA',
          '#c19277',
          '#ff96ad',
          '#512314',
          '#5f123d',
        ]}
        onChange={(color: any) => (state.color = color.hex)}
      />
    </div>
  )
}

export default ColorPicker
