import { createContext, useContext, useState } from "react"

const ContextoDoCliente = createContext({})

export function ProviderDoCliente({ children }) {
  const [clientes, setClientes] = useState([])

  function adicionarClienteNaTabela({ name, lastName, number }) {
    setClientes(state => [
      ...state,
      {
        name,
        lastName,
        number
      }
    ])
  }

  return (
    <ContextoDoCliente.Provider value={{ clientes, adicionarClienteNaTabela }}>
      {children}
    </ContextoDoCliente.Provider>
  )
}

const useContextoDoCliente = () => useContext(ContextoDoCliente)

export default useContextoDoCliente