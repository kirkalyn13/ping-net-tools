import { useState, useEffect } from 'react'
import { View } from 'react-native'
import PingInput from '../../components/Ping/PingInput/PingInput'
import PingResults from '../../components/Ping/PingResults/PingResults'
import { getFullAddress } from '../../utilities/helper'
import NetworkSummary from '../../components/NetworkSummary/NetworkSummary'
import Header from '../../components/Header/Header'
import styles from './PingScreen.styles'
import NavBar from '../../components/NavBar/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { addResult, clearResults } from '../../feature/slices/pingResults'

const PingScreen = () => {
  const pingResults = useSelector((state: any) => state.pingResults.data)
  const [ address, setAddress ] = useState<string>("")
  const [ iterations, setIterations ] = useState<number>(1)
  const [ currentResult, setCurrentResult ] = useState<PingResult | null>(null)
  const [ loading, setLoading ] = useState(false)
  const dispatch = useDispatch()

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
    if (currentResult === null) dispatch(clearResults())
    else dispatch(addResult(currentResult))
  },[ currentResult ])

  useEffect(() => {
    if (pingResults.length == iterations) setLoading(false)
  }, [ pingResults])

  const disableButton: boolean = address === "" || !iterations

  return (
    <View style={styles.container}>
      <NavBar />
      <NetworkSummary />
      <PingInput
        addressHandler={setAddress}
        iterationsHandler={setIterations}
        pingHandler={() => ping()}
        disableButton={disableButton}/>
      <PingResults 
        url={getFullAddress(address)}
        loading={loading} />
    </View>
  )
}

export default PingScreen