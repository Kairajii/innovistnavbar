import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const PrivateRoute = (props:any) => {
    let {Component} = props;
    let navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!login) navigate('/login');
    },[])
  return (
    <div>
      <Component />
    </div>
  )
}

export default PrivateRoute
