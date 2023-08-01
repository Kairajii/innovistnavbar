import React from 'react'

interface Props {
    name: string;
    email:string;
    password:string;
}

const User:React.FC<Props> = ({name,email,password}) => {
  return (
    <div>
        <h4>Name:{name}</h4>
        <h4>Email:{email}</h4>
        <h4>Password:{password}</h4>
    </div>
  )
}

export default User