import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../actions/CartActions";
import listProductReducer from "../reducers/ListProductReducers";
import { useEffect, useState } from "react";

function ListProduct() {
    const listProduct = useSelector(state => state.listProduct.products);
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)

    const handleSelect = (data) => {
        dispatch(addProductToCart({
            data: { ...data, quantity: quantity }
        }))

    }
    const handleChangeQuantity = (e) => {
        setQuantity(e.target.value)
    }
    return (
        <>
            <h1 style={{ textAlign: "center", backgroundColor: "silver", color: "green" }}>List Products</h1>
            <div className="container">
                {listProduct.map((item, index) => {
                    return (
                        <>
                            <div className="row mt-3" key={item.id}>
                                <div className="col-md-4 col-sm-3">
                                    <img src={item.imgUrl} alt="" height="200px" width="250px" />
                                </div>
                                <div className="col-md-6 col-sm-7">
                                    <h2>{item.name}</h2>
                                    <p>{item.description}</p>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <input type="number"
                                        defaultValue={1}
                                        onChange={(e) => handleChangeQuantity(e)} className="mb-5 ms-3" min="1"

                                        style={{ textAlign: "center", width: "50px" }} />

                                    <button type="button"
                                        onClick={() => handleSelect(item)}
                                        className="mt-5 btn btn-warning">
                                        Mua với giá {item.price} USD
                                    </button>
                                </div>
                            </div>
                            <hr style={{ color: "grey" }} />
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default ListProduct;