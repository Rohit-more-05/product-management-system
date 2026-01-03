package com.becoder.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.becoder.model.Product;

public interface ProductService {
	
	public Product saveProduct(Product product);
	
	public List<Product> getAllProduct();
	
	public Product getProductById(Integer id);
	
	public String deleteProduct(Integer id);
	
	public Product editProduct (Integer id, Product product);
	
}
