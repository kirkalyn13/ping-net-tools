import { useState, useEffect } from 'react'
import { View } from 'react-native'
import PingInput from '../../components/Ping/PingInput/PingInput'
import PingResults from '../../components/Ping/PingResults/PingResults'
import { getFullAddress } from '../../utilities/helper'
import NetworkSummary from '../../components/NetworkSummary/NetworkSummary'
import Header from '../../components/Header/Header'

const Ping = () => {
  const [ address, setAddress ] = useState<string>("")
  const [ iterations, setIterations ] = useState<number>(1)
  const [ currentResult, setCurrentResult ] = useState<PingResult | null>(null)
  const [ pingResults, setPingResults ] = useState<PingResult[]>([]);

  const ping = () => {
      setCurrentResult(null)

      for(let i = 1; i <= iterations; i++) {
          const startTime: number = Date.now()
          fetch(getFullAddress(address))
            .then((response) => {
              const endTime: number = Date.now()
              const timeTaken: number = endTime - startTime
              const result: PingResult = {
                iteration: i,
                status: response.status,
                time: timeTaken,
              }
              
              return result
            })
            .then((result: PingResult) => setCurrentResult(result))
            .catch((error: Error) => {
                setCurrentResult({
                  iteration: 1,
                  status: 400,
                  time: 0,
                  error: error.toString()
                })
            }
          )
        }
  } 

  useEffect(() => {
    if (currentResult === null) setPingResults([])
    else setPingResults([...pingResults, currentResult])
  },[ currentResult ])

  const disableButton: boolean = address === "" || !iterations

  return (
    <View>
      <Header />
      <NetworkSummary />
      <PingInput
        addressHandler={setAddress}
        iterationsHandler={setIterations}
        pingHandler={() => ping()}
        disableButton={disableButton}/>
      <PingResults results={pingResults}/>
    </View>
  )
}

export default Ping