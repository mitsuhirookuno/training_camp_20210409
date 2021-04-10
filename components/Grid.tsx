import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome5, Entypo, AntDesign, FontAwesome } from '@expo/vector-icons'

type Opend = true | false
type IsBomb = true | false

type Props = {
    opened: Opend
    isBomb: IsBomb
    onPress: () => void
}

const Grid = (props: Props) => {
    const { opened, isBomb, onPress } = props

    const renderIcon = (_opend: Opend) => {
        if(false == _opend) {
            return <FontAwesome5 name='question-circle' size={32} />
        }
        else {
            if(isBomb) {
                return <FontAwesome name='bomb' size={32} />
            }
            else {
                return <AntDesign name='Safety' size={32} />
            }
        }
    }

    return (
        <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
            {renderIcon(opened)}
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

export default Grid;

