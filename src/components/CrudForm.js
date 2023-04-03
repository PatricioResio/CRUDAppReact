import React, { useState, useEffect } from 'react'

const initialForm = {
    name:"",
    family:"",
    email:"",
    checkbox: false,
    id: null
};


const CrudForm = ({createData, updateData, setDataToEdit, dataToEdit}) => {
    const [form, setForm] = useState(initialForm)
     
    useEffect(() => {
        if(dataToEdit){
        setForm(dataToEdit)
      } else{
        setForm(initialForm)
      }
      
      }, [dataToEdit])

    const handleSubmit = (e) =>{
         e.preventDefault();

         if (!form.name || !form.family || !form.email){
            alert ("please complete the form");
            return;
         }
         if(form.id === null){
            createData(form);
             alert("Data was created");
         }else{
            updateData(form);
            alert("Data was updated");
        }
        handleReset(); 
    }; 
    const handleChange = (e) =>{
         setForm ({
            ...form,
            [e.target.name]: e.target.value,
          }); 
    };
     const handleCheck = (e) =>{
        setForm ({
            ...form,
            [e.target.name]: e.target.checked,
          }); 
          }; 
     
    const handleReset = (e) =>{
        setForm (initialForm);
        setDataToEdit(null);
    };
    return (
    <div>
        <h3>{dataToEdit? "Edit the character " : "Add new Game of Thrones character" }</h3>
        <form  onSubmit={handleSubmit} >
            <>
            <label>Name</label>
        <input 
        type="text" 
        name="name" 
        placeholder='Name'
        value={form.name}
        onChange={handleChange} />
        </>
        <>
        <label>Family</label>
        <input 
        type="text" 
        name="family" 
        value={form.family}
        placeholder='Family'
        onChange={handleChange}/>
        </>
        <>
        <label>Email</label>
        <input 
        type="text" 
        name="email" 
        placeholder='Email'
        value={form.email} 
        onChange={handleChange}/>
        </>
        <>
        <input 
        type="checkbox" 
        name="checkbox"
         onChange={handleCheck} />
        </>
        <>
        <input 
        type="submit" 
        value="Send" 
         onClick={handleSubmit} />
        <input 
        type="reset" 
        value="Clean" 
        onClick={handleReset}/>
        </>
        </form>
    </div>
  )
}

export default CrudForm