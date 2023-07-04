import { motion } from 'framer-motion'

const LastState = () => {
  return (
    <motion.div
    transition={{ duration: 2 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 100 }}
    exit={{ opacity: 0 }}
    className='bg-pink-600 h-full bg-opacity-60'
  >
    last stape
  </motion.div>
  )
}
export default LastState