import React from 'react'

  

const CrudRowTable = ({el, setDataToEdit, deleteData}) => {
  let {name, family, id} = el;
  return (
    <tr>
        <td name="name">{name}</td>
        <td name="family">{family}</td>
        <td>
            <button onClick={() =>setDataToEdit(el)} >Edit</button>
            <button onClick={() =>deleteData(id)}>Delete</button>
        </td>
    </tr>
  )
}

export default CrudRowTable