import React, { useState } from 'react'
import StatsCard from './StatsCard'
import MunicipalityList from './MunicipalityList'

const DashboardPanel = ({ stats }) => {
  const [showJaboatao, setShowJaboatao] = useState(false)
  const [showPetrolina, setShowPetrolina] = useState(false)

  const toggleJaboatao = () => setShowJaboatao(prev => !prev)
  const togglePetrolina = () => setShowPetrolina(prev => !prev)

  return (
    <div className="text-center">
      <div className="row">
        <StatsCard title="Total Geral de Inscritos" value={stats.total_inscritos ?? 0} />
        <StatsCard title="Inscritos em Jaboatão" value={stats.jaboatao ?? 0} />
        <StatsCard title="Inscritos em Petrolina" value={stats.petrolina ?? 0} />
        <StatsCard
          title="Municípios em Jaboatão"
          value={stats.municipios_jaboatao?.length ?? 0}
          onClick={toggleJaboatao}
        />
        <StatsCard
          title="Municípios em Petrolina"
          value={stats.municipios_petrolina?.length ?? 0}
          onClick={togglePetrolina}
        />
        <StatsCard title="Total de municípios inscritos" value={stats.total_municipios ?? 0} />
      </div>

      {showJaboatao && (
        <MunicipalityList
          title="Municípios com inscritos - Jaboatão"
          municipios={stats.municipios_jaboatao}
        />
      )}

      {showPetrolina && (
        <MunicipalityList
          title="Municípios com inscritos - Petrolina"
          municipios={stats.municipios_petrolina}
        />
      )}
    </div>
  )
}

export default DashboardPanel
