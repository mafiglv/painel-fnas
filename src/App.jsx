import React, { useEffect, useState } from 'react'
import DashboardPanel from './components/DashboardPanel'
import './styles/custom.css'
import logo from './assets/logo.png'

function App() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mafiglv/dados-fnas/refs/heads/main/inscricoes.json')
      .then(res => res.json())
      .then(data => setStats(data.estatisticas))
      .catch(err => console.error('Erro ao carregar dados:', err))
  }, [])

  return (
    <div className="app-container">
      <header className="text-center py-2 bg-navy text-white">
        <img src={logo} alt="Logo" className="logo-img mb-2" />
        <h1 className="display-5 fw-bold text-highlight">
          Painel geral de inscrições - FNAS pelo Brasil
        </h1>
        <p className="fst-italic text-update">
          Atualizado 06/08/2025 às 08:45
        </p>
      </header>

      <main className="container my-4">
        {stats ? (
          <DashboardPanel stats={stats} />
        ) : (
          <p>Carregando dados...</p>
        )}
      </main>
    </div>
  )
}

export default App
