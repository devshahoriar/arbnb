import { motion } from 'framer-motion'

const SetPrice = () => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      exit={{ opacity: 0 }}
      className="bg-orange-700 h-full bg-opacity-60"
    >
      set stape stape
    </motion.div>
  )
}
export default SetPrice
