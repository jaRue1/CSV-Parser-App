import React from 'react'
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'
// Using a functional component without state

const Table = ({ data }) => {
  if (!data || !data[0] ){
    return null
  }
  const columns = Object.keys(data[0]).map((key) => {
    return {Header: key, accessor: key}
  })

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