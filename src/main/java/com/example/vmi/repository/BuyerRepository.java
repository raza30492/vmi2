package com.example.vmi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.vmi.entity.Buyer;

public interface BuyerRepository extends JpaRepository<Buyer, Integer> {

}
