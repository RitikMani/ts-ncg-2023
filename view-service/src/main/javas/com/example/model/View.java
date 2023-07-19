package com.example.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class View {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String chartType;
    private String country;
    private String indicator;
    private String startDate;
    private String endDate;

    // Getters and setters go here...

    // You can add constructors and other methods as needed.
}
