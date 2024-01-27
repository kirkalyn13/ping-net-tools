import styles from './PingInput.styles'
import { View, TextInput, Pressable, Image } from 'react-native'

const getSrcPath = require("../../../assets/images/mail.png")

interface PingInputProps {
    addressHandler: Function,
    iterationsHandler: Function
    pingHandler: Function,
    disableButton: boolean
}

const PingInput = ({addressHandler, iterationsHandler, pingHandler, disableButton}: PingInputProps) => { 
    return (
        <View style={styles.inputContainer}>
            <View style={styles.textInputContainer}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Enter Web Address"
                    onChangeText={(text: string) => addressHandler(text)}
                    />
                <TextInput 
                    keyboardType='numeric'
                    style={styles.textInput} 
                    placeholder="Enter Iterations"
                    onChangeText={(text: string) => iterationsHandler(text)}
                    />
            </View>
            <View>
            <Pressable 
                disabled={disableButton}
                onPress={() => pingHandler()} 
                style={styles.pressableContainer}>
                {({ pressed }) => (
                <View>
                <Image
                    source={getSrcPath}
                    style={[
                    styles.pressableImage,
                    {
                        opacity: pressed ? 0.5 : 1,
                    },
                    ]}
                />
                </View>
            )}
            </Pressable>
            </View>
        </View>
    )
}

export default PingInput