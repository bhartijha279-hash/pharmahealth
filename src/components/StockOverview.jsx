function StockOverview({ stockData }) {
  return (
    <div className="panel">

      <div className="panel-header">
        <h2>▣ &nbsp; Stock Overview</h2>
        <a href="#">View All →</a>
      </div>

      <div className="stock-list">

        {stockData.map((item) => (
          <div className="stock-item" key={item.category}>

            <div className="stock-info">
              <span>{item.category}</span>
              <strong>{item.quantity}</strong>
            </div>

            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default StockOverview;