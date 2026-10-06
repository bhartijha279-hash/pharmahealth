package com.pharmahealth.api.controller;

import com.pharmahealth.api.model.DashboardStats;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {

    @GetMapping("/stats")
    public DashboardStats getDashboardStats() {

        return new DashboardStats(
                3,
                120,
                0,
                3
        );
    }
}