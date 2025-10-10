// Imports
import { View } from 'react-native'

// Spacer Component - Adjustable Width/Height
const Spacer = ({ width = "100%", height = 20 }) => {
    return (
        <View style={{ width, height }} />
    )
}

export default Spacer
