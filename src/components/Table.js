import React from 'react'
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'
// Using a functional component without state

const Table = ({ data }) => {
  const firstRow = data[0] // the columns of the table
  const columns = []

  for (let key in firstRow){
    columns.push({Header: key, accessor: key })
  }
  return(
    <ReactTable
      className= "-striped -highlight"
      data={data} // data that was passed in as a prop
      columns={columns}
      defaultPageSize={100}
      />
  )
}
export default Table