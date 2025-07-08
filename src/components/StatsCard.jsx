import React from 'react'

const StatsCard = ({ title, value, onClick }) => (
  <div className="col-md-4 col-sm-6 mb-3">
    <div
      className={`card h-100 text-center ${onClick ? 'card-clickable' : ''}`}
      onClick={onClick}
    >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text display-6 fw-bold">{value}</p>
      </div>
    </div>
  </div>
)

export default StatsCard
