import { useEffect, useState } from "react"
import './Grid.css'

function Block({ isMarked, onClick: handleClick }: { isMarked: boolean, onClick: () => void }) {
    return (
        <div className='block' onClick={handleClick}>
            {isMarked ? 'X' : ''}
        </div>
    )
}

function fillMatrix(height: number, width: number): boolean[][] {
    const rows: boolean[][] = []
    for (let i = 0; i < height; ++i) {
        rows.push(new Array(width).fill(false))
    }
    return rows
}

function remember(next: boolean[][], prev: boolean[][]) {
    for (let i = 0; i < prev.length; ++i) {
        if (i >= next.length) break;
        for (let j = 0; j < prev[i].length; ++j) {
            if (j >= next[i].length) break;
            next[i][j] = prev[i][j]
        }
    }
}

export default function Controller({ height, width }: { height: number, width: number }) {
    const [marked, setMarked] = useState<boolean[][]>(fillMatrix(height, width))

    const handleClick = (i: number, j: number) => {
        const newMarked = [...marked]
        newMarked[i][j] = !newMarked[i][j]
        setMarked(newMarked)
    }

    useEffect(() => {
        console.log('running useEffect inside WithController')
        if (height != marked.length || width != marked[0]?.length) {
            const newMatrix = fillMatrix(height, width)
            remember(newMatrix, marked)
            setMarked(newMatrix)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [height, width])

    return (
        <div className='wrapper'>
            {marked.map((row, i) => (
                <div key={i} className='row'>
                    {row.map((isMarked, j) => (
                        <Block key={i + j} isMarked={isMarked} onClick={() => { handleClick(i, j) }} />
                    ))}
                </div>
            ))}
        </div>
    )
}
