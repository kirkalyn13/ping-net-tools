import { useState, useEffect } from 'react'
import { View } from 'react-native'
import PingInput from '../../components/Ping/PingInput/PingInput'
import PingResults from '../../components/Ping/PingResults/PingResults'
import { getFullAddress } from '../../utilities/helper'
import NetworkSummary from '../../components/NetworkSummary/NetworkSummary'
import Header from '../../components/Header/Header'
import styles from './Ping.styles'

const Ping = () => {
  const [ address, setAddress ] = useState<string>("")
  const [ iterations, setIterations ] = useState<number>(1)
  const [ currentResult, setCurrentResult ] = useState<PingResult | null>(null)
  const [ pingResults, setPingResults ] = useState<PingResult[]>([]);
  const [ loading, setLoading ] = useState(false)

  const ping = () => {
      setCurrentResult(null)
      setLoading(true)

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
                  iteration: i,
                  status: 500,
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

  useEffect(() => {
    if (pingResults.length == iterations) setLoading(false)
  }, [ pingResults])

  const disableButton: boolean = address === "" || !iterations

  return (
    <View style={styles.container}>
      <NetworkSummary />
      <PingInput
        addressHandler={setAddress}
        iterationsHandler={setIterations}
        pingHandler={() => ping()}
        disableButton={disableButton}/>
      <PingResults 
        url={getFullAddress(address)}
        results={pingResults}
        loading={loading} />
    </View>
  )
}

export default Ping