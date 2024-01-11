'use client'

import React, { useEffect } from 'react'
import { CustomButton } from '../CustomButton'
import { useSnapshot } from 'valtio'
import state from '@/storeValtio'

const FilePicker = ({ file, setFile }: { file: any; setFile: any }) => {
  const snap = useSnapshot(state)

  const _handleChange = (e: any) => {
    const file = e.target.files[0]
    const url = URL.createObjectURL(file)
    setFile(url)
  }

  const _hanleChangeImage = (type: string) => {
    if (!file) return

    switch (type) {
      case 'logo':
        return (state.logoDecal = file)
      case 'full':
        state.fullDecal = file
        state.isFullTexture = true
        return state

      default:
        return file
    }
  }

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(file)
    }
  }, [file])

  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex flex-col justify-between'>
        <div className='flex flex-col gap-2'>
          <>
            <input
              id='file-upload'
              type='file'
              accept='image/*'
              onChange={_handleChange}
            />
            <label htmlFor='file-upload' className='filepicker-label'>
              Upload file
            </label>
          </>
          {file === '' ? 'No file selected' : file?.name}
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <CustomButton
            title='Logo'
            type='outline'
            handleClick={() => _hanleChangeImage('logo')}
          />
          <CustomButton
            title='Full'
            type='filled'
            handleClick={() => _hanleChangeImage('full')}
          />
        </div>
      </div>
    </div>
  )
}

export default FilePicker
