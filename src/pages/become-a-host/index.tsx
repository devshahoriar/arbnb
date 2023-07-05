import BaseStape from '@/components/becomeA_Host/BaseStape'
import FirstStape from '@/components/becomeA_Host/StartStape'
import Stape from '@/components/becomeA_Host/Stape'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const staps: string[] = ['start', 'location', 'space', 'price', 'finish']

const BecomeHost = () => {
  const router = useRouter()
  const [step, setStep] = useState<string>('start')
  const [persentage, setPersentage] = useState<number>(0)
  const [intStape, setIntStape] = useState<number>(0)
  // console.log(router.query)
  const _hendelNext = () => {
    if (intStape < 4) {
      setIntStape(intStape + 1)
      setPersentage(persentage + 25)
    }
  }

  const _hendelBack = () => {
    if (intStape > 0) {
      setIntStape(intStape - 1)
      setPersentage(persentage - 25)
    }
  }

  useEffect(() => {}, [])

  return (
    <main className="w-screen h-screen">
      <div className="container flex flex-col h-full">
        <div className="flex justify-between px-2 items-center h-16">
          <button className="btn btn-outline rounded-full btn-sm">
            Save and Exit
          </button>
          <button className="btn btn-outline rounded-full btn-sm">
            Qustions?
          </button>
        </div>

        <div className="flex-1 bg-slate-600 bg-opacity-10">
          <BaseStape
            intStape={intStape}
            persentage={persentage}
            stape={step}
            next={setStep}
          />
        </div>

        <div>
          <div className="flex">
            <Stape p={persentage} />
          </div>
          <div className=" flex justify-between items-center px-2 h-14">
            <button onClick={_hendelBack} className="underline">
              Back
            </button>
            <button className="btn btn-sm rounded-full" onClick={_hendelNext}>
              {intStape === 4 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
export default BecomeHost
