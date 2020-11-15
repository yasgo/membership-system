import './style.scss'
import { Link } from 'react-router-dom'
import Navigation from '../navigation'
import { auth } from '../../firebase'

const Header = () => {
    return (
        <header className={auth.currentUser ? null : 'fixed'}>
            <Link to='/'>
                <h1>Membership System</h1>
            </Link>
            <Navigation />
        </header>
    )
}

export default Header