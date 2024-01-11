'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import config from '@/config/config'
import state from '@/storeValtio'
import { downloadCanvasToImage, reader } from '@/config/helpers'
import { EditorTabs, DecalTypes, FilterTabs } from '@/config/constants'
import { fadeAnimation, slideAnimation } from '@/config/motion'
import Tab from '../Tab'
import { CustomButton } from '../CustomButton'
import { useState } from 'react'
import AIPicker from '../AIPicker'
import FilePicker from '../FilePicker'
import ColorPicker from '../ColorPicker'

const Customizer = () => {
  const snap = useSnapshot(state)

  const [file, setFile] = useState('')

  const [prompt, setPrompt] = useState('')
  const [generatingImg, setGeneratingImg] = useState(false)

  const [activeEditorTab, setActiveEditorTab] = useState('')

  const [activeFilterTab, setActiveFilterTab] = useState<any>({
    logoShirt: true,
    stylishShirt: false,
  })

  const genderateTabcontent = () => {
    switch (activeEditorTab) {
      case 'colorpicker':
        return <ColorPicker />
      case 'filepicker':
        return <FilePicker file={file} setFile={setFile} />
      case 'aipicker':
        return <AIPicker />
      default:
        return null
    }
  }
  // const handleDecals = (type: any, result: any) => {
  //   const decalType = DecalTypes[type]

  //   state[decalType.stateProperty] = result

  //   if (!activeFilterTab[decalType.filterTab]) {
  //     handleActiveFilterTab(decalType.filterTab)
  //   }
  // }

  const _handleActiveFilterTab = (tabName: string) => {
    switch (tabName) {
      case 'logoShirt':
        state.isLogoTexture = !activeFilterTab[tabName]
        break
      case 'stylishShirt':
        state.isFullTexture = !activeFilterTab[tabName]
        break
      default:
        state.isLogoTexture = true
        state.isFullTexture = false
        break
    }

    setActiveFilterTab((prevState: any) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      }
    })
  }
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key='custom'
            className='absolute top-0 left-0 z-10'
            {...slideAnimation('left')}
          >
            <div className='flex items-center min-h-dvh'>
              <div className='editortabs-container tabs'>
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => {
                      setActiveEditorTab(tab.name)
                    }}
                  />
                ))}
              </div>
              {genderateTabcontent()}
            </div>
          </motion.div>
          <motion.div className='absolute z-10 top-5 right-5' {...fadeAnimation}>
            <CustomButton
              type='filled'
              title='Go Back'
              handleClick={() => (state.intro = true)}
              customStyles='w-fit px-4 py-2.5 font-bold text-sm'
            />
          </motion.div>
          <motion.div className='filtertabs-container' {...slideAnimation('up')}>
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => _handleActiveFilterTab(tab.name)}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer
