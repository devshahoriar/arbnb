import { motion, usePresence } from 'framer-motion'
import { useEffect } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

const BaseChild = ({ children, className }: Props) => {
  const [isPresent, safeToRemove] = usePresence()

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 500)
  }, [isPresent])
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0,y: 100 }}
      animate={{ opacity: 100,y: 0 }}
      exit={{ opacity: 0 ,y: 100}}
      className={`${className} bg-pink-600 h-full bg-opacity-60`}
    >
      {children}
    </motion.div>
  )
}
export default BaseChild
