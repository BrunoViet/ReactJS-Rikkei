import { useSelector, useDispatch } from 'react-redux'
import { downCount, upCount } from '../actions/countActions'

function Count() {
    //Bước 6: lấy state ra bằng hàm useSelector
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    //Bước 7: Định nghĩa các hàm và các xử lí trong hàm đó
    const handleUp = () => {
        dispatch(upCount(1))
    }

    const handleDown = () => {
        dispatch(downCount(1))
    }

    return (
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={handleUp}>UP</button>
                <button onClick={handleDown}>DOWN</button>
            </div>
        </>
    )
}

export default Count