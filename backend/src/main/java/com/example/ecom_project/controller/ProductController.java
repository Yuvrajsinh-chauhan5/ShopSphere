package com.example.ecom_project.controller;


import com.example.ecom_project.model.Product;
import com.example.ecom_project.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityReturnValueHandler;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductService service;


    @RequestMapping("/")
    public String greet(){
        return "Hello to the ecommerce website developed using springboot as  backend and react as frontend";
    }






    @GetMapping("/products")
    public List<Product> getAllproducts(){
        return service.getAllproducts();
    }

    @GetMapping("/product/{id}")
    public Product getProduct(@PathVariable int id) {

        return service.getProductById(id);
    }

    @PostMapping("/product")
     public ResponseEntity<?> addProduct(@RequestPart("product") Product product,
                                         @RequestPart("imagefile") MultipartFile imagefile){
try {
    Product product1 = service.addProduct(product , imagefile);
    return new ResponseEntity<>(product1 , HttpStatus.CREATED);
}catch (Exception e) {
    return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
}
    }


    @GetMapping("/product/{productId}/image")
    public ResponseEntity<byte[]> getImageByProductId(@PathVariable int productId) {
        Product product = service.getProductById(productId);
        byte[] imageFile = product.getImageData();
        return ResponseEntity.ok()
                .contentType(MediaType.valueOf(product.getImageType()))
                .body(imageFile);

    }

    @PutMapping("/product/{id}")
    public ResponseEntity<String> updateProduct(@PathVariable int id,@RequestPart("product") Product product,
                                                @RequestPart("imagefile") MultipartFile imagefile){
        Product product1 = null;
        try{
             product1 = service.updateproduct(id,product,imagefile);
        } catch (IOException e) {
            return new ResponseEntity<>("Failed to update",HttpStatus.BAD_REQUEST);
        }


        if(product1 != null)
            return new ResponseEntity<>("updated",HttpStatus.OK);
        else{
            return new ResponseEntity<>("Failed to update",HttpStatus.BAD_REQUEST);
        }
    }


    @DeleteMapping("/product/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable int id){
        Product product = service.getProductById(id);
        if(product != null) {
            service.deleteProduct(id);
            return new ResponseEntity<>("Deleted", HttpStatus.OK);
        }
            else{
                return new ResponseEntity<>("Product not found",HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping("/product/search")
    public ResponseEntity<List<Product>> searchProducts(String keyword){
        System.out.println("Seraching with " + keyword);
        List<Product> products = service.searchProducts(keyword);

        return new ResponseEntity<>(products ,HttpStatus.OK);

    }


}
