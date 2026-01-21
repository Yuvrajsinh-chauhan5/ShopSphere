package com.example.ecom_project.util;

import com.example.ecom_project.model.Product;
import com.example.ecom_project.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.util.List;

@Component
public class ImageLoader implements CommandLineRunner {

    @Autowired
    private ProductRepo productRepo;

    @Override
    public void run(String... args) throws Exception {
        List<Product> products = productRepo.findAll();

        for (Product product : products) {
            if (product.getImageData() == null && product.getImageName() != null) {
                try {
                    ClassPathResource resource = new ClassPathResource("static/images/" + product.getImageName());
                    byte[] imageBytes = Files.readAllBytes(resource.getFile().toPath());
                    product.setImageData(imageBytes);
                    productRepo.save(product);
                    System.out.println("Loaded image for: " + product.getName());
                } catch (IOException e) {
                    System.err.println("Failed to load image for: " + product.getName() + " - " + e.getMessage());
                }
            }
        }
    }
}
