import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native'
import Grid from './Grid'

type Grids = {
    bombs: boolean[][]
}

const Map = () => {

    const randomBool = () => {
        return ((Math.floor( Math.random() * 2 ) + 1) == 2) ? true:false
    }

    const initialGrids: Grids = {
        bombs: [
            [randomBool(), randomBool(), randomBool(), randomBool(), randomBool(), randomBool()],
            [randomBool(), randomBool(), randomBool(), randomBool(), randomBool(), randomBool()],
            [randomBool(), randomBool(), randomBool(), randomBool(), randomBool(), randomBool()],
            [randomBool(), randomBool(), randomBool(), randomBool(), randomBool(), randomBool()],
            [randomBool(), randomBool(), randomBool(), randomBool(), randomBool(), randomBool()],
            [randomBool(), randomBool(), randomBool(), randomBool(), randomBool(), randomBool()],
        ]
    }

    const [grids, setGrids] = useState(initialGrids)


    const handlePress = useCallback(
        (i: number) => {
        }, []
    )

    const renderGrid = (y: number, x: number) => {
        return <Grid opened={false} isBomb={false} onPress={() => handlePress(1)}/>
    }

    const renderGrids = (index: number, ggrids: boolean[]) => {
        return (
            <View style={styles.rowContainer}>
                {renderGrid(1, 1)}
                {renderGrid(1, 2)}
                {renderGrid(1, 3)}
                {renderGrid(1, 4)}
                {renderGrid(1, 5)}
                {renderGrid(1, 6)}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {
                grids.bombs.map((ggrid, index) => {
                    return renderGrids(index, ggrid)
                })
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 10,
    },
    status: {
        marginBottom: 10
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    reset: {
        marginVertical: 10
    }
})

export default Map;

