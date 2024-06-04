import { useState } from "react"
import './Grid.css'

function Block() {
    const [isMarked, setIsMarked] = useState(false)

    const handleClick = () => {
        setIsMarked(!isMarked)
    }

    return (
        <div className='block' onClick={handleClick}>
            {isMarked ? 'X' : ''}
        </div>
    )
}

export default function NoController({ height, width }: { height: number, width: number }) {
    const renderCol = () => {
        const col = []
        for (let i = 0; i < width; ++i) {
            col.push(<Block key={i} />)
        }
        return col
    }

    const renderRows = () => {
        const row = []
        for (let i = 0; i < height; ++i) {
            row.push(<div key={i} className='row'>{renderCol()}</div>)
        }
        return row
    }

    return (
        <div className='wrapper'>
            {renderRows()}
        </div>
    )
}
