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
  const [ pingResults, setPingResults ] = useState<PingResult[]>([]);

  const ping = () => {
      console.log(`PING: ${address}, ${iterations} times`)
      setPingResults([])

      for(let i = 1; i <= iterations; i++) {
        const startTime: number = Date.now()
        fetch(getFullAddress(address))
          .then((response) => {
            const endTime: number = Date.now()
            const timeTaken: number = endTime - startTime
            const pingResult: PingResult = {
              iteration: i,
              status: response.status,
              time: timeTaken,
            }
            
            setPingResults(() => [...pingResults, pingResult])
            if (response.status === 200) {
              console.log('success', timeTaken)
            } else {
              console.log('error');
            }
          })
          .catch((error) => {
              console.log('Network Error: ' + error)
          }
        )
      }

  } 

  useEffect(() => {
    // console.log("results:", pingTimes)
  },[pingResults])

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