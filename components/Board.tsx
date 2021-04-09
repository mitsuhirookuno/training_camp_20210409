import React, { useState, useCallback }  from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import Square from './Square'

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

type Squares = {
    values: Array<'X' | '0' | null>,
    xIsNext: boolean
}

const calculateWinner = (squares: Squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares.values[a] && squares.values[a] === squares.values[b] && squares.values[a] === squares.values[c]) {
            return squares.values[a];
        }
    }
    return null;
};


const Board = () => {
    const initialSquares: Squares = {
        values: Array(9).fill(null),
        xIsNext: true
    }
    const [squares, setSquares] = useState(initialSquares)

    const winner = calculateWinner(squares)
    let status: string
    if (winner) {
        status = 'Winner: ' + winner
    } else {
        status = 'Next player: ' + (squares.xIsNext ? 'X' : '0')
    }

    const handlePress = useCallback(
        (i: number) => {
            const values = squares.values.slice()

            if (calculateWinner(squares) || squares.values[i]) {
                return
            }

            values[i] = squares.xIsNext ? 'X' : '0'
            setSquares({
                values: values,
                xIsNext: !squares.xIsNext
            })
        }, [squares]
    )

    const renderSquare = (i: number) => {
        return <Square value={squares.values[i]} onPress={() => handlePress(i)} />
    }

    const resetSquares = useCallback(
        () => setSquares(initialSquares), [setSquares, initialSquares]
    )

    return (
        <View style={styles.container}>
            <Text style={styles.status}>{status}</Text>
            <View style={styles.rowContainer}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </View>
            <View style={styles.rowContainer}>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </View>
            <View style={styles.rowContainer}>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </View>
            <View style={styles.reset}>
                <Button title="リセットする" onPress={resetSquares} />
            </View>
        </View>
    )
};

export default Board;
