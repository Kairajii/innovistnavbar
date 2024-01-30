import React, { useState } from 'react'

const Form = () => {
    const [formData,setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleChange=(e:any)=>{
        const {name,value }= e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const handleSubmit=(e:any)=>{
        e.preventDefault();
        console.log("formData:" ,formData)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Enter Name' value={formData.name} onChange={handleChange}/>
        <input type="email" name='email' placeholder='Enter Email' value={formData.email } onChange={handleChange}/>
        <input type="password" name='password' placeholder='Enter Password' value={formData.password} onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form
