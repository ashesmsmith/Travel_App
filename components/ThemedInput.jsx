import { useColorScheme, TextInput } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedInput = ({ style, ...props} ) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <TextInput
            style={[
                { 
                    backgroundColor: theme.inputBackground,
                    color: theme.inputText,
                    padding: 10,
                    borderRadius: 5 
                }, style
            ]}
            {...props}
        />
    )
}

export default ThemedInput
