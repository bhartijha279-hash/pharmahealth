package com.pharmahealth.db.repository;

import com.pharmahealth.db.model.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicineRepository extends JpaRepository<Medicine, Long> {
}