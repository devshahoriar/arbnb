import { motion } from 'framer-motion'
const SetLocationState = () => {
  return  <motion.div
  transition={{ duration: 2 }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 100 }}
  exit={{ opacity: 0 }}
  className='bg-green-600 h-full bg-opacity-60'
>
 set locatin stape
</motion.div>
}
export default SetLocationState
