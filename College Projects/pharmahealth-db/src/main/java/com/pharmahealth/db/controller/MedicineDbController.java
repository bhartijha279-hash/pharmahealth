package com.pharmahealth.db.controller;

import com.pharmahealth.db.model.Medicine;
import com.pharmahealth.db.repository.MedicineRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medicines")
@CrossOrigin(origins = "*")
public class MedicineDbController {

    private final MedicineRepository repository;

    public MedicineDbController(MedicineRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Medicine> getAllMedicines() {
        return repository.findAll();
    }

    @PostMapping
    public Medicine addMedicine(@RequestBody Medicine medicine) {
        return repository.save(medicine);
    }
}