import { motion, usePresence } from 'framer-motion'
import { useEffect } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

const BaseChild = ({ children, className }: Props) => {
  // const [isPresent, safeToRemove] = usePresence()

  // useEffect(() => {
  //   !isPresent && setTimeout(safeToRemove, 500)
  // }, [isPresent])
  return (
    <motion.div
      transition={{ duration: 0.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      exit={{ opacity: 0 }}
      className={`${className}  h-full`}
    >
      {children}
    </motion.div>
  )
}
export default BaseChild
