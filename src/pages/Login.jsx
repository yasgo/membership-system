import { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'

const Login = () => {

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const onSend = () => {
        auth.signInWithEmailAndPassword(username, password)
            .then(user => console.log('userrrr: ', user))
            .catch(error => console.log('Login Fail :(', error))
    }

    return (
        <div>
            <h3>Giriş Yap</h3>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={onSend}>Send</button>
            <Link to='/register'>Üye Ol</Link>
        </div>
    )
}

export default Login;