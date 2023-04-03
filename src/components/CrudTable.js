import React from 'react'
import CrudTableRow from "./CrudRowTable"

const CrudTable = ({data, setDataToEdit, deleteData}) => {
  
  return (
    <div>
        <h2>Characters</h2>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Family</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                
          {data.length === 0 ? 
            <tr>
                <td colSpan="3">No data</td>
            </tr> 
          :
              data.map((el)=><CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData}/>)
              
          }
            </tbody>
        </table>
    
    
    
    </div>
  )
}

export default CrudTable