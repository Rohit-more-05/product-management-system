import React, { useEffect, useState } from "react"
import productService from "./service/product.service"
import { Link } from "react-router"

const Home = () => {
    const [productList, setProductList] = useState([])
    const [msg, setMsg] = useState("")

    const init = ()=> {
       productService
            .getAllProduct()
            .then((res) => {
                console.log(res.data)
                setProductList(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
       init()
    }, [])

        const deleteProduct = (id) => {
            productService
            .deleteProduct(id)
            .then((res)=>{
                init();
                setMsg("Deleted Successfully")
            })
            .catch((error) => {
                console.error('Delete failed:', error);
                // // show backend error message when available
                // const serverMessage = error.response && (error.response.data?.message || JSON.stringify(error.response.data));
                // setMsg(serverMessage || 'Delete failed; see console for details');
            })
        }

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12 offset-md-3">
                    <div className="card">
                        <div className="card-header fs-3 text-center">
                            All Product List
                        </div>
                        {
                                msg && <p className="fs-4 text-center text-success">{msg}</p>
                            }
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">S1 no.</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">status</th>
                                        <th scope="col">Action</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {productList && productList.length > 0 ? (
                                        productList.map((p, index) => (
                                            <tr key={p.id ?? index}>
                                                <td>{index + 1}</td>
                                                <td>{p.productName}</td>
                                                <td>{p.description}</td>
                                                <td>{p.price}</td>
                                                <td>{p.Status ?? p.status ?? ''}</td>
                                                <td>
                                                    {/* actions: edit / delete */}
                                                    <Link to={'EditProduct/'+p.id} className="btn btn-sm btn-info">Edit</Link>
                                                    <button onClick={() => deleteProduct(p.id)} className="btn btn-sm btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={6} className="text-center">No products found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home