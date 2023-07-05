import { staps } from '@/pages/become-a-host'
import FirstStape from './StartStape'
import SetLocationState from './SetLocationState'
import SetSpace from './SetSpace'
import SetPrice from './SetPrice'
import LastState from './LastState'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  stape: string
  persentage: number
  intStape: number
  next: React.Dispatch<React.SetStateAction<string>>
}

const BaseStape = ({ stape, persentage, next, intStape }: Props) => {
  console.log(stape, intStape)

  return (
    <section className="h-full overflow-hidden">
      <AnimatePresence mode="wait">
        {staps[0] === staps[intStape] && <FirstStape key="f" />}
        {staps[1] === staps[intStape] && <SetLocationState key="g" />}
        {staps[2] === staps[intStape] && <SetSpace key="j" />}
        {staps[3] === staps[intStape] && <SetPrice key="a" />}
        {staps[4] === staps[intStape] && <LastState key="b" />}
      </AnimatePresence>
    </section>
  )
}
export default BaseStape
