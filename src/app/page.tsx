import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '@/storeValtio'
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '@/motion'
import Image from 'next/image'

export default function Home() {
  const snap = useSnapshot(state)
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.div className='home' {...slideAnimation('left')}>
          <motion.header>
            <Image
              src={'./threejs.png'}
              alt='logo'
              width={50}
              height={32}
              className='size-8 object-contain'
            />
          </motion.header>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
