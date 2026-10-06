import { useEffect, useState } from "react";
import { getSales } from "../services/apiService";

function ReportsAnalytics() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    getSales()
      .then((response) => {
        setSales(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sales:", error);
      });
  }, []);

  const totalMedicines = sales.reduce(
    (total, day) => total + day.medicinesSold,
    0
  );

  const totalEarnings = sales.reduce(
    (total, day) => total + day.earnings,
    0
  );

  return (
    <div className="reports-analytics" id="reports-analytics">
      <div className="reports-header">
        <div>
          <h2>📊 Reports & Analytics</h2>
          <p>Weekly sales and earnings overview</p>
        </div>
      </div>

      <div className="report-summary">
        <div className="report-card">
          <span>💊</span>
          <div>
            <p>Medicines Sold</p>
            <h3>{totalMedicines}</h3>
          </div>
        </div>

        <div className="report-card">
          <span>💰</span>
          <div>
            <p>Total Earnings</p>
            <h3>₹{totalEarnings.toLocaleString("en-IN")}</h3>
          </div>
        </div>
      </div>

      <div className="sales-chart">
        <h3>Weekly Sales</h3>

        <div className="chart-bars">
          {sales.map((day) => (
            <div className="bar-column" key={day.id}>
              <div
                className="bar"
                style={{
                  height: `${(day.earnings / 6100) * 180}px`,
                }}
                title={`₹${day.earnings}`}
              ></div>

              <span>{day.day.slice(0, 3)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sales-table">
        <h3>Weekly Sales Details</h3>

        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Medicines Sold</th>
              <th>Earnings</th>
            </tr>
          </thead>

          <tbody>
            {sales.map((day) => (
              <tr key={day.id}>
                <td>{day.day}</td>
                <td>{day.medicinesSold}</td>
                <td>₹{day.earnings.toLocaleString("en-IN")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReportsAnalytics;