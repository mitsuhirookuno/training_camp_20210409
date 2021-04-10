import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native'
import Grid from './Grid'

type GridProps = {
    isBomb: boolean,
    isOpend: boolean
}

type Grids = {
    bombs: GridProps[][]
}

const Map = () => {

    const randomBool = (): GridProps => {
        const bomb = ((Math.floor( Math.random() * 2 ) + 1) == 2) ? true:false
        return {isBomb: bomb, isOpend: false}
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
        (y: number, x: number) => {
            grids.bombs[y][x].isOpend = true
            setGrids({bombs: grids.bombs})
        }, [grids]
    )

    const renderGrid = (y: number, x: number) => {
        return <Grid key={(y*6) + x} opened={false} isBomb={false} onPress={() => handlePress(y, x)}/>
    }

    const renderGrids = (xGrids: GridProps[], yIndex: number) => {
        return (
            <View style={styles.rowContainer}>{
                xGrids.map((grid, xIndex) => {
                    return <Grid opened={grid.isOpend} isBomb={grid.isBomb} onPress={() => handlePress(yIndex, xIndex)}/>
                })
            }</View>
        )
    }

    return (
        <View style={styles.container}>{
            grids.bombs.map((xGrids, yIndex) => {
                return renderGrids(xGrids, yIndex)
            })
        }</View>
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
