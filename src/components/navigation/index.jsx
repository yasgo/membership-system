import { auth } from '../../firebase';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {

    const onSignOut = () => {
        auth.signOut()
            .then(() => console.log('çıkış yapıldı!'))
            .catch(error => console.log('Login Fail: ', error))
    }

    return (
        <nav>
            {
                auth.currentUser && (
                    <>
                        <Link to='/profile'>Profile</Link>
                        <FontAwesomeIcon onClick={onSignOut} icon={faSignOutAlt} />
                    </>
                )
            }
        </nav>
    )
}

export default Navigation