import React, { useEffect, useState } from "react"
import productService from './service/product.service.jsx'
import { useNavigate, useParams } from "react-router";

const EditProduct = () => {
    const [product, setProduct] = useState({
        id:"",
        productName : "",
        description : "",
        price : "",
        status : "",
    });

    const {id} = useParams();
    console.log(id);

    const [msg, setMsg] = useState("")
//ai reponse 
    // useEffect(() => {
    //   productService
    //     .getProductById(id)
    //     .then((res) => {
    //       const p = res.data || {};
    //       setProduct({
    //         productName: p.productName ?? "",
    //         description: p.description ?? "",
    //         price: p.price ?? "",
    //         status: p.Status ?? p.status ?? "",
    //       });
    //     })
    //     .catch((error)=> {console.log(error)})
    // },[id])

    const navigate = useNavigate();

    useEffect(() => {
      if (!id) return;
      productService
        .getProductById(id)
        .then((res) => {
            const p = res.data || {};
            setProduct({
                id: p.id ?? "",
                productName: p.productName ?? "",
                description: p.description ?? "",
                price: p.price ?? "",
                status: p.Status ?? p.status ?? "",
            });
        })
        .catch((error)=> {console.log(error)})
    },[id])

    const handleChange =(e) => {
        const value = e.target.value;
        setProduct({...product, [e.target.name]: value})
    }

    const ProductUpdate = (e) => {
        e.preventDefault();
        // backend expects a field named 'Status' (capital S) — send that to match current backend
        const payload = {
            productName: product.productName,
            description: product.description,
            price: product.price,
            Status: product.status
        };
        console.log('Sending payload:', payload);
        // use edit endpoint for updating existing product
        productService.editProduct(id, payload)
            .then(res => {
                console.log('Product updated succesfully:', res.data);
                setMsg("Product successfully updated")
                // keep the form filled with updated values
                setProduct(prev => ({...prev, ...payload, status: payload.Status}));
                            navigate("/");

            })
            .catch(error => {
                if (error.code === 'ERR_NETWORK' || (error.request && !error.response)) {
                    console.error('Save failed: Network error. Could not reach backend. Ensure your Spring Boot app is running and listening on the expected port, and check CORS.', error);
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

                            <form onSubmit={(e)=>ProductUpdate(e)} method="post">
                                <div className="card-body">
                                    <label htmlFor="">Enter Description</label>
                                    <input
                                        type="text"
                                        name="description"
                                        className="form-control"
                                        value={product.description}
                                        onChange={(e)=>handleChange(e)}
                                    />
                                </div>

                                <div className="card-body">
                                    <label htmlFor="">Enter Status</label>
                                    <input
                                        type="text"
                                        name="status"
                                        className="form-control"
                                        value={product.status}
                                        onChange={(e)=>handleChange(e)}
                                    />
                                </div>

                                <div className="card-body">
                                    <label htmlFor="">Enter Price</label>
                                    <input
                                        type="number"
                                        name="price"
                                        className="form-control"
                                        value={product.price}
                                        onChange={(e)=>handleChange(e)}
                                    />
                                </div>

                                <div className="card-body">
                                    <label htmlFor="">Enter Product Name</label>
                                    <input
                                        type="text"
                                        name="productName"
                                        className="form-control"
                                        value={product.productName}
                                        onChange={(e)=>handleChange(e)}
                                    />
                                    <hr />
                                    <button type="submit" className="btn btn-primary col-md-12">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditProduct