import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ALERT_TOGGLE, LOADING_TOGGLE } from '../redux/actions-types'
import { auth } from '../firebase'

const Register = () => {

    const dispatch = useDispatch()
    let [mail, setMail] = useState('')
    let [password, setPassword] = useState('')
    let [name, setName] = useState('')

    const onSend = () => {
        dispatch({ type: LOADING_TOGGLE, isShow: true })

        auth.createUserWithEmailAndPassword(mail, password)
            .then(user => {
                updateUserName()

                dispatch({ type: LOADING_TOGGLE, isShow: false })

                dispatch({
                    type: ALERT_TOGGLE,
                    isShow: true,
                    isSuccess: true,
                    message: 'Başarıyla kayıt yaptınız!'
                })
            })
            .catch(error => errorTrigger(error))
    }

    const updateUserName = (user) => {
        auth.currentUser.updateProfile({ displayName: name }).then(() => {
            console.log('Kullanıcının ismi başarıyla değiştirildi!')
        }).catch((error) => errorTrigger(error));
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
        <>
            <input type="text" placeholder="İsim" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="mail" placeholder="Mail Adresi" value={mail} onChange={(e) => setMail(e.target.value)} />
            <input type="password" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={onSend}>Üye Ol</button>
        </>
    )
}

export default Register;