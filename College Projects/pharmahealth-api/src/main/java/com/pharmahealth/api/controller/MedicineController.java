package com.pharmahealth.api.controller;

import com.pharmahealth.api.model.Medicine;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/medicines")
@CrossOrigin(origins = "*")
public class MedicineController {

    private final List<Medicine> medicines = new ArrayList<>();

    public MedicineController() {
        medicines.add(new Medicine(1L, "Paracetamol 500mg", "Pain Relief", 50, 25.0));
        medicines.add(new Medicine(2L, "Amoxicillin 500mg", "Antibiotic", 30, 60.0));
        medicines.add(new Medicine(3L, "Cetirizine 10mg", "Allergy", 40, 20.0));
    }

    @GetMapping
    public List<Medicine> getAllMedicines() {
        return medicines;
    }

    @PostMapping
    public Medicine addMedicine(@RequestBody Medicine medicine) {
        medicines.add(medicine);
        return medicine;
    }

    @PutMapping("/{id}")
    public Medicine updateMedicine(@PathVariable Long id,
                                   @RequestBody Medicine updatedMedicine) {

        for (int i = 0; i < medicines.size(); i++) {
            if (medicines.get(i).getId().equals(id)) {
                medicines.set(i, updatedMedicine);
                return updatedMedicine;
            }
        }

        return null;
    }

    @DeleteMapping("/{id}")
    public String deleteMedicine(@PathVariable Long id) {

        medicines.removeIf(medicine -> medicine.getId().equals(id));

        return "Medicine deleted successfully";
    }
}