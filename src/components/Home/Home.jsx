import * as React from "react"
import { useTable } from "react-table"

export function Home() {
  const data = React.useMemo(
    () => [
      {
        id: 1,
        name: "Edgar",
        number: 22999999999,
      },
    ],
    []
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
    ],
    []
  )

  const table = useTable({ columns, data })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = table

  return (
    <table {...getTableProps}>
      <thead>

        {headerGroups.map(headerGroup => (

          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(columns => (
              <th {...columns.getHeaderProps()}>
                {columns.render('Header')}
              </th>

            ))}

          </tr>

        ))}
      </thead>

      <tbody {...getTableBodyProps()}>

        {rows.map(row => {
          prepareRow(row)

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                )

              })}

            </tr>

          )
        })}
      </tbody>
    </table>
  )
}