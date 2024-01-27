import { useState } from 'react'
import { View, Text } from 'react-native'
import PingInput from '../../components/Ping/PingInput/PingInput'
import PingResults from '../../components/Ping/PingResults/PingResults'
import {useNetInfo} from "@react-native-community/netinfo"

const Ping = () => {
  const [ address, setAddress ] = useState<string>("")
  const [ iterations, setIterations ] = useState<number>(0)
  const [ pingTime, setPingTime ] = useState<number | null>(null);
  const netInfo = useNetInfo();

  const ping = async () => {
      console.log(`PING: ${address}, ${iterations} times`)
      const startTime = Date.now();
      try {
        const response = await fetch(address);
        console.log(1)
        const endTime = Date.now();
        console.log(2)
        const timeTaken = endTime - startTime;
        console.log(3)
        setPingTime(timeTaken);
      } catch (error) {
        console.error('Ping test failed:', error);
      }

  } 

  const disableButton: boolean = address === "" || !iterations

  return (
    <View>
        <PingInput
          addressHandler={setAddress}
          iterationsHandler={setIterations}
          pingHandler={() => ping()}
          disableButton={disableButton}/>
        <PingResults/>
        <Text>{ !pingTime ? "Ping an IP!" : pingTime}</Text>
        <Text>Type: {netInfo.type}</Text>
      <Text>Is Connected? {netInfo.isConnected?.toString()}</Text>
    </View>
  )
}

export default Ping