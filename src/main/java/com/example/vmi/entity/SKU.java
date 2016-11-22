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
        uniqueConstraints = @UniqueConstraint(columnNames = {"SKU", "FIT_ID"})
)
public class SKU implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", nullable = false, unique = true)
    private Long id;
    
    @Column(name = "SKU", nullable = false)
    private String sku;
    
    @ManyToOne(optional = false)
    @JoinColumn(name = "FIT_ID", nullable = false)
    private Fit fit;
    
    @Column(name = "GRP", nullable = false)
    private int grp; //Group
    
    @ManyToOne(optional = false)
    @JoinColumn(name = "BUYER_ID")
    private Buyer buyer;

    public SKU() {
    }

    public SKU(String sku, Fit fit, int grp, Buyer buyer) {
        this.sku = sku;
        this.fit = fit;
        this.grp = grp;
        this.buyer = buyer;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}

	public Fit getFit() {
		return fit;
	}

	public void setFit(Fit fit) {
		this.fit = fit;
	}

	public int getGrp() {
		return grp;
	}

	public void setGrp(int grp) {
		this.grp = grp;
	}

	public Buyer getBuyer() {
		return buyer;
	}

	public void setBuyer(Buyer buyer) {
		this.buyer = buyer;
	}


}
