package com.example.ecom_project.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.xml.crypto.Data;
import java.math.BigDecimal;
import java.util.Date;
import java.util.regex.Pattern;

@Entity
@lombok.Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    private String brand;
    @Column(nullable = true)
    private BigDecimal price;
    private String category;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date releaseDate;

    @Column(nullable = true)
    private Boolean productAvailable;
    @Column(nullable = true)
    private Integer stockQuantity;

    private String imageName;
    private String imageType;

    @Lob
    private byte[] imageData;


}
