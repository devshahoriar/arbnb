import { motion, AnimatePresence } from 'framer-motion'

const FirstStape = () => {
  return (
    // <h1>Shuco</h1>
      <motion.div
        transition={{ duration: 2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0 }}
        className='bg-blue-700 h-full bg-opacity-60'
      >
        first stape
      </motion.div>
  )
}
export default FirstStape
