import * as React from "react"
import { useTable } from "react-table"

export function Home() {
  const data = React.useMemo(
    () => [
      {
        id: 1,
        name: "Edgar",
        number: 22999999999,
      }
    ]
  )

  const columns = React.useMemo(
    () => [
      {
        Header: "id",
        acessor: 'id',
      },
      {
        Header: "Nome",
        acessor: 'name',
      },
      {
        Header: "Número",
        acessor: 'number',
      }
    ]
  )

  return (
    <table>
      <thead>
        <th></th>
        <th></th>
        <th></th>
      </thead>

      <tbody></tbody>
    </table>
  )
}