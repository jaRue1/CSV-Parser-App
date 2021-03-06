import React from 'react'
import ReactTable from 'react-table-6'
import LoadingBar from '../loader/LoadingBar'
import 'react-table-6/react-table.css'
// Using a functional component without state

function Table ({ data }){
  if (!data || !data[0] ){
    return <LoadingBar/>
  }
  const columns = Object.keys(data[0]).map((key) => { // 
    return {Header: key, accessor: key}
  })

  return(
    <ReactTable
      className= "-striped -highlight anime-table"
      data={data} // data that was passed in as a prop
      columns={columns}
      defaultPageSize={100}
      />
  )
}
export default Table