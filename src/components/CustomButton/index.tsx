'use client'
import state from '@/storeValtio'
import { Button } from '@nextui-org/react'
import { twMerge } from 'tailwind-merge'
import { useSnapshot } from 'valtio'

type TCustomButton = {
  type: 'filled' | 'outline'
  title: string
  handleClick?: any
  customStyles?: string
}

export const CustomButton: React.FC<TCustomButton> = ({
  type,
  title,
  handleClick = () => {},
  customStyles = '',
}) => {
  const snap = useSnapshot(state)
  const genderateStyle = (type: string) => {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: '#fff',
      }
    }
  }

  return (
    <Button
      style={genderateStyle(type)}
      className={twMerge('px-2 py-1.5 flex-1 rounded-md', customStyles)}
      onPress={handleClick}
    >
      {title}
    </Button>
  )
}
