import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

type SquareValue = 'X' | '0' | null

type Props = {
    value: SquareValue
    onPress: () => void
}

const Square = (props: Props) => {
    const { value, onPress } = props

    const renderIcon = (sv: SquareValue) => {
        if(sv == 'X') {
            return <Ionicons name='md-happy-outline' size={32} />
        }
        else if(sv == '0') {
            return <Ionicons name='md-happy-sharp' size={32} />
        }
        else {
            return <Ionicons name='ios-scan-outline' size={12} />
        }
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{value}</Text>
            {renderIcon(value)}
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
    }
})

export default Square;

