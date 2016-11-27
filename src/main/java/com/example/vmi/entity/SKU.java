package com.example.vmi.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;


@Entity
@Table(
        name = "SKU",
        uniqueConstraints = @UniqueConstraint(columnNames = {"NAME", "FIT_ID"})
)
public class SKU implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", nullable = false, unique = true)
    private Long id;
    
    @Column(name = "NAME", nullable = false)
    private String name;
    
    @ManyToOne(optional = false)
    @JoinColumn(name = "FIT_ID", nullable = false)
    private Fit fit;
    
    @ManyToOne(optional = false)
    @JoinColumn(name = "BUYER_ID")
    private Buyer buyer;

    public SKU() {
    }

    public SKU(String sku, Fit fit, Buyer buyer) {
        this.name = sku;
        this.fit = fit;
        this.buyer = buyer;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Fit getFit() {
		return fit;
	}

	public void setFit(Fit fit) {
		this.fit = fit;
	}

	public Buyer getBuyer() {
		return buyer;
	}

	public void setBuyer(Buyer buyer) {
		this.buyer = buyer;
	}


}
