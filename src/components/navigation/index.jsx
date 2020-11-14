import { Link } from 'react-router-dom'
import { auth } from '../../firebase';

const Navigation = () => {
    const loginAfterNavigation = () => {
        return (
            <>
                <Link to='/profile'>Profile</Link>
            </>
        )
    }

    const loginBeforeNavigation = () => {
        return (
            <>
                {/* <Link to='/login'>Login</Link> */}
            </>
        )
    }

    return (
        <nav>
            {
                auth.currentUser ? (
                    loginAfterNavigation()
                ) : (
                        loginBeforeNavigation()
                    )
            }
        </nav>
    )
}

export default Navigation