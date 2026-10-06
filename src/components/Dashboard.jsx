import { useState , useEffect} from "react";
import StatCards from "./StatCards";
import StockOverview from "./StockOverview";
import RecentTransactions from "./RecentTransactions";
import MedicineTable from "./MedicineTable";
import AddMedicine from "./AddMedicine";
import ReportsAnalytics from "./ReportsAnalytics";
import { getMedicines, addMedicine } from "../services/apiService";

function Dashboard() {
  const stats = {
    totalMedicines: 1248,
    stockValue: "₹8.52L",
    lowStock: 18,
    expiryAlerts: 12
  };

  const stockData = [
    { category: "Tablets", quantity: 412, percentage: 85 },
    { category: "Capsules", quantity: 286, percentage: 65 },
    { category: "Syrups", quantity: 198, percentage: 55 },
    { category: "Injectables", quantity: 124, percentage: 38 },
    { category: "Ointments & Creams", quantity: 76, percentage: 24 }
  ];

  const transactions = [
    { id: 1, customer: "Rahul Sharma", medicine: "Paracetamol", amount: 120, status: "Completed" },
    { id: 2, customer: "Priya Singh", medicine: "Amoxicillin", amount: 450, status: "Completed" },
    { id: 3, customer: "Amit Kumar", medicine: "Cough Syrup", amount: 240, status: "Completed" },
    { id: 4, customer: "Neha Patel", medicine: "Vitamin D3", amount: 180, status: "Completed" },
    { id: 5, customer: "Sunil Verma", medicine: "ORS", amount: 60, status: "Completed" }
  ];

  const [medicines, setMedicines] = useState([]);

useEffect(() => {
  getMedicines()
    .then((response) => {
      setMedicines(response.data);
    })
    .catch((error) => {
      console.error("Error fetching medicines:", error);
    });
}, []);

const [showAddMedicine, setShowAddMedicine] = useState(false);

const handleAddMedicine = (newMedicine) => {
  addMedicine(newMedicine)
    .then((response) => {
      setMedicines((currentMedicines) => [
        ...currentMedicines,
        response.data
      ]);

      setShowAddMedicine(false);
    })
    .catch((error) => {
      console.error("Error adding medicine:", error);
      alert("Failed to add medicine");
    });
};

  return (
    <div className="dashboard-layout">

      <aside className="sidebar">

        <div className="sidebar-brand">
          <div className="logo-icon">✚</div>
          <div>
            <h2>PharmaHealth</h2>
            <small>Pharmacy Management</small>
          </div>
        </div>

        <nav className="navigation">
          <a href="#" className="nav-item active">⌂ Dashboard</a>
          <button
  className="nav-item"
  onClick={() => document.getElementById("stock-management")?.scrollIntoView({ behavior: "smooth" })}
>
  Stock Management
</button>
          <a href="#" className="nav-item">▱ Supplier Management</a>
          <a href="#" className="nav-item">▤ Sales / Billing</a>
          <a href="#" className="nav-item">♙ Customer Management</a>
          <a href="#" className="nav-item">◷ Expiry & Batch Alerts</a>
          <a href="#" className="nav-item">↔️ Return & Exchange</a>
          <a href="#reports-analytics" className="nav-item">▥ Reports & Analytics</a>
        </nav>

        <div className="sidebar-bottom">
          <div className="admin-profile">
            <div className="profile-circle">A</div>
            <div>
              <strong>Admin</strong>
              <small>Administrator</small>
            </div>
          </div>

          <a href="#" className="logout">⇥ &nbsp; Logout</a>
        </div>

      </aside>

      <main className="main-content">

        <header className="topbar">
          <div className="search-container">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search medicine, customer, batch..."
            />
          </div>

          <div className="top-profile">
            <div className="profile-circle">A</div>
            <div>
              <strong>Admin</strong>
              <small>Administrator</small>
            </div>
          </div>
        </header>

        <section className="content">

          <div className="welcome-card">
            <div>
              <p className="small-heading">
                PHARMACY INVENTORY DASHBOARD
              </p>

              <h1>
                Good Morning,<strong> Admin</strong> ☀
              </h1>

              <p>
                Here's what's happening with your pharmacy today.
              </p>
            </div>

            <div className="date-box">
              📅 &nbsp; Monday, 07 September 2026
            </div>
          </div>

          <StatCards stats={stats} />

          <div className="dashboard-grid">
            <StockOverview stockData={stockData} />
            <RecentTransactions transactions={transactions} />
          </div>

          <MedicineTable medicines={medicines}
            onAddClick={() =>
            setShowAddMedicine(true)
           }            
          />

          <ReportsAnalytics />

          {showAddMedicine && (
            <AddMedicine
              onAdd={handleAddMedicine}
              onClose={() =>
               setShowAddMedicine(false)} 
            />
          )}

          <div className="alerts-panel">

            <div className="alert-title">
              🔔 &nbsp; Alerts & Reminders
            </div>

            <div className="alert-item">
              <div className="alert-icon">⚠</div>
              <div>
                <strong>12</strong>
                <p>Items nearing expiry</p>
                <a href="#">View details →</a>
              </div>
            </div>

            <div className="alert-item">
              <div className="alert-icon">▣</div>
              <div>
                <strong>18</strong>
                <p>Items low in stock</p>
                <a href="#">Restock now →</a>
              </div>
            </div>

            <div className="alert-item">
              <div className="alert-icon">↔️</div>
              <div>
                <strong>3</strong>
                <p>Pending returns/exchanges</p>
                <a href="#">View list →</a>
              </div>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;
