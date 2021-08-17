import React, {useState} from 'react';
import axios from 'axios'

function Login(props) {
    const [state, setState] = useState({
        
            credentials:{
                username: '',
                password: ''
            }
        }
    )

    const  handleChange = (e)=>{
                setState({
                credentials:{
                    ...state.credentials,
                    [e.target.name]: e.target.value
                }
            })
        }
    const login = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', state.credentials)
        .then(res =>{
            localStorage.setItem('token', res.data.payload)
            
            props.history.push('/protected')
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    
    return (
        <div>
            <form onSubmit={login}>
             <input
                type='text'
                name='username'
                value={state.username}
                onChange={handleChange}
                />
             <input 
                type='password'
                name='password'
                value={state.password}
                onChange={handleChange}
             />
             <button>Log In</button>
             </form>
        </div>
    );
}

export default Login;