import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons'

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
            return <Entypo name='stopwatch' size={12} />
        }
    }

    return (
        <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
            {renderIcon(value)}
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    touchableOpacity: {
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

