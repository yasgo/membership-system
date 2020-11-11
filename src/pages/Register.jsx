import { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'

const Register = () => {

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const onSend = () => {
        auth.createUserWithEmailAndPassword(username, password)
            .then(user => console.log('userrrr: ', user))
            .catch(error => console.log('Register Fail :(', error))
    }

    return (
        <div>
            <h3>Üye Ol</h3>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={onSend}>Send</button>
            <Link to='/login'>Giriş Yap</Link>
        </div>
    )
}

export default Register;