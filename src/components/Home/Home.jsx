import * as React from "react"
import { useTable } from "react-table"

import styles from './Home.module.css'

export function Home() {
  const data = React.useMemo(
    () => [
      {
        id: '1',
        firstName: 'Edgar',
        lastName: 'Barbosa',
        number: '22999999999',
      },
      {
        id: '2',
        firstName: 'Edgar',
        lastName: 'Barbosa',
        number: '22999999999',
      },
      {
        id: '3',
        firstName: 'Edgar',
        lastName: 'Barbosa',
        number: '22999999999',
      }
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Nome',
        accessor: 'firstName',
      },
      {
        Header: 'Sobrenome',
        accessor: 'lastName',
      },
      {
        Header: 'Número',
        accessor: 'number',
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
    <section className={styles.container}>
      <table className={styles.table__container} {...getTableProps}>
        <thead>

          {headerGroups.map(headerGroup => (

            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(columns => (
                <th className={styles.table__header} {...columns.getHeaderProps()}>
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
                    <td className={styles.table__cell} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  )

                })}

              </tr>

            )
          })}
        </tbody>
      </table>
    </section>
  )
}