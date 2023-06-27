import { ProviderDoCliente } from './components/Context'
import { Header } from './components/Header'
import { Home } from './components/Home'

import './App.css'

function App() {
  return (
    <ProviderDoCliente>
      <Header />
      <Home />
    </ProviderDoCliente>
  )
}

export default App