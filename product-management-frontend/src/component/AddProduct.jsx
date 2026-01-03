import React, { useState } from "react"
import productService from './service/product.service.jsx'

const AddProduct = () => {
    const [product, setProduct] = useState({
        productName : "",
        description : "",
        price : "",
        status : "",
    });
    const [msg, setMsg] = useState("")


    const handleChange =(e) => {
        const value = e.target.value;
        setProduct({...product, [e.target.name]: value})
    }

    const ProductRegister = (e) => {
        e.preventDefault();
        // backend expects a field named 'Status' (capital S) — send that to match current backend
        const payload = {
            productName: product.productName,
            description: product.description,
            price: product.price,
            Status: product.status
        };
        console.log('Sending payload:', payload);
        productService.saveProduct(payload)
            .then(res => {
                console.log('Product saved succesfully:', res.data);
                setMsg("Product succesfully Added")
                // reset form
                setProduct({ productName: "", description: "", price: "", status: "" });
            })
            .catch(error => {
                if (error.code === 'ERR_NETWORK' || (error.request && !error.response)) {
                    console.error('Save failed: Network error. Could not reach backend at http://localhost:8080/products/save. Ensure your Spring Boot app is running and listening on the expected port, and check CORS (use http://localhost:5173 as allowed origin).', error);
                } else {
                    console.error('Save failed:', error);
                }
            });
    }

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header fs-3 text-center">
                                Add Product
                            </div>{
                                msg && <p className="fs-4 text-center text-success">{msg}</p>
                            }

                            <form onSubmit={ProductRegister} method="post">
                                <div className="card-body">
                                    <label htmlFor="">Enter Description</label>
                                    <input
                                        type="text"
                                        name="description"
                                        className="form-control"
                                        value={product.description}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="card-body">
                                    <label htmlFor="">Enter Status</label>
                                    <input
                                        type="text"
                                        name="status"
                                        className="form-control"
                                        value={product.status}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="card-body">
                                    <label htmlFor="">Enter Price</label>
                                    <input
                                        type="number"
                                        name="price"
                                        className="form-control"
                                        value={product.price}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="card-body">
                                    <label htmlFor="">Enter Product Name</label>
                                    <input
                                        type="text"
                                        name="productName"
                                        className="form-control"
                                        value={product.productName}
                                        onChange={handleChange}
                                    />
                                    <hr />
                                    <button type="submit" className="btn btn-primary col-md-12">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddProduct