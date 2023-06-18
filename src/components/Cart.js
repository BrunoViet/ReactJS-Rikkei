import { useDispatch, useSelector } from "react-redux"
import "./style.css"
import { deleteProduct, updateProductToCart } from "../actions/CartActions"
import { useState } from "react"

function Cart() {
    const dispatch = useDispatch()
    const listCart = useSelector(state => state.cart.cart)
    const [isEdit, setIsEdit] = useState(false)
    const [quantityEdit, setQuantityEdit] = useState()

    const handleUpdate = () => {
        setIsEdit(!isEdit)
    }

    const handleSaveEdit = (data) => {
        dispatch(updateProductToCart({
            data: {
                ...data, quantity: quantityEdit
            }
        }))

        setIsEdit(!isEdit)

    }

    const handleEditQuantity = (e) => {
        setQuantityEdit(e.target.value)
    }

    const handleDelete = (id) => {
        dispatch(deleteProduct(id))
    }
    return (
        <>
            <div>
                <h1 style={{ textAlign: "center", backgroundColor: "blue", color: "yellow" }}>Your Cart</h1>
                <table id="customers">

                    <tr>
                        <th>ID sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá tiền</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                        <th>Actions</th>
                    </tr>

                    {listCart.map((item, index) => {
                        return (
                            <>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td style={{ fontWeight: "bold" }}>{item.price} USD</td>
                                    <td style={{ fontWeight: "bold" }}>
                                        {isEdit ? <input
                                            type="number"
                                            defaultValue={item.quantity}
                                            onChange={(e) => handleEditQuantity(e)}

                                        /> : item.quantity}
                                    </td>
                                    <td style={{ fontWeight: "bold" }}>{item.price * item.quantity} USD</td>
                                    <td>
                                        {isEdit ?
                                            <>
                                                <button className="btn btn-success"
                                                    onClick={() => handleSaveEdit(item)}
                                                >
                                                    Save
                                                </button>
                                                <button className="btn btn-secondary ms-2"
                                                    onClick={handleUpdate}
                                                >Cancel</button>
                                            </>
                                            : <button className="btn btn-primary"
                                                onClick={handleUpdate}
                                            >
                                                Update
                                            </button>
                                        }
                                        <button className="btn btn-danger ms-2"
                                            onClick={() => handleDelete(item.id)}
                                        >Delete</button>
                                    </td>
                                </tr>

                            </>
                        )
                    })}
                </table>
            </div>
        </>
    )
}
export default Cart