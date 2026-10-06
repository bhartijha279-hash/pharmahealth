function StatCards({ stats }) {
  return (
    <div className="stats-grid">

      <div className="stat-card">
        <div className="stat-icon green">💊</div>
        <h2>{stats.totalMedicines.toLocaleString()}</h2>
        <p>Total Medicines</p>
        <small className="positive">↑ 8.2% from last month</small>
      </div>

      <div className="stat-card">
        <div className="stat-icon blue">▣</div>
        <h2>{stats.stockValue}</h2>
        <p>Total Stock Value</p>
        <small className="positive">↑ 5.4% from last month</small>
      </div>

      <div className="stat-card">
        <div className="stat-icon yellow">⚠</div>
        <h2>{stats.lowStock}</h2>
        <p>Low Stock Items</p>
        <small className="warning">Needs restocking</small>
      </div>

      <div className="stat-card">
        <div className="stat-icon red">▣</div>
        <h2>{stats.expiryAlerts}</h2>
        <p>Expiry Alerts</p>
        <small className="danger">Within 30 days</small>
      </div>

    </div>
  );
}

export default StatCards;