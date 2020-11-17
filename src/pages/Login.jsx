import GhostContainer from '../components/ghost-container'
import md5 from 'md5'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ALERT_TOGGLE, LOADING_TOGGLE } from '../redux/actions-types'
import { auth } from '../firebase'

const Login = (props) => {
    const dispatch = useDispatch();
    let [mail, setMail] = useState('');
    let [password, setPassword] = useState('');

    const onSend = () => {
        dispatch({ type: LOADING_TOGGLE, isShow: true })

        auth.signInWithEmailAndPassword(mail, md5(password))
            .then(user => {
                dispatch({ type: LOADING_TOGGLE, isShow: false })

                dispatch({
                    type: ALERT_TOGGLE,
                    isShow: true,
                    isSuccess: true,
                    message: 'Başarıyla giriş yaptınız!'
                })
            })
            .catch(error => errorTrigger(error))
    }

    const errorTrigger = error => {
        dispatch({ type: LOADING_TOGGLE, isShow: false })

        dispatch({
            type: ALERT_TOGGLE,
            isShow: true,
            isSuccess: false,
            message: error.message
        })
    }

    return (
        <GhostContainer {...props}>
            {props.match && <h3>Giriş Yap</h3>}
            <input type="mail" placeholder="Mail Adresi" value={mail} onChange={(e) => setMail(e.target.value)} />
            <input type="password" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={onSend}>Giriş Yap</button>
        </GhostContainer>
    )
}

export default Login;