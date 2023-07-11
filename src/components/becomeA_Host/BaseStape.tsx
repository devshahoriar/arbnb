import { staps } from '@/pages/become-a-host'
import FirstStape from './StartStape'
import SetLocationState from './SetLocationState'
import SetSpace from './SetSpace'
import SetPrice from './SetPrice'
import LastState from './LastState'
import { motion, AnimatePresence } from 'framer-motion'
import SetTypeState from './SetTypeState'

interface Props {
  stape: string
  persentage: number
  intStape: number
  next: React.Dispatch<React.SetStateAction<string>>
}

const BaseStape = ({ intStape }: Props) => {
  return (
    <section className="h-full overflow-hidden">
      <AnimatePresence mode="wait">
        {staps[0] === staps[intStape] && <FirstStape key="f" />}
        {staps[1] === staps[intStape] && <SetTypeState key="f" />}
        {staps[2] === staps[intStape] && <SetLocationState key="g" />}
        {staps[3] === staps[intStape] && <SetSpace key="j" />}
        {staps[4] === staps[intStape] && <SetPrice key="a" />}
        {staps[5] === staps[intStape] && <LastState key="b" />}
      </AnimatePresence>
    </section>
  )
}
export default BaseStape
