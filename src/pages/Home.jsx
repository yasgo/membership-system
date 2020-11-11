import { useSelector } from 'react-redux'
import { auth } from '../firebase';

const Home = () => {
    const user = useSelector(state => state.firebase).user;

    const onSignOut = () => {
        auth.signOut()
            .then(() => console.log('çıkış yapıldı!'))
            .catch(error => console.log('Login Fail: ', error))
    }

    return (
        <div>
            <p>Hoşgeldiniz {user.email}</p>
            <button onClick={onSignOut}>Çıkış Yap</button>
        </div>
    )
}

export default Home;