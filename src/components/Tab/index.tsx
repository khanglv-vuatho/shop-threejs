'use client'

import state from '@/storeValtio'
import Image from 'next/image'
import { useSnapshot } from 'valtio'

type TTab = {
  tab: { name: string; icon: string }
  isFilterTab?: boolean
  isActiveTab?: any
  handleClick: any
}

const Tab: React.FC<TTab> = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state)

  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: 'transparent', opacity: 1 }

  return (
    <div
      key={tab.name}
      className={`tab-btn ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'}`}
      onClick={handleClick}
      style={activeStyles}
    >
      <Image
        src={tab.icon}
        alt={tab.name}
        height={100}
        width={100}
        className={`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'}`}
      />
    </div>
  )
}

export default Tab
