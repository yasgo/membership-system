import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ALERT_TOGGLE } from '../redux/actions-types/alert'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'

const Login = () => {

    const dispatch = useDispatch();
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const onSend = () => {
        auth.signInWithEmailAndPassword(username, password)
            .then(user => (
                dispatch({
                    type: ALERT_TOGGLE,
                    isShow: true,
                    isSuccess: true,
                    message: 'Başarıyla kayıt yaptınız!'
                })
            ))
            .catch(error => (
                dispatch({
                    type: ALERT_TOGGLE,
                    isShow: true,
                    isSuccess: false,
                    message: error.message
                })
            ))
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