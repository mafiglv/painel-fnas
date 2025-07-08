import React from 'react'

const MunicipalityList = ({ title, municipios }) => (
  <div className="mt-4 list-container">
    <h5 className="text-navy fw-bold mb-3">{title}</h5>
    <ul className="list-group shadow-sm">
      {municipios.map((m, i) => (
        <li key={i} className="list-group-item text-center">{m}</li>
      ))}
    </ul>
  </div>
)

export default MunicipalityList
