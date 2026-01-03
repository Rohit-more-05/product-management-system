package com.becoder.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.becoder.model.Product;
import com.becoder.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository productRepository;
	
	@Override
	public Product saveProduct(Product product) {
		
		return productRepository.save(product);
	}

	@Override
	public List<Product> getAllProduct() {
		return productRepository.findAll();
	}

	@Override
	public Product getProductById(Integer id) {
		return productRepository.findById(id).get();
	}

	@Override
	public String deleteProduct(Integer id) {
		Product product = productRepository.findById(id).get();
		if(product != null) {			
			productRepository.delete(product);
			return "product Delete Successfully";
		}
		return "Error Occured";
		
	}

	@Override
	public Product editProduct(Integer id, Product product) {
		Product prevProduct = productRepository.findById(id).get();	
				
			prevProduct.setProductName(product.getProductName());
			prevProduct.setDescription(product.getDescription());
			prevProduct.setStatus(product.getStatus());
			prevProduct.setPrice(product.getPrice());
		
		
		return productRepository.save(prevProduct);
		
	}

	
}
