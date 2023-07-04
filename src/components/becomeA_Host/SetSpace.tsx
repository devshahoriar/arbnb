import {motion} from 'framer-motion'
const SetSpace = () => {
  return (
    <motion.div
    transition={{ duration: 2 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 100 }}
    exit={{ opacity: 0 }}
    className='bg-red-700 h-full bg-opacity-60'
  >
    set space stape
  </motion.div>
  )
}
export default SetSpace