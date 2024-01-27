import { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import PingInput from '../../components/Ping/PingInput/PingInput'
import PingResults from '../../components/Ping/PingResults/PingResults'
import {useNetInfo} from "@react-native-community/netinfo"
import { getFullAddress } from '../../utilities/helper'

const Ping = () => {
  const [ address, setAddress ] = useState<string>("")
  const [ iterations, setIterations ] = useState<number>(1)
  const [ pingResults, setPingResults ] = useState<number[]>([]);
  const netInfo = useNetInfo();

  const ping = () => {
      console.log(`PING: ${address}, ${iterations} times`)
      setPingResults([])

      for(let i = 1; i <= iterations; i++) {
        const startTime = Date.now()
        fetch(getFullAddress(address))
          .then((response) => {
            if (response.status === 200) {
              const endTime = Date.now()
              const timeTaken = endTime - startTime
              setPingResults(() => [...pingResults, timeTaken])
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
        <PingInput
          addressHandler={setAddress}
          iterationsHandler={setIterations}
          pingHandler={() => ping()}
          disableButton={disableButton}/>
        <PingResults results={pingResults}/>
        <Text>Type: {netInfo.type}</Text>
      <Text>Is Connected? {netInfo.isConnected?.toString()}</Text>
    </View>
  )
}

export default Ping