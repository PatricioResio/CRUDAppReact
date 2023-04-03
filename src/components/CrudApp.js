import React, { useState } from 'react'
import CrudForm  from './CrudForm'
import CrudTable from './CrudTable'

const initialDb = [
  {
    id:1,
    name:"Jhon",
    family:"Snow",
    email:"js@gmail.com"
    
  },
  {
    id:2,
    name:"Daenerys",
    family:"Targaryen",
    email:"nn@gmail.com"
    
    },
  {
    id:3,
    name:"Ned",
    family:"Stark",
    email:"ns@gmail.com"
    
    },
  {
    id:4,
    name:"Arya",
    family:"Stark",
    email:"as@gmail.com"
  }
];
const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) =>{
    data.id = Date.now(); 
    setDb([...db, data]);
    
  };

  const updateData = (data) =>{
    let newData = db.map(el => el.id === data.id ? data: el);
    setDb(newData);
    
  };

  const deleteData = (id) =>{
    let isDelete = window.confirm (
      "are you sure u want to eliminate ", {id}," data?"
    );
    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData)
    }else {
      return;
    }
    
  };

/*   useEffect(() => {
   
  
    return () => {
      setDb(initialDb)
    }
  }, []) */
  
  return (
    <div><h2>CRUDApp</h2>
    <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
    <CrudTable data={db} setDb={setDb} deleteData={deleteData} setDataToEdit={setDataToEdit}/>
    </div>
  );
};

export default CrudApp