package com.pharmahealth.api.model;

public class DashboardStats {

    private int totalMedicines;
    private int totalStock;
    private int lowStockMedicines;
    private int totalCategories;

    public DashboardStats(int totalMedicines, int totalStock,
                          int lowStockMedicines, int totalCategories) {
        this.totalMedicines = totalMedicines;
        this.totalStock = totalStock;
        this.lowStockMedicines = lowStockMedicines;
        this.totalCategories = totalCategories;
    }

    public int getTotalMedicines() {
        return totalMedicines;
    }

    public int getTotalStock() {
        return totalStock;
    }

    public int getLowStockMedicines() {
        return lowStockMedicines;
    }

    public int getTotalCategories() {
        return totalCategories;
    }
}
