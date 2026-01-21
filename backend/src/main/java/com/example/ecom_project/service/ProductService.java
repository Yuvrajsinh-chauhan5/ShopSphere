package com.example.ecom_project.service;

import com.example.ecom_project.model.Product;
import com.example.ecom_project.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ProductService {

@Autowired
private ProductRepo repo;
    public List<Product> getAllproducts() {


        return repo.findAll();

    }

    public Product getProductById(int id) {
        return repo.findById(id).get();
    }


    public Product addProduct(Product product, MultipartFile imagefile) throws IOException {


        product.setImageName(imagefile.getOriginalFilename());
        product.setImageType(imagefile.getContentType());
        product.setImageData(imagefile.getBytes());
        return repo.save(product);


    }

    public Product updateproduct(int id, Product product, MultipartFile imagefile) throws IOException {

        product.setImageData(imagefile.getBytes());
        product.setImageName(imagefile.getOriginalFilename());
        product.setImageType(imagefile.getContentType());

        return repo.save(product);
    }

    public void deleteProduct(int id) {
        repo.deleteById(id);
    }

    public List<Product> searchProducts(String keyword) {
        return repo.searchProduct(keyword);
    }
}
