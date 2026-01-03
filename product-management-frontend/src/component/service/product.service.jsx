import axios from 'axios';

// Use relative paths with the /products prefix so Vite proxy (dev) and production API paths are clear
const API_PREFIX = "/products";

class ProductService {

    saveProduct(product) {
        return axios.post(`${API_PREFIX}/save`, product);
    }
    getAllProduct() {
        return axios.get(`${API_PREFIX}/`);
    }
    getProductById(id) {
        return axios.get(`${API_PREFIX}/${id}`);
    }
    deleteProduct(id) {
        return axios.delete(`${API_PREFIX}/delete/${id}`);
    }
    editProduct(id, product) {
        return axios.put(`${API_PREFIX}/edit/${id}`, product);
    }
}

// Export a singleton instance so consumers can call methods directly (productService.getAllProduct())
const productService = new ProductService();
export default productService;